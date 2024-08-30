// src/app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { email } = await req.json();

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'numan.codes@gmail.com',
            subject: 'New Email Subscription',
            text: `Email: ${email}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
