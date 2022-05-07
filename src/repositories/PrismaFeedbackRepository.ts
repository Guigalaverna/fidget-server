import { Feedback } from "@prisma/client";
import { prismaClient } from "../lib/prisma";
import { FeedbackData, FeedbackRepository } from ".";

export class PrismaFeedbackRepostory implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackData): Promise<void> {
    await prismaClient.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
