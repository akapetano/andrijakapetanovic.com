import nodemailer from "nodemailer";

const hostService = process.env.CONTACT_FORM_HOST;
const email = process.env.CONTACT_FORM_EMAIL_RECEIVER;
const pass = process.env.CONTACT_FORM_PASS;

export const transporter = nodemailer.createTransport({
  service: hostService,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
