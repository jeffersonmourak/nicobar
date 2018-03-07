import _ from 'lodash';

/** Nicobar */
class CSS {
  /**
   * Get Class Hash
   * @method CSS#getClassHash()
   * @description Creates a random class name.
   * 
   * @returns {String}
   */
  getClassHash() {
    return `nicobar-${Math.random().toString(36).substring(7)}`;
  }

  /**
   * Has Nicobar
   * @method CSS#hasNicobar(element)
   * @description Checks if the element has or not the Nicobar class name set
   * 
   * @param {HTMLElement} element Element that can already have added the Nicobar class 
   * 
   * @returns {Boolean} Status if the element has or not the nicobar class name
   */
  hasNicobar(element) {
    let classNames = element.className.split(' ');

    return _.filter(classNames, className => {
      return className.indexOf('nicobar-') !== -1;
    })[0];
  }

  /**
   * Intelligent Selector
   * @method CSS#intelligentSelector(element)
   * @description Get's the name of the selector for the component
   * 
   * @param {HTMLElement} element
   * 
   * @returns {String} selector string.
   */
  intelligentSelector(element) {
    let selector = this.hasNicobar(element);

    if (element.id) {
      return `#${element.id}`;
    } else if (!selector) {
      selector = this.getClassHash();
    }
    return `.${selector}`;
  }

  /**
   * From Object to Css
   * @method CSS#fromObjToCss(object)
   * @description Conversts the Custom Properties object to CSS
   *
   * @param {Object} object Custom properties names collection
   * 
   * @returns {String} the CSS code with custom properties.
   */
  fromObjToCss(object) {
    return Object.keys(object)
      .reduce( (css, variable) => {
        return css += `--${variable}: ${object[variable]};`;
      }, '');
  }
}

export default new CSS();
