import { Request, Response } from "express";
import { prismaClient } from "../lib/prisma";

export class FeedbacksController {
  async handle(req: Request, res: Response) {
    const { type, comment, screenshot } = req.body

    try {
      const feedback = await prismaClient.feedback.create({
        data: {
          type, comment, screenshot
        }
      })

      return res.status(201).json({ data: feedback })
    } catch (error) {
      return res.status(404).json(error)
    }
  }
}