import React from 'react';
import { mount } from 'enzyme';
import { NavigationButton } from 'styles/components/Buttons';
import App from 'App';

it('renders navigation buttons when app starts', () => {
  console.log(`Navigation test starting`);
  const wrapper = mount(<App />);
  const navigationButtons = wrapper.find(NavigationButton);
  expect(wrapper.containsMatchingElement(<NavigationButton route={'/'} label={'Home'} />)).toBeTruthy();
  expect(wrapper.containsMatchingElement(<NavigationButton route={'/heroes'} label={'Heroes'} />)).toBeTruthy();
  expect(navigationButtons).toHaveLength(2);
  console.log(`Navigation test completed`);
});
