import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { DOMEventStub, DOMElementStub } from '../mocks/domMocks';
import Form from './Form';
import FormItem from './FormItem';

describe('Form component', () => {
  let domStub = {};
  let wrapper = null;

  beforeEach(() => {
    domStub = DOMEventStub;
    wrapper = shallow(
      <Form>
        <FormItem>
          <p>Example Form</p>
        </FormItem>
      </Form>
    );
  });

  it('renders form with items and elements', () => {
    expect(wrapper.find(FormItem).length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('Removes form errors when validation is verified', () => {
    const input = Object.assign({}, DOMElementStub, {
      dataset: {
        validationmessage: 'Mock input required',
      },
      validity: {
        valid: true,
      },
    });

    input.parentNode.querySelector.returns({
      textContent: '',
    });

    domStub.target.elements = [input];

    wrapper.props().onAuthenticate(domStub);

    sinon.assert.calledWith(input.classList.remove, 'invalid');
    expect(input.parentNode.querySelector().textContent).toEqual('');
  });

  it('Displays form errors when validation fails', () => {
    const input = Object.assign({}, DOMElementStub, {
      dataset: {
        validationmessage: 'Mock input required',
      },
      validity: {
        valid: false,
      },
    });

    input.parentNode.querySelector.returns({
      textContent: '',
    });
    domStub.target.elements = [input];

    wrapper.props().onAuthenticate(domStub);

    sinon.assert.calledWith(input.classList.add, 'invalid');
    expect(input.parentNode.querySelector().textContent).toEqual(
      'Mock input required'
    );
  });
});
