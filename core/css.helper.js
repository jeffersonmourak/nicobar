import Element from './element.helper';
import _ from 'lodash';

class CSS {
  getClassHash() {
    return `nicobar-${Math.random().toString(36).substring(7)}`;
  }

  hasNicobar(element) {
    let classNames = element.className.split(' ');

    return _.filter(classNames, className => {
      return className.indexOf('nicobar-') !== -1;
    })[0];
  }

  intelligentSelector(element) {
    let selector = this.hasNicobar(element);

    if (element.id) {
      return `#${element.id}`;
    } else if (!selector) {
      selector = this.getClassHash();
      this::Element.setElementClass(element, selector);
    }
    return `.${selector}`;
  }

  fromObjToCss(object) {
    return Object.keys(object)
      .reduce( (css, variable) => {
        return css += `--${variable}: ${object[variable]};`;
      }, '');
  }
}

export default new CSS();
