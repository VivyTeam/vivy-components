import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

function validateInput(input, errMessage) {
  const errorLabel = input.parentNode.querySelector('.error-feedback');

  if (input.validity.valid) {
    input.classList.remove('invalid');
    errorLabel.textContent = '';
  } else {
    input.classList.add('invalid');
    errorLabel.textContent = errMessage;
  }
}

const authenticateFormData = data =>
  Observable.from(data)
    .filter(fields => fields.nodeName.toLowerCase() !== 'button')
    .map(input => {
      const { dataset, validationMessage } = input;
      const message = dataset.validationmessage || validationMessage;

      validateInput(input, message);

      return input;
    });

export default authenticateFormData;
