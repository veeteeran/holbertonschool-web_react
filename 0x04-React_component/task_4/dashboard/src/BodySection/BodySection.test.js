import React from 'react';
import { shallow, mount, unmount } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('renders an <h2> element and children', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>);

    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toBe('test title');
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toBe('test children node');
  });
})
