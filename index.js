const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // for gmail // smtp.office365.com for outlook
    port: 587, // or other port
    secure: false, // true for 465, and false for others
    auth: {
        user: 'mail@email.com',
        pass: 'password'
    }
});

transporter.sendMail({
    from: 'Via nodemailer <email@email.com>',
    to: 'email1, email2, email3',
    subject: 'Email Test',
    html: '<h1>Email Test Page</h1>',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
})
.then((response) => console.log('Email sent successfully!'))
.catch((error) => console.log('Error sending email: ', error));
