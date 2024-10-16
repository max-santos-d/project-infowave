import jwt from 'jsonwebtoken';

import userRepositorie from '../repositories/user.repositorie.js';

export const authChekerMiddleware = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) return res.status(400).json({ responseError: 'Authorization token not provided!' });

    const [schema, token] = authorization.split(' ');

    if (!schema || !token) return res.status(401).json({ responseError: 'Token verification error!' });
    if (schema !== 'Bearer') return res.status(401).json({ responseError: 'Token verification error!' });

    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
      if (err) return res.status(401).json({ response: 'Token verification error!' });

      const user = await userRepositorie.show(decoded.id);

      if (!user) return res.status(401).json({ responseError: 'Request user not found!' });
      if (user.tokenVersion !== decoded.tokenVersion) return res.status(401).json({ responseError: 'Invalid Token.' });

      req.requestUserId = user._id;
      return next();
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
