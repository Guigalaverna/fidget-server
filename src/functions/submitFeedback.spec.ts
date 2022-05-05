import { SubmitFeedback } from "./submitFeeback";

const createFeedbackSpy = jest.fn();
const sendFeedbackSpy = jest.fn();

describe("submitFeedback test", () => {
  const submitFeedback = new SubmitFeedback(
    { create: createFeedbackSpy },
    { sendMail: sendFeedbackSpy }
  );

  it("should be able to submit new feedback", async () => {
    const feedback = {
      type: "bug",
      comment: "This is a bug",
      screenshot: "data:image/png;base64,...",
    };

    // @ts-ignore
    expect(submitFeedback.execute(feedback)).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendFeedbackSpy).toHaveBeenCalled();
  });

  it("should not be able to submit new feedback without type", async () => {
    const feedback = {
      comment: "This is a bug",
      screenshot: "data:image/png;base64,...",
    };

    // @ts-ignore
    expect(submitFeedback.execute(feedback)).rejects.toThrow(
      "Type is required"
    );
  });

  it("should not be able to submit new feedback without comment", async () => {
    const feedback = {
      type: "bug",
      screenshot: "data:image/png;base64,...",
    };

    // @ts-ignore
    expect(submitFeedback.execute(feedback)).rejects.toThrow(
      "Comment is required"
    );
  });

  it("should not be able to submit new feedback with invalid screenshot", async () => {
    const feedback = {
      type: "bug",
      comment: "This is a bug",
      screenshot: "This is a invalid screenshot",
    };

    // @ts-ignore
    expect(submitFeedback.execute(feedback)).rejects.toThrow(
      "Invalid screenshot"
    );
  });
});
