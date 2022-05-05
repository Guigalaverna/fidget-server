import { Feedback } from "@prisma/client";

export interface FeedbackData {
  type: "bug" | "idea" | "thougt";
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (data: FeedbackData) => Promise<void>;
}
