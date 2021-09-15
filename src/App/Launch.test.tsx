import { shallow } from 'enzyme';
import React from 'react';

import Launch from './Launch';

test('renders matching snapshot', () => {
  const launch = {
    details: 'details',
    launch_date_unix: 1631655161,
    mission_name: 'mission name',
    rocket: {
      rocket_name: 'rocket name',
      rocket_type: 'rocket type'
    }
  };

  const component = shallow(<Launch {...launch} />);
  expect(component).toMatchSnapshot();
});

test('renders matching snapshot after expanding rocket details', () => {
  const launch = {
    details: 'details',
    launch_date_unix: 1631655161,
    mission_name: 'mission name',
    rocket: {
      rocket_name: 'rocket name',
      rocket_type: 'rocket type'
    }
  };

  const component = shallow(<Launch {...launch} />);
  component.find('button').simulate('click');
  expect(component).toMatchSnapshot();
});
