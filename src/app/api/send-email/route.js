import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { code } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_GMAIL,
      to: "mr.prodhan912@gmail.com",
      subject: "Demo Email",
      text: `Your code is ${code}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
