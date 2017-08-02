import Css from './Css.helper';
import _ from 'lodash';

describe('Css.helper.js', () => {
  it('should exists', () => {
    expect(Css).toBeTruthy();
  });

  describe('getClassHash()', () => {
    it('should exists', () => {
      expect(Css.getClassHash).toBeTruthy();
    });

    it('should return a random string with `nicobar-` prefix', () => {
      expect(_.startsWith(Css.getClassHash(), 'nicobar-')).toBe(true);
    })
  });

  describe('hasNicobar(element)', () => {
    let element;

    beforeEach( () => {
      element = {
        className: 'test'
      };
    } );

    it('should exists', () => {
      expect(Css.hasNicobar).toBeTruthy();
    });

    it('should return nicobar index', () => {
      element.className = 'something nicobar-test';
      expect(Css.hasNicobar(element)).toBe('nicobar-test');
    });

    it('should return undefined when not exists', () => {
      element.className = 'something';
      expect(Css.hasNicobar(element)).toBe(undefined);
    });
  });

  describe('intelligentSelector(element)', () => {
    let element;

    beforeEach( () => {
      element = {
        className: 'test'
      };
    } );

    it('should exists', () => {
      expect(Css.intelligentSelector).toBeTruthy();
    });

    it('should return id', () => {
      element.id = 'id';
      expect(Css.intelligentSelector(element)).toBe('#id');
    });

    it('should return nicobar class', () => {
      element.className = 'nicobar-test';
      expect(Css.intelligentSelector(element)).toBe('.nicobar-test');
    });

    it('should return a random nicobar class', () => {
      let className = Css.intelligentSelector(element);
      expect(_.startsWith(className, '.nicobar-')).toBe(true);
    });
  });

  describe('fromObjToCss(object)', () => {

    it('should exists', () => {
      expect(Css.fromObjToCss).toBeTruthy();
    });

    it('should return the Css', () => {
      let obj = {
        property: 'value',
        property2: 'value2',
        property3: 'value3',
      },
      str = '--property: value;--property2: value2;--property3: value3;';
      expect(Css.fromObjToCss(obj)).toBe(str);
    });
  });
});
