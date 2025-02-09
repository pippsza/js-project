import iziToast from 'izitoast';

const emailInput = document.getElementById('user-email');
const commentInput = document.getElementById('user-comments');
const errorMessage = document.getElementById('footer-error');
const successMessage = document.getElementById('footer-success');
const overlay = document.querySelector('.overlay');
const modalWindow = document.getElementById('modal-footer');
const sendButton = document.querySelector('.footer-button');
const form = document.querySelector('.footer-form');

//Перевірка чи введено валідний email, виділення кольором і підпис
emailInput.addEventListener('input', function () {
  if (emailInput.checkValidity()) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    successMessage.classList.add('show');
    errorMessage.classList.remove('show');
  } else {
    emailInput.classList.remove('valid');
    emailInput.classList.add('invalid');
    successMessage.classList.remove('show');
    errorMessage.classList.add('show');
  }
  if (emailInput.value === '') {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    emailInput.classList.remove('valid', 'invalid');
  }
});

//Відправка форми
sendButton.addEventListener('click', function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  if (!email || !comment) {
    iziToast.info({
      title: 'Info',
      message: 'Please fill in all fields.',
      position: 'center',
      timeout: 5000,
    });
    return;
  }
  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, comment }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.title && data.message) {
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-message').textContent = data.message;
        modalWindow.classList.add('show');
        overlay.classList.add('show');

        //Скидання форми
        form.reset();
        emailInput.classList.remove('valid', 'invalid');
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Invalid e-mail. Check the data you entered.',
          position: 'center',
          timeout: 5000,
        });
      }
    })
    .catch(error => {
      //Обробка помилки під час запиту
      iziToast.error({
        title: 'Network Error',
        message:
          'Unable to connect to the server. Please check your internet connection.',
        position: 'center',
        timeout: 5000,
      });
    });
});
//Закриття модального вікна
document.addEventListener('DOMContentLoaded', function () {
  const closeButtonModal = document.querySelector('.close-modal');

  function closeWindow() {
    modalWindow.classList.remove('show');
    overlay.classList.remove('show');
  }
  closeButtonModal.addEventListener('click', closeWindow);
  modalWindow.addEventListener('click', function (event) {
    if (event.target === modalWindow) {
      closeWindow();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeWindow();
    }
  });
});
