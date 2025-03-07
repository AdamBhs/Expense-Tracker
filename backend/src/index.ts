import express from "express";
import cors from "cors";
import morgan from "morgan";
import { protect } from "./middlewares/authMiddleware";
import router from "./routes/router";
import authRouter from './routes/authRouter';


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// middleware
app.use('/api', protect, router); 
app.use('/', authRouter);

export default app;