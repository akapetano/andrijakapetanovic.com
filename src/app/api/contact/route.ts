import { NextRequest, NextResponse } from "next/server";
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

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { firstName, lastName, email, subject, message, token } = data;

  if (token) {
    const human = await validateHuman(token);

    if (!human) {
      NextResponse.json({ message: "Bot denied! 🤖" }, { status: 400 });
      return;
    }
  }

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json(
      {
        message: "Bad request. Please fill out the form completely.",
      },
      {
        status: 400,
      }
    );
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: subject,
    });

    return NextResponse.json(
      {
        success: true,
        message: {
          title: "Your message has been successfully sent.",
          description:
            "Thank you for contacting me. I will get back to you as soon as possible.",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error?.message }, { status: 400 });
    }
  }

  return NextResponse.json({ message: "Bad request" }, { status: 400 });
}
