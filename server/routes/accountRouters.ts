import express from 'express';
import { protect } from '../middlewares/authMiddlewares.ts';
import { addAccount, disconnectAccount, getAccounts } from '../controllers/accountControllers.ts';


const accountRouter = express.Router();

accountRouter.get('/', protect, getAccounts);
accountRouter.post('/', protect, addAccount);
accountRouter.delete('/:id', protect, disconnectAccount);


export default accountRouter;