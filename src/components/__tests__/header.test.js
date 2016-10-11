import React from 'react';
import { shallow } from 'enzyme';
import { mergeStyles } from '../../utils/testUtils';
import Header from '../Header';

describe('<Header />', () => {

  it('should render default components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Text').length).toEqual(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Header>{'test-children'}</Header>);
    expect(wrapper.find('Text').children().text()).toEqual('test-children');
  });

  it('should render props.children', () => {
    const wrapper = shallow(<Header children={'test-children'}/>);
    expect(wrapper.find('Text').children().text()).toEqual('test-children');
  });

  it('should render props.style', () => {
    const wrapper = shallow(<Header style={{ fontSize: 100 }} />);
    const styles = mergeStyles(wrapper.props().style);
    expect(styles.fontSize).toEqual(100);
  });

});
