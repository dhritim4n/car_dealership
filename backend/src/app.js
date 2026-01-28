import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { form_router } from './routes/form.routes.js';


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/form",form_router)

export default app;