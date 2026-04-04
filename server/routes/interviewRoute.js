import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { upload } from "../middlewares/multer.js";
import { anlyzeResume } from "../controllers/interviewController.js";

const interviewRouter = express.Router();

interviewRouter.post("/resume",isAuth,upload.single("resume"),anlyzeResume)
export default interviewRouter;
