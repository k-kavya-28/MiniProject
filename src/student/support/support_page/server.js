// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = 3000; // You can choose any available port

// // Middleware to parse JSON and handle CORS (Cross-Origin Resource Sharing)
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve your HTML page
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // POST endpoint to handle form submission
// app.post('/submit-feedback', (req, res) => {
//   const { name, contactNumber, feedback } = req.body;

//   // Configure nodemailer to use your email service
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'anyguest109@gmail.com',
//       pass: 'ulpp bajs ezwt qhbe',
//     },
//   });

//   // Define the email options
//   const mailOptions = {
//     from: 'anyguest109@gmail.com',
//     to: 'ijindal_be21@thapar.edu', // Replace with the admin's email
//     subject: 'Laundry System Feedback',
//     text: `Name: ${name}\nContact Number: ${contactNumber}\nFeedback: ${feedback}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       return res.status(500).send(error.toString());
//     }
//     console.log('Email sent:', info.response);
//     res.status(200).send('Feedback submitted successfully!');
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000; // You can choose any available port

// Middleware to parse JSON and handle CORS (Cross-Origin Resource Sharing)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve your HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// POST endpoint to handle form submission
app.post('/submit-feedback', (req, res) => {
  const { name, contactNumber, feedback } = req.body;

  // Configure nodemailer to use your email service
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'anyguest109@gmail.com',
      pass: 'jjrd twtr wzlo uvzb',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'anyguest109@gmail.com',
    to: 'ijindal_be21@thapar.edu', // Replace with the admin's email
    subject: 'Laundry System Feedback',
    text: `Name: ${name}\nContact Number: ${contactNumber}\nFeedback: ${feedback}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }

    // Send a success response to the client
    res.status(200).send('Feedback submitted successfully!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
