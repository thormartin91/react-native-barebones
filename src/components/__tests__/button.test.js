import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { mergeStyles } from '../../utils/testUtils';
import Button from '../Button';


describe('<Button />', () => {

  it('should render default components', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('TouchableOpacity').length).toEqual(1);
    expect(wrapper.find('Text').length).toEqual(1);
  });

  it('should render with children', () => {
    const wrapper = shallow(<Button><Text>{'test-children'}</Text></Button>);
    expect(wrapper.find('Text').children().text()).toEqual('test-children');
  });

  it('should render props.caption', () => {
    const wrapper = shallow(<Button caption={'test-caption'}/>);
    expect(wrapper.find('Text').children().text()).toEqual('test-caption');
  });

  it('should render props.style', () => {
    const wrapper = shallow(<Button style={{ height: 100 }}/>);
    const styles = mergeStyles(wrapper.props().style);
    expect(styles.height).toEqual(100);
  });

  it('should react to the onPress event', () => {
    const mockFunction = jest.fn(() => 'Mock function')
    const wrapper = shallow(<Button onPress={mockFunction} />);
    expect(wrapper.props().onPress()).toEqual('Mock function');
    expect(mockFunction).toBeCalled()
  });

});
