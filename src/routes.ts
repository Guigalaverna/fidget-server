import { Router } from "express";
import { FeedbackController } from "./Feedback";

const router = Router();

const controller = new FeedbackController();

router.post("/feedback/create", controller.handle);

export { router };
