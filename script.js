/**Gallery Slide */
let currentImage = 1;
const gallery = document.querySelector('.gallery');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const totalImages = gallery.querySelectorAll('img').length;

function showImage(n) {
  if (n > totalImages) {
    currentImage = 1;
  }
  if (n < 1) {
    currentImage = totalImages;
  }
  gallery.style.transform = `translateX(${-100 * (currentImage - 1)}%)`;
}

function prevImage() {
  showImage(currentImage -= 1);
}

function nextImage() {
  showImage(currentImage += 1);
}

showImage(currentImage);

