import _ from 'lodash';
import Css from './css.helper';
import Element from './element.helper';

import ReactReplacer from './react-replacer';

class Nicobar {
  constructor() {
    this.elements = {
      header: document.querySelector('head')
    };

    this::Element.createStyle();
    this.selectors = {};
  }

  render() {
    let styleString = Object.keys(this.selectors)
      .reduce( (styleStr, selector) => {
        return styleStr += `${selector} { ${ Css.fromObjToCss(this.selectors[selector]) } }`;
      }, '');

    this.elements.styleElement.innerText = styleString;
  }

  init(instance, data = {}) {
    return new ReactReplacer(instance, data);
  }

  set(target, data) {
    let selector;

    if (_.isElement(target)) {
      selector = Css.intelligentSelector(target);
      target = [target];
    } else {
      selector = target;
      target = document.querySelectorAll(target);
    }

    this.selectors[selector] = data;
    this.render();
  }
}

let nic = new Nicobar();

if (window) {
  window.nicobar = nic;
} else {
  global.nicobar = nic;
}

export default nic;
module.exports = nic;
