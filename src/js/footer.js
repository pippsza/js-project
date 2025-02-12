import iziToast from 'izitoast';

const emailInput = document.getElementById('user-email');
const commentInput = document.getElementById('user-comments');
const errorMessage = document.getElementById('footer-error');
const successMessage = document.getElementById('footer-success');
const overlayFooter = document.querySelector('.overlay');
const modalFooterWindow = document.getElementById('modal-footer');
const sendButton = document.querySelector('.footer-button');
const form = document.querySelector('.footer-form');
const closeButtonModal = document.querySelector('.close-modal');

emailInput.addEventListener('input', function () {
  const isValid = emailInput.checkValidity();

  emailInput.classList.toggle('valid', isValid);
  emailInput.classList.toggle('invalid', !isValid);
  successMessage.classList.toggle('show', isValid);
  errorMessage.classList.toggle('show', !isValid);

  if (!emailInput.value) {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    emailInput.classList.remove('valid', 'invalid');
  }
});

sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  if (!email || !comment) {
    return iziToast.info({
      title: 'Info',
      message: 'Please fill in all fields.',
      position: 'center',
      timeout: 5000,
    });
  }

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, comment }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.title && data.message) {
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-message').textContent = data.message;

        openModal();
        form.reset();
        resetValidation();
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Invalid e-mail. Check the data you entered.',
          position: 'center',
          timeout: 5000,
        });
      }
    })
    .catch(() => {
      iziToast.error({
        title: 'Network Error',
        message:
          'Unable to connect to the server. Please check your internet connection.',
        position: 'center',
        timeout: 5000,
      });
    });
});

function openModal() {
  modalFooterWindow.classList.add('show');
  overlayFooter.classList.add('show');
  document.body.classList.add('no-scroll');
  document.addEventListener('keydown', handleKeydown);
}

function closeModal() {
  modalFooterWindow.classList.remove('show');
  overlayFooter.classList.remove('show');
  document.body.classList.remove('no-scroll');
  document.removeEventListener('keydown', handleKeydown);
}

function resetValidation() {
  emailInput.classList.remove('valid', 'invalid');
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';
}

closeButtonModal.addEventListener('click', closeModal);
overlayFooter.addEventListener('click', event => {
  if (event.target === overlayFooter) closeModal();
});
function handleKeydown(event) {
  if (event.key === 'Escape') closeModal();
}
