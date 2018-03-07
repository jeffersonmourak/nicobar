import _ from 'lodash';
import CSS from './CSS.helper';
import Component from './Component';
import ContextComponent from './ContextComponent';
import domElements from './utils/domElements';
import React from 'react';
import { render } from 'react-dom';

/** Nicobar */
class Nicobar {

  /** 
   * Constructor
   * @constructor
   * @description
   * Initiate the library
  */
  constructor() {
    this.elements = {
      header: document.head,
      styleElement: this.createStyleElement()
    };

    this.selectors = {};

    Object.assign(this.component, this.preBuildDomElements());
  }

  /** 
   * Pre Build DOM elements
   * @description Creates the wrapping functions for each type of dom elements on React.
   * 
   * @method Nicobar#preBuildDomElements()
   * @private
   * 
   * @returns {Object} returns an object full of dom elements wrapping function for them
  */
  preBuildDomElements() {
    return domElements.reduce((obj, el) => {
      obj[el] = (className, style) => {
        return this.component(className, style, el)
      };

      return obj;
    }, {})
  }

  /** 
   * Create Style Element
   * @description Initiate the nicobar style element on top of file.
   * 
   * @method Nicobar#createStyleElement()
   * @private
   * 
   * @returns {HTMLElement}
  */
  createStyleElement() {
    let styleElement = document.createElement('style');

    document.head.appendChild(styleElement);

    return styleElement;
  }

  /** 
   * Render
   * @description Render Nicobar's custom class into Style element
   * 
   * @method Nicobar#render()
   * @private
  */
  render() {
    let styleString = Object.keys(this.selectors)
      .reduce( (styleStr, selector) => {
        return styleStr += `${selector} { ${ CSS.fromObjToCss(this.selectors[selector]) } }`;
      }, '');

    this.elements.styleElement.innerText = styleString;
  }

  /**
   * Nicobar 
   * @method Nicobar#Nicobar
   * @description Returns the React Wrap component to be used on your component
   * @example
   * //usage
   * ```javascript
   * import { Nicobar } from 'nicobar'
   * 
   * class MyComponent extends React.Component {
   *  render() {
   *    return <Nicobar style={obj}>
   *      ...
   *    </Nicobar>
   *  }
   * }
   * ```
   * @returns {React.Component} Wrapper component
   */
  get Nicobar() {
    Component.defaultProps = {
      nicobarInstance: this
    };

    return Component;
  }

  /**
   * Component Builder
   * @method Nicobar#component
   * @description Single Component implementation for Nicobar
   * 
   * @param {String} className Class name used in CSS to handle the custom properties
   * @param {Object} style Object with name of custom properties that you want change.
   * @param {React.Component | Strung} [element] Element that will be rendered in this context.
   * 
   * @example
   * //usage with dom element
   * ```javascript
   * import { component } from 'nicobar'
   * 
   * const MyNicobarComponent = component.div('className', { myStyle });
   * 
   * class MyComponent extends React.Component {
   *  render() {
   *    return <div>
   *      ...
   *       <MyNicobarComponent />
   *      ...
   *    </div>
   *  }
   * }
   * ```
   * @example
   * //usage with Custom Component
   * ```javascript
   * import { component } from 'nicobar'
   * import OtherComponent from 'any_file'
   * 
   * const MyNicobarComponent = component('className', { myStyle }, OtherComponent);
   * 
   * class MyComponent extends React.Component {
   *  render() {
   *    return <div>
   *      ...
   *       <MyNicobarComponent />
   *      ...
   *    </div>
   *  }
   * }
   * ```
   *
   * @returns {React.Component} Returns the element wrapped by Nicobar
   */
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

  /**
   * Set Data
   * @method Nicobar#set
   * @description Set the data to the Header and updates the Custom Properties into CSS
   * 
   * @param {HTMLElement | String} target Customization Target
   * @param {Object} data Custom Properties values
   * 
   * @example
   * //Usage
   * ```javascript
   *  nicobar.set('.some-class', { background: '#0f0' });
   * ```
   */
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