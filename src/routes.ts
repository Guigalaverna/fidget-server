import { Router } from "express";
import { SubmitFeedback } from "./functions/submitFeeback";
import { PrismaFeedbackRepostory } from "./repositories/PrismaFeedbackRepository";

const router = Router();

router.post("/feedback/create", async (req, res) => {
  const prismaFeedbackRepository = new PrismaFeedbackRepostory();
  const submitFeedback = new SubmitFeedback(prismaFeedbackRepository);

  await submitFeedback.execute({
    type: req.body.type,
    comment: req.body.comment,
    screenshot: req.body.screenshot,
  });

  res.status(201).send();
});

export { router };
