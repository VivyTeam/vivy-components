/* eslint-disable no-underscore-dangle */
import sinon from 'sinon';
import { TestScheduler } from 'rxjs';
import authenticateFormData, {
  __RewireAPI__ as TestApi,
} from './formValidation';
import { DOMElementStub } from '../mocks/domMocks';

function assertDeepEqual(actual, expected) {
  expect(actual).toEqual(expected);
}

describe('formValidation', () => {
  it('invalidates wrong user input', () => {
    const input = Object.assign({}, DOMElementStub);
    const mockError = 'mock error message';

    input.parentNode.querySelector.returns({ textContent: '' });

    const validateInput = TestApi.__get__('validateInput');
    validateInput(input, mockError);

    sinon.assert.calledWith(input.classList.add, 'invalid');
    expect(input.parentNode.querySelector().textContent).toEqual(mockError);
  });

  it('validates correct user input', () => {
    const input = Object.assign({}, DOMElementStub);
    const mockError = 'mock error message';
    input.validity.valid = true;
    input.parentNode.querySelector.returns({ textContent: mockError });

    const validateInput = TestApi.__get__('validateInput');
    validateInput(input, mockError);

    sinon.assert.calledWith(input.classList.add, 'invalid');

    sinon.assert.calledWith(input.classList.remove, 'invalid');
    expect(input.parentNode.querySelector().textContent).toEqual('');
  });

  it('Filters out all buttons', () => {
    const input = Object.assign({}, DOMElementStub);
    const button = Object.assign({}, DOMElementStub);

    input.parentNode.querySelector.returns({ textContent: '' });
    button.nodeName = 'BUTTON';

    const testScheduler = new TestScheduler(assertDeepEqual);

    const marble = '-x-y';
    const expectedValues = { x: button, y: input };
    const hotTest = testScheduler.createHotObservable(marble, {
      x: button,
      y: input,
    });
    const actual = authenticateFormData(hotTest);

    testScheduler.expectObservable(actual).toBe('---y', expectedValues);
    testScheduler.flush();
  });
});
