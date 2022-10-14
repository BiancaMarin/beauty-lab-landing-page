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

const form = document.querySelector('[data-form]');
const userName = form.elements.name;
const userPhone = form.elements.phone;
const userEmail = form.elements.email;
const userMessage = form.elements.message;

const errorName = document.querySelector('[data-name]');
const errorEmail = document.querySelector('[data-email]');
const errorPhone = document.querySelector('[data-phone]');
const errorMessage = document.querySelector('[data-message]');
form.addEventListener('submit', handleValidate);

function handleValidate(e) {
  e.preventDefault();

  if (!userName.value.trim()) {
    errorName.innerText = 'Please enter your name.';
    errorName.classList.add('error');
  }

  const emailRegExp =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
  if (!userEmail.value.trim() || !emailRegExp.test(userEmail.value)) {
    errorEmail.innerText = 'Please enter a valid e-mail address.';
    errorEmail.classList.add('error');
  }

  const phoneRegExp = /^[0-9]{10}$/;
  if (!userPhone.value.trim() || !phoneRegExp.test(userPhone.value)) {
    errorPhone.innerText = 'Please enter a valid phone number.';
    errorPhone.classList.add('error');
  }

  if (!userMessage.value.trim()) {
    errorMessage.innerText = 'Please write your message for me.';
    errorMessage.classList.add('error');
  }
}

userName.addEventListener('keydown', handleKeyDownName);
userPhone.addEventListener('keydown', handleKeyDownPhone);
userEmail.addEventListener('keydown', handleKeyDownEmail);
userMessage.addEventListener('keydown', handleKeyDownMessage);

function handleKeyDownName() {
  errorName.innerText = '';
}
function handleKeyDownPhone() {
  errorPhone.innerText = '';
}
function handleKeyDownEmail() {
  errorEmail.innerText = '';
}
function handleKeyDownMessage() {
  errorMessage.innerText = '';
}
