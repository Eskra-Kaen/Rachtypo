// JavaScript
const titleBtn = document.getElementById('title-btn');
const pageBtn = document.getElementById('page-btn');
const metronomeBtn = document.getElementById('metronom-btn');
const composerBtn = document.getElementById('composer-btn');
const imageContainer = document.getElementById('image-container');

// Define your image data arrays here
const titleImages = ['images/title/Piano Con_1_1_1920y.png', 'images/title/Piano Con_1_1_1947y.png', 'images/title/Piano Con_1_1_1971y.png'];
const pageImages = ['page1.jpg', 'page2.jpg', 'page3.jpg'];
const metronomImages = ['metronom1.jpg', 'metronom2.jpg', 'metronom3.jpg'];
const composerImages = ['composer1.jpg', 'composer2.jpg', 'composer3.jpg'];

// Add click event listeners to the buttons
titleBtn.addEventListener('click', () => displayImages(titleImages));
pageBtn.addEventListener('click', () => displayImages(pageImages));
metronomeBtn.addEventListener('click', () => displayImages(metronomImages));
composerBtn.addEventListener('click', () => displayImages(composerImages));

// Function to display the images in the container
function displayImages(images) {
  imageContainer.innerHTML = '';
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.addEventListener('click', () => replaceBackground(img.src));
    imageContainer.appendChild(img);
  });
}

// Function to replace the background of the display area
function replaceBackground(imageSource) {
  imageContainer.style.backgroundImage = `url(${imageSource})`;
  imageContainer.style.backgroundSize = 'contain';
  imageContainer.style.backgroundRepeat = 'no-repeat';
  imageContainer.style.backgroundPosition = 'center';
}