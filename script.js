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










