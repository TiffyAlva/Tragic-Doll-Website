/**Gallery Slide */
// let currentImage = 1;
// const gallery = document.querySelector('.gallery');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const totalImages = gallery.querySelectorAll('img').length;

// function showImage(n) {
//   if (n > totalImages) {
//     currentImage = 1;
//   }
//   if (n < 1) {
//     currentImage = totalImages;
//   }
//   gallery.style.transform = `translateX(${-100 * (currentImage - 1)}%)`;
// }

// function prevImage() {
//   showImage(currentImage -= 1);
// }

// function nextImage() {
//   showImage(currentImage += 1);
// }

// showImage(currentImage);



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


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New message from your website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent successfully!', info);
      res.json({ message: 'Email sent successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


