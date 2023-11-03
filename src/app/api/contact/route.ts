import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../../lib/nodemailer";
import { ContactFormData } from "../../../components/features/contact/ContactForm/ContactForm";
import { htmlTemplateInjector } from "../../../utils/htmlTemplateInjector";

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

type CONTACT_MESSAGE_FIELDS = {
  firstName: "First Name";
  lastName: "Last Name";
  email: "Email";
  subject: "Subject";
  message: "Message";
};

const CONTACT_MESSAGE_FIELDS: CONTACT_MESSAGE_FIELDS = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
} as const;

const generateEmailContent = (data: ContactFormData) => {
  const stringData = Object.entries(data).reduce((string, [key, value]) => {
    return (string += `${
      CONTACT_MESSAGE_FIELDS[key as keyof CONTACT_MESSAGE_FIELDS]
    }: \n${value}} \n \n`);
  }, "");

  const htmlData = Object.entries(data).reduce((string, [key, value]) => {
    return (string += `<h1 class="form-heading" align="left">${
      CONTACT_MESSAGE_FIELDS[key as keyof CONTACT_MESSAGE_FIELDS]
    }</h1><p class="form-answer" align="left">${value}</p>`);
  }, "");

  return {
    text: stringData,
    html: htmlTemplateInjector(htmlData),
  };
};

export default async function contactFormHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data: ContactFormData = req.body;
    const { firstName, lastName, email, subject, message, token } = data;

    // const human = await validateHuman(token);

    if (!firstName || !lastName || !email || !subject || !message) {
      return res
        .status(400)
        .json({ message: "Bad request. Please fill out the form completely." });
    }

    // if (!human) {
    //   res.status(400);
    //   res.json({ message: "Bot denied! 🤖" });
    //   return;
    // }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: subject,
      });

      return res.status(200).json({
        success: true,
        message: {
          title: "Your message has been successfully sent.",
          description:
            "Thank you for contacting me. I will get back to you as soon as possible.",
        },
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return res.status(400).json({ message: error?.message });
      }
    }
  }

  return res.status(400).json({ message: "Bad request" });

  // const human = await validateHuman(token);

  // if (!human) {
  //   response.status(400);
  //   response.json({ errors: ["Bot denied! 🤖"] });
  //   return;
  // }

  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   secure: true,
  //   host: process.env.CONTACT_FORM_HOST,
  //   auth: {
  //     user: process.env.CONTACT_FORM_SEND_EMAIL,
  //     pass: process.env.CONTACT_FORM_PASS,
  //   },
  //   tls: { rejectUnauthorized: false },
  // });
  // transporter.use("compile", hbs(handlebarOptions));
  // try {
  //   await transporter.sendMail({
  //     from: `${firstName} ${lastName} (${email})`,
  //     replyTo: email,
  //     to: process.env.CONTACT_FORM_RECEIVE_EMAIL,
  //     subject: `AK website: ${title}`,
  //     // @ts-ignore-next-line
  //     template: "contact",
  //     context: {
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: email,
  //       title: title,
  //       message: message,
  //     },
  //   });
  //   response
  //     .status(200)
  //     .json({ message: "Your message has been successfully sent." });
  // } catch (error) {
  //   response.status(500).json({ message: "An error occurred" });
  // }
}
