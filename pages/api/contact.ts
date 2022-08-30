// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  status: string;
  message?: string;
  messageId?: string;
};

// eslint-disable-next-line require-jsdoc
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    secure: true,
  });

  try {
    const emailToSend = await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p>
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Phone: </strong> ${phone} </p>
      <p><strong>Subject: </strong> ${subject} </p>
      <p><strong>Message: </strong> ${message} </p>`,
    });
    console.log("Message Send", emailToSend.messageId);
    res.status(200).json({
      status: "Ok",
      message: "Thank you for getting in touch!",
      messageId: emailToSend.messageId,
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ status: "Failed" });
  }
}
