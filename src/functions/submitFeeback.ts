import { MailAdapter } from "../adapters/mailAdapter";
import { FeedbackRepository } from "../repositories";

interface SubmitFeedbackRequest {
  type: "bug" | "idea" | "thougt";
  comment: string;
  screenshot?: string;
}

export class SubmitFeedback {
  constructor(
    private feedbackRepository: FeedbackRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64,")) {
      throw new Error("Invalid screenshot");
    }

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        "<div>",
        `<h1>Novo feedback</h1>`,
        `<p>Tipo: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        "</div>",
      ].join("\n"),
    });
  }
}
