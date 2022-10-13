const toggleButton = document.querySelector('[data-button]');
const navMenu = document.querySelector('[data-menu]');

const handleClick = () => {
  navMenu.classList.toggle('active');
};
toggleButton.addEventListener('click', handleClick);

const gallery = document.querySelector('[data-gallery]');
const displayImage = document.querySelector('[data-display]');
const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

imageArray.forEach((i) => {
  const img = document.createElement('img');
  img.src = `/images/image-${i}.jpg`;
  img.alt = `Image nr. ${i}`;
  img.classList.add('gallery');
  gallery.appendChild(img);
});

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
displayImage.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('click', (e) => {
    lightbox.classList.add('active');
    const newImg = document.createElement('img');
    newImg.classList.add('newImg');
    newImg.src = image.src;

    if (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(newImg);
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});
