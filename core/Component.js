import React from 'react';
import CSS from 'Core/CSS.helper';

/** 
 * Nicobar Component
*/
class Component extends React.Component {
  /**
   * @constructor
   * @param {Object} props Component Properties
   */
  constructor(props) {
    super(props);

    this.className = CSS.getClassHash();
  }

  /**
   * @method Component#componentWillReceiveProps(props)
   * @description Callback function when Component is receiving new properties
   * @private
   * @param {Object} props Component Properties
   */
  componentWillReceiveProps(props) {
    this.reloadStyle(props.style);
  }

  /**
   * @method Component#componentDidMount()
   * @description Callback function when Component has been mounted
   * @private
   */
  componentDidMount() {
    this.reloadStyle(this.props.style);
  }

  /**
   * @method Component#reloadStyle(style)
   * @private
   * @description Reload Nicobar styles
   * 
   * @param {Object} style 
   */
  reloadStyle(style) {
    this.props.nicobarInstance.set(`.${this.className}`, style);
  }

  /** 
   * Render
   * @method Component#render()
   * @description React's Render function
   * 
   * @returns {React.Component} React Component
  */
  render() {
    return (
      <div className={this.className}>
        {this.props.children}
      </div>
    )
  }
}

export default Component;