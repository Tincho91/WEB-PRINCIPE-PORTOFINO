import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    const email = "ignaciorodriguesoficial@gmail.com";
    const pass = "ncodjrjsxqedejuu";

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass,
      },
    });

    const mailOptions = {
      from: 'estudio.lsaa@gmail.com',
      to,
      subject,
      text,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}