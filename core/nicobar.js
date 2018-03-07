import _ from 'lodash';
import CSS from './CSS.helper';
import Component from './Component';
import ContextComponent from './ContextComponent';
import domElements from './utils/domElements';
import React from 'react';
import { render } from 'react-dom';

class Nicobar {
  constructor() {
    this.elements = {
      header: document.head,
      styleElement: this.createStyleElement()
    };

    this.selectors = {};

    Object.assign(this.component, this.preBuildDomElements());
  }

  preBuildDomElements() {
    return domElements.reduce((obj, el) => {
      obj[el] = (className, style) => {
        return this.component(className, style, el)
      };

      return obj;
    }, {})
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

  component (className, style, element='div') {
    const Nicobar = this.Nicobar,
          NicobarComponent = (props) => {
            return <ContextComponent
            Nicobar={Nicobar}
            className={className}
            style={{ ...style }}
            element={element}
            properties={props}
          />
          };

    return NicobarComponent;
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

    target.forEach( element => {
      let classNames = element.className.split(' '),
          elClassName = selector.replace('.', '');

      if (!classNames.includes(elClassName)) {
        element.className = `${elClassName} ${element.className}`
      }
    } );

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