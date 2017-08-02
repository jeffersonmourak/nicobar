import Css from './css.helper';

class Element {
  createStyle() {
    let styleEl = document.createElement('style');
    this.elements.styleElement = styleEl;
    this.elements.header.appendChild(styleEl);
  }

  setElementClass(element, className) {
    let elementClasses = element.className.split(' ');
    elementClasses.push(className);
    element.className = elementClasses.join(' ');

    return element;
  }
}

export default new Element();
