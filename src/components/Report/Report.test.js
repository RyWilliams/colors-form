import React from 'react';
import Report from './Report';
import { mount } from 'enzyme';
import { setColors } from '../../helpers/colors'

describe('<Report />', () => {
  beforeEach(() => {
    const colors = { 'BLACK': 0, 'BLUE': 0, 'RED': 0, 'GREEN': 0 };
    setColors(colors);
  });
  it('Renders a report', () => {
    const component = mount(<Report />);
    expect(component.find('.report')).toHaveLength(1);
  });
  it('Displays colors and totals', () => {
    const component = mount(<Report />);
    expect(component.find('.color')).toHaveLength(4);
    expect(component.find('.count')).toHaveLength(4); 
  });
});
