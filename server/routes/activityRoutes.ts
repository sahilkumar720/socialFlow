import express from 'express';
import { protect } from '../middlewares/authMiddlewares.ts';
import { getActivity } from '../controllers/activityController.ts';

const activityRouter = express.Router();
activityRouter.get('/', protect, getActivity)

export default activityRouter