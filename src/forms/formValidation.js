// eslint-disable-next-line import/prefer-default-export
export function validateInput(input, errMessage) {
  const errorLabel = input.parentNode.querySelector('.error-feedback');

  if (input.validity.valid) {
    input.classList.remove('invalid');
    errorLabel.textContent = '';
  } else {
    input.classList.add('invalid');
    errorLabel.textContent = errMessage;
  }
}
