import { Router } from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mailAdapter";
import { SubmitFeedback } from "./functions/submitFeeback";
import { PrismaFeedbackRepostory } from "./repositories/PrismaFeedbackRepository";

const router = Router();

router.post("/feedback/create", async (req, res) => {
  const prismaFeedbackRepository = new PrismaFeedbackRepostory();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedback = new SubmitFeedback(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  );

  await submitFeedback.execute({
    type: req.body.type,
    comment: req.body.comment,
    screenshot: req.body.screenshot,
  });

  res.status(201).send();
});

export { router };
