import * as ls from './colors'

describe('localstorage helpers', () => {

  it('should get and set colors to localstorage', () => {
    const colors = JSON.stringify({ 'BLACK': 0, 'BLUE': 0, 'RED': 0, 'GREEN': 0 });
    const setter = jest.spyOn(ls, 'setColors');
    ls.setColors(colors);
    expect(setter).toHaveBeenCalledWith(colors);
    expect(ls.getColors()).toBe(colors);
  });

  it('should increment color count', () => {
    const colors = { 'BLACK': 0, 'BLUE': 0, 'RED': 0, 'GREEN': 0 };
    ls.setColors(colors);
    ls.updateColor('BLACK');
    expect(ls.getColors()['BLACK']).toBe(1);
  });
});