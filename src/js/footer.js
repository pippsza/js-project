document.getElementById('user-email').addEventListener('input', function () {
  let emailInput = document.getElementById('user-email');
  let errorMessage = document.getElementById('footer-error');
  let successMessage = document.getElementById('footer-success');

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

document.querySelector('.close-modal').onclick = function () {
  document.getElementById('modal-footer').style.display = 'none';
};
