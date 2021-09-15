import { shallow } from 'enzyme';
import React from 'react';

import Filter from './Filters';

test('renders matching snapshot', () => {
  const component = shallow(<Filter />);
  expect(component).toMatchSnapshot();
});

test('invokes onSortChange correctly when sort is changed', () => {
  const spy = jest.fn();
  const component = shallow(<Filter onSortChange={spy} />);
  component
    .find('#sort-input').simulate('change', { target: { value: 'hello' }});
  expect(spy).toBeCalledWith('hello');
});

test('invokes onSearchChange correctly when sort is changed', () => {
  const spy = jest.fn();
  const component = shallow(<Filter onSearch={spy} />);
  component
    .find('#search-input').simulate('input', { target: { value: 'search change' }});
  expect(spy).toBeCalledWith('search change');
});
