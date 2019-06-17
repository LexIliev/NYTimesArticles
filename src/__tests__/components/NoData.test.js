import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NoData } from '../../components';

configure({ adapter: new Adapter() });

describe('NoData component', () => {
  it('should match snapshot and render correctly', () => {
    const component = shallow(<NoData />);

    expect(component).toMatchSnapshot();
  });
});
