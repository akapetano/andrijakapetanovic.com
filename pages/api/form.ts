import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const path = require("path");
const hbs = require("nodemailer-express-handlebars");

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  message: string;
  token: string;
}

async function validateHuman(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data.success;
}

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("./src/templates/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./src/templates/"),
  extName: "/handlebars",
};

export default async function ContactApi(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { firstName, lastName, email, title, message, token }: FormData =
    request.body;

  const human = await validateHuman(token);

  if (!human) {
    response.status(400);
    response.json({ errors: ["Bot denied! 🤖"] });
    return;
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    secure: true,
    host: process.env.CONTACT_FORM_HOST,
    auth: {
      user: process.env.CONTACT_FORM_SEND_EMAIL,
      pass: process.env.CONTACT_FORM_PASS,
    },
    tls: { rejectUnauthorized: false },
  });
  transporter.use("compile", hbs(handlebarOptions));
  try {
    await transporter.sendMail({
      from: `${firstName} ${lastName} (${email})`,
      replyTo: email,
      to: process.env.CONTACT_FORM_RECEIVE_EMAIL,
      subject: `AK website: ${title}`,
      // @ts-ignore-next-line
      template: "contact",
      context: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        title: title,
        message: message,
      },
    });
    response
      .status(200)
      .json({ message: "Your message has been successfully sent." });
  } catch (error) {
    response.status(500).json({ message: "An error occurred" });
  }
}
