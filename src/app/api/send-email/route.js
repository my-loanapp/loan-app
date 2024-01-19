import { NextResponse } from "next/server";

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

// Replace with your SendGrid API key
const sendgridAuth = {
  auth: {
    api_key: 'YOUR_SENDGRID_API_KEY',
  },
};

// Create a Nodemailer transport using SendGrid
const transporter = nodemailer.createTransport(sendgridTransport(sendgridAuth));

// Email details
const mailOptions = {
  from: 'your_email@example.com', // Replace with your email
  to: 'recipient@example.com', // Replace with the recipient's email
  subject: 'Test Email from Nodemailer and SendGrid',
  text: 'Hello, this is a test email from Nodemailer and SendGrid!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info);
  }
});


// const Mailjet = require("node-mailjet");

// const mailjet = new Mailjet({
//   apiKey: "9eb86d3ae5a36a735a17c9923546d7c3",
//   apiSecret: "918c4668d4350023c7b5f1900201f786",
// });

// const request = mailjet.post("send", { version: "v3.1" }).request({
//   Messages: [
//     {
//       From: {
//         Email: "pilot@mailjet.com",
//         Name: "Mailjet Pilot",
//       },
//       To: [
//         {
//           Email: "muhammad_ajmin@proton.me",
//           Name: "Muhammad",
//         },
//       ],
//       Subject: "You have received a code",
//       TextPart: "Hello, Your code is - code",
//     },
//   ],
// });

// request
//   .then((result) => {
//     console.log(result.body);
//   })
//   .catch((err) => {
//     console.log(err.statusCode);
//   });

// import formData from "form-data";
// import Mailgun from "mailgun.js";

// const mailgun = new Mailgun(formData);
// const client = mailgun.client({
//   username: "api",
//   key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY,
// });

// export async function POST(request) {
//   const { code } = await request.json();

//   const messageData = {
//     from: "umair.israr92@gmail.com",
//     to: "muhammad_ajmin@proton.me",
//     subject: "You have received a code",
//     text: `Hello, your code is - ${code}`,
//   };

//   client.messages
//     .create(process.env.NEXT_PUBLIC_MAILGUN_DOMAIN, messageData)
//     .then((res) => {
//       console.log(res);
//       return NextResponse.json({ success: true }, { status: 200 });
//     })
//     .catch((err) => {
//       console.error(err);
//       return NextResponse.json({ success: false }, { status: 200 });
//     });
// }
