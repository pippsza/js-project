import iziToast from 'izitoast';

let emailInput = document.getElementById('user-email');
let errorMessage = document.getElementById('footer-error');
let successMessage = document.getElementById('footer-success');

//Перевірка чи введено валідний email, виділення кольором і підпис
emailInput.addEventListener('input', function () {
  if (emailInput.checkValidity()) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    emailInput.classList.remove('valid');
    emailInput.classList.add('invalid');
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
  }
  if (emailInput.value === '') {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    emailInput.classList.remove('valid', 'invalid');
  }
});
//Закриття модального вікна
document.addEventListener('DOMContentLoaded', function () {
  const modalWindow = document.getElementById('modal-footer');
  const closeButtonModal = document.querySelector('.close-modal');

  function closeWindow() {
    modalWindow.style.display = 'none';
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
//Відправка форми
document
  .querySelector('.footer-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const email = emailInput.value;
    const comment = document.getElementById('user-comments').value;

    if (!email || !comment) {
      iziToast.info({
        title: 'Info',
        message: 'Check the data you entered.',
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
      .then(response => {
        console.log('Response:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Server response:', data);
        if (data.title && data.message) {
          console.log('Showing modal window');
          document.getElementById('modal-title').textContent = data.title;
          document.getElementById('modal-message').textContent = data.message;
          document.getElementById('modal-footer').classList.add('show');
          //Сброс формы
          document.querySelector('.footer-form').reset();
          emailInput.classList.remove('valid', 'invalid');
          successMessage.style.display = 'none';
          errorMessage.style.display = 'none';
        } else {
          iziToast.error({
            title: 'Server Error',
            message:
              'There was an error processing your request. Please try again.',
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
        console.error('Fetch error:', error);
      });
  });
