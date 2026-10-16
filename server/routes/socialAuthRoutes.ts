import express from "express";
import { generateAuthUrl, syncAccounts } from "../controllers/socialAuthController.ts";
import { protect } from "../middlewares/authMiddlewares.ts";

const socialAuthRouter = express.Router();


socialAuthRouter.get('/:platform/url',protect, generateAuthUrl)
socialAuthRouter.get('/sync', protect, syncAccounts)

export default socialAuthRouter;
