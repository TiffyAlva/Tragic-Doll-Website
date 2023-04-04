const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('/send-email', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Email sent successfully!', data);
    // show a success message to the user
  })
  .catch(error => {
    console.error('Error sending email:', error);
    // show an error message to the user
  });
});




// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 5000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('contact');
//   });

// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'TiffanyAlvarez54@gmail.com',
//       pass: 'Tragicdoll9093'
//     }
//   });

  

//   const mailOptions = {
//     from: 'TiffanyAlvarez54@mail.com',
//     to: 'TiffanyAlvarez54@gmail.com',
//     subject: 'New message from your website',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Error sending email' });
//     } else {
//       console.log('Email sent successfully!', info);
//       res.json({ message: 'Email sent successfully!' });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });










