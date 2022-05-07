import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cbd2d040277e35",
    pass: "c8f576b333c146",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    await transport.sendMail({
      from: "Fidget <oi@fidget.com>",
      to: "Guilherme Galaverna <guigalaverna@gmail.com>",
      subject: data.subject,
      html: data.body,
    });
  }
}
