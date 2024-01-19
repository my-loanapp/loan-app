import { NextResponse } from "next/server";

const API_KEY = "ceee7a451ff28786407508b2b1695cf7-4c955d28-720ef6c1";
const DOMAIN = "sandbox8c836a293aec40e986a0713876dcc175.mailgun.org";

import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: API_KEY });

export async function POST(request) {
  const { code } = await request.json();

  const messageData = {
    from: "umair.israr92@gmail.com",
    to: "muhammad_ajmin@proton.me",
    subject: "You have received a code",
    text: `Hello, your code is - ${code}`,
  };

  client.messages
    .create(DOMAIN, messageData)
    .then((res) => {
      console.log(res);
      return NextResponse.json({ success: true }, { status: 200 });
    })
    .catch((err) => {
      console.error(err);
      return NextResponse.json({ success: false }, { status: 200 });
    });
}
