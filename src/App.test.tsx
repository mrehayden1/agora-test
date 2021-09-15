import { shallow } from 'enzyme';
import React from 'react';

import App from './App';

jest.mock('./api');

test('display \'loading\' while loading launches', () => {
  expect(shallow(<App />)).toIncludeText('Loading launches...');
});
