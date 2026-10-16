import express from 'express'
import { protect } from '../middlewares/authMiddlewares.ts'
import { generatePost, getGenerations, getPosts, schedulePost } from '../controllers/postController.ts'
import { upload } from '../config/multer.ts'

const postRouter = express.Router();

postRouter.get('/', protect, getPosts);
postRouter.get('/generations', protect, getGenerations);
postRouter.post('/', protect, upload.single("media"), schedulePost);
postRouter.post('/generate', protect, generatePost);


export default postRouter;
