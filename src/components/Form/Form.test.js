import React from 'react';
import Form from './Form';
import { mount } from 'enzyme';
import { setColors } from '../../helpers/colors'

describe('<Form />', () => {
  beforeEach(() => {
    const colors = { 'BLACK': 0, 'BLUE': 0, 'RED': 0, 'GREEN': 0 };
    setColors(colors);
  });
  it('Renders a form', () => {
    const component = mount(<Form />);
    expect(component.find('form')).toHaveLength(1);
  });
});
