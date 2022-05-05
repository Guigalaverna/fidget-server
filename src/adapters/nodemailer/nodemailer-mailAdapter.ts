import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const transport = nodemailer.createTransport({
  // @ts-expect-error
  host,
  port,
  auth: {
    user,
    pass,
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
