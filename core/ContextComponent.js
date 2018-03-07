import React from 'react';
import CSS from 'Core/CSS.helper';
import objectFilter from 'Utils/objectFilter';
import _ from 'lodash';

class ContextComponent extends React.Component {
  constructor(props) {
    super(props)
  }

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

  filterStyle() {
    let customProperties = _.reduce(this.getFromProps('customProperties'),
        (properties, value, property) => { 
          properties[property.replace('__', '')] = value;

          return properties
        }, {});

    return Object.assign(this.props.style, customProperties);
  }
  
  render() {
    return <this.props.Nicobar style={this.filterStyle()}>
      <this.props.element className={this.props.className} {...this.getFromProps()} ></this.props.element>
    </this.props.Nicobar>
  }
}

export default ContextComponent;