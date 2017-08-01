import _ from 'lodash';
import css from './css.helper';
import element from './element.helper';

class Nicobar {
  constructor() {
    this.elements = {
      header: document.querySelector('head')
    };

    this::element.createStyle();
    this.selectors = {};
  }

  render() {
    let styleString = Object.keys(this.selectors)
      .reduce( (styleStr, selector) => {
        return styleStr += `${selector} { ${ css.fromObjToCss(this.selectors[selector]) } }`;
      }, '');

    this.elements.styleElement.innerText = styleString;
  }

  set(target, data) {
    let selector;

    if (_.isElement(target)) {
      selector = css.intelligentSelector(target);
      target = [target];
    } else {
      selector = target;
      target = document.querySelectorAll(target);
    }

    this.selectors[selector] = data;
    this.render();
  }
}

window.nicobar = new Nicobar();
