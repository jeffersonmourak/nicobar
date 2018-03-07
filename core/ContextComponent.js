import React from 'react';
import CSS from 'Core/CSS.helper';
import objectFilter from 'Utils/objectFilter';
import _ from 'lodash';

/**
 * Context Component
 * @description React Component that provides a single Nicobar instance for the element, it wraps the element with nicobar and propagate yours properties
*/
class ContextComponent extends React.Component {
  /**
   * Get From Props
   * @method ContextComponent#getFromProps(target)
   * @private
   * @description Returns the object with properties from Nicobar or from elements
   * 
   * @param {String} target String that contains which type of properties you're asking for
   * 
   * @returns {Object} The object that was required in target
   */
  getFromProps(target) {
    let props = this.props.properties,
        [customProperties, properties] = _.partition(Object.keys(props), key => _.startsWith(key, '__')),
        copyFromProps = (obj, key) => { 
          obj[key] = props[key];

          return obj;
        };

    if (target === 'customProperties') {
      return customProperties.reduce(copyFromProps, {})
    } else {
      return properties.reduce(copyFromProps, {})
    }
  }

  /** 
   * Filter Style
   * @method ContextComponent#filterStyle()
   * @private
   * @description Filter the custom properties from element's properties and set an override to styles of this component.
   * 
   * @returns {Object} Custom properties for this component style
  */
  filterStyle() {
    let customProperties = _.reduce(this.getFromProps('customProperties'),
        (properties, value, property) => { 
          properties[property.replace('__', '')] = value;

          return properties
        }, {});

    return Object.assign(this.props.style, customProperties);
  }
  
  /** 
   * Render
   * @method ContextComponent#render()
   * @description React's Render function
   * 
   * @returns {React.Component} React Component
  */
  render() {
    return <this.props.Nicobar style={this.filterStyle()}>
      <this.props.element className={this.props.className} {...this.getFromProps()} ></this.props.element>
    </this.props.Nicobar>
  }
}

export default ContextComponent;