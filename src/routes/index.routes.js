import { Router } from 'express';

import userRoutes from './user.routes.js';
import userTypeRoutes from './userType.routes.js';
import postRoutes from './post.routes.js';
import postLikeRoutes from './postLike.routes.js';
import postMessageRoutes from './postMessage.routes.js';
import questionRoutes from './question.routes.js';
import questionLikeRoutes from './questionLike.routes.js';
import questionMessageRoutes from './questionMessage.routes.js';
import authRoutes from './auth.routes.js';
import questionSearchByUser from './questionSearchByUser.routes.js';

const router = Router();

// auth
router.use('/auth', authRoutes);

// user
router.use('/user', userRoutes);
router.use('/userType', userTypeRoutes);

// post
router.use('/post', postRoutes);
router.use('/postLike', postLikeRoutes);
router.use('/postMessage', postMessageRoutes);

// question
router.use('/question', questionRoutes);
router.use('/questionLike', questionLikeRoutes);
router.use('/questionMessage', questionMessageRoutes);
router.use('/questionSearchByUser', questionSearchByUser);

export default router;
