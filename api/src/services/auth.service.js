import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import authRepositorie from '../repositories/auth.repositorie.js';

const auth = async ({ email, password }) => {
  if (!email || !password) throw new Error('Email and Password required!');

  const user = await authRepositorie.showUser(email);

  if (!user) throw new Error('User not found, check if the email and password were entered correctly.');

  const passwordValdation = bcrypt.compareSync(password, user.password);

  if (!passwordValdation) throw new Error('User not found, check if the email and password were entered correctly.');

  const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT, {
    expiresIn: 60 * 60 * 24,
  });

  console.log(user);

  return [{ token, user }];
};

export default {
  auth,
};
