// eslint-disable-next-line import/no-extraneous-dependencies
import sinon from 'sinon';

export const DOMEventStub = {
  preventDefault: sinon.stub(),
  target: {
    elements: [],
  },
};

export const DOMElementStub = {
  nodeName: 'INPUT',
  parentNode: {
    querySelector: sinon.stub(),
  },
  validationMessage: '',
  dataset: {
    validationmessage: '',
  },
  validity: {
    valid: false,
  },
  classList: {
    add: sinon.stub(),
    remove: sinon.stub(),
  },
};
