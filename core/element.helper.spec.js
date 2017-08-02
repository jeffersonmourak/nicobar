import Element from './element.helper';
import _ from 'lodash';

describe('element.helper.js', () => {
  it('should exists', () => {
    expect(Element).toBeTruthy();
  });

  describe('createStyle()', () => {
    it('should exists', () => {
      expect(Element.createStyle).toBeTruthy();
    });
  });

  describe('setElementClass(element, className)', () => {
    it('should exists', () => {
      expect(Element.setElementClass).toBeTruthy();
    });

    it('should add the new class', () => {
      let element = {
        className: 'hello'
      };

      expect(Element.setElementClass(element, 'world').className).toBe('hello world');
    });
  });
});
