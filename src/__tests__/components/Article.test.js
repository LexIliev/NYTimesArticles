import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Article } from '../../components';

configure({ adapter: new Adapter() });

describe('Article component', () => {
  const mockedMedia = [
    {
      'media-metadata': [
        {
          url: 'https://media.test.com/images/image.jpg'
        }
      ]
    }
  ];

  let props = {};

  beforeEach(() => {
    props = {
      title: '',
      byline: '',
      publishedDate: '',
      media: mockedMedia,
      handleOnPress: e => e
    };
    jest.clearAllMocks();
  });

  it('should match snapshot and render correctly', () => {
    props = {
      ...props,
      title: 'Article title',
      byline: 'By Author',
      publishedDate: '2019-05-17'
    };

    const component = shallow(<Article {...props} />);

    expect(component).toMatchSnapshot('Primary snapshot');
  });

  it('should render correctly with empty string prop values', () => {
    const component = shallow(<Article {...props} />);

    expect(component).toMatchSnapshot('Secondary snapshot');
  });
});
