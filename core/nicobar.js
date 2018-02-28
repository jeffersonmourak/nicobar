import _ from 'lodash';
import CSS from './CSS.helper';
import Component from './Component';
import React from 'react';
import { render } from 'react-dom';

class Nicobar {
  constructor() {
    this.elements = {
      header: document.head,
      styleElement: this.createStyleElement()
    };

    this.selectors = {};
  }

  createStyleElement() {
    let styleElement = document.createElement('style');

    document.head.appendChild(styleElement);

    return styleElement;
  }

  render() {
    let styleString = Object.keys(this.selectors)
      .reduce( (styleStr, selector) => {
        return styleStr += `${selector} { ${ CSS.fromObjToCss(this.selectors[selector]) } }`;
      }, '');

    this.elements.styleElement.innerText = styleString;
  }

  get Nicobar() {
    Component.defaultProps = {
      nicobarInstance: this
    };

    return Component;
  }

  set(target, data) {
    let selector;

    if (_.isElement(target)) {
      selector = CSS.intelligentSelector(target);
      target = [target];
    } else {
      selector = target;
      target = document.querySelectorAll(target);
    }

    this.selectors[selector] = data;
    this.render();
  }
}

let nicobar = new Nicobar();

if (window) {
  window.nicobar = nicobar;
} else {
  global.nicobar = nicobar;
}

export default nicobar;
module.exports = nicobar;