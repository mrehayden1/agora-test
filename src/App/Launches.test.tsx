import { shallow } from 'enzyme';
import React from 'react';

import Launches, { LaunchData } from './Launches';

const launches: LaunchData[] = [{
  details: 'details one',
  launch_date_unix: 1631655161,
  mission_name: 'mission one',
  rocket: {
    rocket_name: 'rocket one',
    rocket_type: 'rocket type one'
  }
}, {
  details: 'details two',
  launch_date_unix: 1631655160,
  mission_name: 'mission two',
  rocket: {
    rocket_name: 'rocket two',
    rocket_type: 'rocket type two'
  }
}];

test('renders launches in correct order', () => {
  const component = shallow(<Launches launches={launches} sort={'newest'} search={''} />);
  expect(component).toMatchSnapshot();
});

test('renders launches in correct order (oldest)', () => {
  const component = shallow(<Launches launches={launches} sort={'oldest'} search={''} />);
  expect(component).toMatchSnapshot();
});

test('renders launches in correct order (name)', () => {
  const component = shallow(<Launches launches={launches} sort={'name'} search={''} />);
  expect(component).toMatchSnapshot();
});

test('renders launches in correct order (name desc)', () => {
  const component = shallow(<Launches launches={launches} sort={'name-desc'} search={''} />);
  expect(component).toMatchSnapshot();
});

test('renders launches when search present', () => {
  const component = shallow(<Launches launches={launches} sort={'newest'} search={'one'} />);
  expect(component).toMatchSnapshot();
});
