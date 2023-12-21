const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '#',
    pass: '#',
  },
});

app.post('/send-feedback', (req, res) => {
  const { name, contactNumber, feedback } = req.body;

  const mailOptions = {
    from: 'ijindal_be21@thapar.edu',
    to: 'agupta20_be21@thapar.edu', // Change this to the recipient's email address
    subject: 'Feedback from Laundry Management System',
    text: `
      Name: ${name}
      Contact Number: ${contactNumber}
      Feedback: ${feedback}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Feedback submitted successfully!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
