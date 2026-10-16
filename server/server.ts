import "dotenv/config";
import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import cors from "cors";
import connectDB from "./config/db.ts";
import authRouter from "./routes/authRoutes.ts";
import socialAuthRouter from "./routes/socialAuthRoutes.ts";
import accountRouter from "./routes/accountRouters.ts";
import postRouter from "./routes/postRoutes.ts";
import activityRouter from "./routes/activityRoutes.ts";
import { initScheduler } from "./services/schedulerService.ts";

const app = express();

//Database connection

await connectDB() 

// Middleware
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use("/api/auth", authRouter)
app.use("/api/oauth", socialAuthRouter)
app.use("/api/accounts", accountRouter);
app.use("/api/posts", postRouter)
app.use("/api/activity", activityRouter)

// initialize scheduler
initScheduler()


// global error handler

app.use((err: any, req: Request, res: Response, next: NextFunction)=>{
    console.error(err);
    res.status(500).send(err?.response?.data?.message || err?.message)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


// pass: ClM1zyVXP5iOsmCa
