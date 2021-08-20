// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailder = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, address, message } = req.body;

    // using nodemailer function
    const result = await sendingMail(name, address, message);

    // send response and status to client
    res.status(200).json({ message: result });
  } else {
    res
      .status(401)
      .json({ message: "opps, some error happened try it again ..." });
  }
}

// let me define some important data to send email
let transporter = nodemailder.createTransport({
  service: "gmail",
  auth: {
    user: "harukikuriwada@gmail.com",
    pass: process.env.MAIL_PASS,
  },
});

async function sendingMail(name, address, message) {
  let info = await transporter.sendMail({
    from: address,
    to: "harukikuriwada@gmail.com",
    subject: "bussiness from " + name,
    text: message,
  });

  return "Yes!! successfully sent message to kuri-sun !!!";
}
