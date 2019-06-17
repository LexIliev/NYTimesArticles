import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ArticleDetails } from '../../components';

configure({ adapter: new Adapter() });

describe('ArticleDetails component', () => {
  const mockedMedia = [
    {
      'media-metadata': [
        {
          url: 'https://media.test.com/images/first-image.jpg'
        },
        {
          url: 'https://media.test.com/images/second-image.jpg'
        },
        {
          url: 'https://media.test.com/images/third-image.jpg'
        }
      ]
    }
  ];

  let props = {};

  beforeEach(() => {
    props = {
      title: '',
      abstract: '',
      byline: '',
      published_date: '',
      media: mockedMedia
    };
  });

  it('should match snapshot and render correctly', () => {
    props = {
      ...props,
      title: 'Article title',
      byline: 'By Author',
      abstract: 'Article abstract',
      published_date: '2019-05-17'
    };

    const component = shallow(<ArticleDetails {...props} />);

    expect(component).toMatchSnapshot('Primary snapshot');
  });

  it('should render correctly with empty string values', () => {
    const component = shallow(<ArticleDetails {...props} />);

    expect(component).toMatchSnapshot('Secondary snapshot');
  });
});
