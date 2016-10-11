import React from 'react';
import { shallow } from 'enzyme';
import { mergeStyles } from '../../utils/testUtils';
import Text from '../Text';

describe('<Text />', () => {

  it('should render default components', () => {
    const wrapper = shallow(<Text />);
    expect(wrapper.find('Text').length).toEqual(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Text>{'test-children'}</Text>);
    expect(wrapper.find('Text').children().text()).toEqual('test-children');
  });

  it('should render props.children', () => {
    const wrapper = shallow(<Text children={'test-children'}/>);
    expect(wrapper.find('Text').children().text()).toEqual('test-children');
  });

  it('should render props.style', () => {
    const wrapper = shallow(<Text style={{ fontSize: 100 }} />);
    const styles = mergeStyles(wrapper.props().style);
    expect(styles.fontSize).toEqual(100);
  });

});
