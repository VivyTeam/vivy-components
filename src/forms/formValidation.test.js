import sinon from 'sinon';
import { validateInput } from './formValidation';

describe('formValidation', () => {
  const inputStub = {
    parentNode: {
      querySelector: sinon.stub(),
    },
    validity: {
      valid: false,
    },
    classList: {
      add: sinon.stub(),
      remove: sinon.stub(),
    },
  };

  it('invalidates wrong user input', () => {
    const mockError = 'mock error message';

    inputStub.parentNode.querySelector.returns({ textContent: '' });
    validateInput(inputStub, mockError);

    sinon.assert.calledWith(inputStub.classList.add, 'invalid');
    expect(inputStub.parentNode.querySelector().textContent).toEqual(mockError);
  });

  it('validates correct user input', () => {
    const mockError = 'mock error message';
    inputStub.validity.valid = true;
    inputStub.parentNode.querySelector.returns({ textContent: mockError });
    validateInput(inputStub, mockError);

    sinon.assert.calledWith(inputStub.classList.add, 'invalid');
    expect(inputStub.parentNode.querySelector().textContent).toEqual('');
  });
});
