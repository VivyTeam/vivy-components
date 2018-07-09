import React from 'react';
import sinon from 'sinon';
import { TestScheduler } from 'rxjs';
import { shallow } from 'enzyme';
import { DOMEventStub, DOMElementStub } from '../mocks/domMocks';
import Form, { __RewireAPI__ as TestApi } from './Form';
import FormItem from './FormItem';

function assertDeepEqual(actual, expected) {
  expect(actual).toEqual(expected);
}

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

  it('Filter elements removes all buttons', () => {
    const input = Object.assign({}, DOMElementStub);
    const button = Object.assign({}, DOMElementStub);
    button.nodeName = 'BUTTON';

    const testScheduler = new TestScheduler(assertDeepEqual);

    const marble = '-x-y';
    const expectedValues = { x: button, y: input };
    const hotTest = testScheduler.createHotObservable(marble, {
      x: button,
      y: input,
    });

    // eslint-disable-next-line no-underscore-dangle
    const filterElements = TestApi.__get__('filterElements');
    const actual = filterElements(hotTest);

    testScheduler.expectObservable(actual).toBe('---y', expectedValues);
    testScheduler.flush();
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
