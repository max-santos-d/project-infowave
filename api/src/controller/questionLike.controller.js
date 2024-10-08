import questionLikeService from '../services/questionLike.service.js';

export const index = async (req, res) => {
  try {
    const response = await questionLikeService.index(req.requestUserId);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await questionLikeService.update(req.questionParams._id, req.requestUserId);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
