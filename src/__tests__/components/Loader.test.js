import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loader } from '../../components';

configure({ adapter: new Adapter() });

describe('Loader component', () => {
  it('should match snapshot and render correctly', () => {
    const component = shallow(<Loader />);

    expect(component).toMatchSnapshot('Primary snapshot');
  });

  it('should render with loaderText prop', () => {
    const component = shallow(<Loader loaderText="Page is loading..." />);
    expect(component).toMatchSnapshot('Secondary button snapshot');
  });
});
