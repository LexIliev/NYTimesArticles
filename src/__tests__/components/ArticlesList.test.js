import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';

import { ArticlesList } from '../../components';

configure({ adapter: new Adapter() });

describe('ArticlesList component', () => {
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

  const mockedData = [
    {
      byline: 'By Unknown Author',
      title: 'Very interesting title',
      publishedDate: '2018-06-04',
      media: mockedMedia
    },
    {
      byline: 'By Another Unknown Author',
      title: 'Another very interesting title',
      publishedDate: '2018-06-05',
      media: mockedMedia
    },
    {
      byline: 'By Third Unknown Author',
      title: 'Third very interesting title',
      publishedDate: '2018-06-06',
      media: mockedMedia
    }
  ];

  let props = {};

  beforeEach(() => {
    props = {
      title: '',
      byline: '',
      published_date: '',
      media: mockedMedia,
      data: [],
      handleOnPress: jest.fn(),
      navigation: { navigate: jest.fn() }
    };
  });

  it('should match snapshot and render correctly', () => {
    props = {
      ...props,
      title: 'Article title',
      byline: 'By Author',
      published_date: '2019-05-17',
      data: mockedData,
      handleOnPress: props.handleOnPress
    };

    const component = shallow(<ArticlesList {...props} />);

    expect(component).toMatchSnapshot('Primary snapshot');
  });

  it('should render correctly with empty string values', () => {
    const component = shallow(<ArticlesList {...props} />);

    expect(component).toMatchSnapshot('Secondary snapshot');
  });

  it('should not call handleOnPress', () => {
    const component = create(
      <ArticlesList {...props} handleOnPress={props.handleOnPress} />
    );
    expect(props.handleOnPress).not.toHaveBeenCalled();
  });
});
