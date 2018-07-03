import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { DOMEventStub, DOMElementStub } from '../mocks/domMocks';
import Form from './Form';
import FormItem from './FormItem';

describe('Form component', () => {
  it('renders form with items and elements', () => {
    const wrapper = shallow(
      <Form>
        <FormItem>
          <p>Mock Text</p>
        </FormItem>
      </Form>
    );
    expect(wrapper.find(FormItem).length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('validates form input with custom messages', () => {
    const domStub = DOMEventStub;
    const input = Object.assign({}, DOMElementStub, {
      dataset: {
        validationmessage: 'Mock input required',
      },
    });
    const button = Object.assign({}, DOMElementStub);

    button.nodeName = 'BUTTON';

    input.parentNode.querySelector.returns({
      textContent: '',
    });
    domStub.target.elements = [input, button];

    const wrapper = shallow(
      <Form>
        <FormItem>
          <p>Example Form</p>
        </FormItem>
      </Form>
    );

    wrapper.props().onAuthenticate(domStub);

    sinon.assert.calledWith(input.classList.add, 'invalid');
    expect(input.parentNode.querySelector().textContent).toEqual(
      'Mock input required'
    );
  });
});
