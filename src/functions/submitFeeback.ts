import { FeedbackRepository } from "../repositories";

interface SubmitFeedbackRequest {
  type: "bug" | "idea" | "thougt";
  comment: string;
  screenshot?: string;
}

export class SubmitFeedback {
  constructor(private feedbackRepository: FeedbackRepository) {}

  async execute(request: SubmitFeedbackRequest) {
    const { type, comment, screenshot } = request;

    const feedback = await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    return feedback;
  }
}
