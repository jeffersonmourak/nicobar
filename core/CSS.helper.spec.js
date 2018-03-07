// import CSS from './CSS.helper';
import _ from 'lodash';

describe('CSS.helper.js', () => {
  it('should exists', () => {
    expect(true).toBeTruthy();
  });
  // it('should exists', () => {
  //   expect(CSS).toBeTruthy();
  // });

  // describe('getClassHash()', () => {
  //   it('should exists', () => {
  //     expect(CSS.getClassHash).toBeTruthy();
  //   });

  //   it('should return a random string with `nicobar-` prefix', () => {
  //     expect(_.startsWith(CSS.getClassHash(), 'nicobar-')).toBe(true);
  //   })
  // });

  // describe('hasNicobar(element)', () => {
  //   let element;

  //   beforeEach( () => {
  //     element = {
  //       className: 'test'
  //     };
  //   } );

  //   it('should exists', () => {
  //     expect(CSS.hasNicobar).toBeTruthy();
  //   });

  //   it('should return nicobar index', () => {
  //     element.className = 'something nicobar-test';
  //     expect(CSS.hasNicobar(element)).toBe('nicobar-test');
  //   });

  //   it('should return undefined when not exists', () => {
  //     element.className = 'something';
  //     expect(CSS.hasNicobar(element)).toBe(undefined);
  //   });
  // });

  // describe('intelligentSelector(element)', () => {
  //   let element;

  //   beforeEach( () => {
  //     element = {
  //       className: 'test'
  //     };
  //   } );

  //   it('should exists', () => {
  //     expect(CSS.intelligentSelector).toBeTruthy();
  //   });

  //   it('should return id', () => {
  //     element.id = 'id';
  //     expect(CSS.intelligentSelector(element)).toBe('#id');
  //   });

  //   it('should return nicobar class', () => {
  //     element.className = 'nicobar-test';
  //     expect(CSS.intelligentSelector(element)).toBe('.nicobar-test');
  //   });

  //   it('should return a random nicobar class', () => {
  //     let className = CSS.intelligentSelector(element);
  //     expect(_.startsWith(className, '.nicobar-')).toBe(true);
  //   });
  // });

  // describe('fromObjToCSS(object)', () => {

  //   it('should exists', () => {
  //     expect(CSS.fromObjToCss).toBeTruthy();
  //   });

  //   it('should return the CSS', () => {
  //     let obj = {
  //       property: 'value',
  //       property2: 'value2',
  //       property3: 'value3',
  //     },
  //     str = '--property: value;--property2: value2;--property3: value3;';
  //     expect(CSS.fromObjToCss(obj)).toBe(str);
  //   });
  // });
});
