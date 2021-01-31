import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App';	

configure({adapter: new Adapter()});


test('renders the component', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});