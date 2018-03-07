import React from 'react';
import CSS from 'Core/CSS.helper';

class Component extends React.Component {
  constructor(props) {
    super(props);

    this.className = CSS.getClassHash();
  }

  componentWillReceiveProps(props) {
    this.reloadStyle(props.style);
  }

  componentDidMount() {
    this.reloadStyle(this.props.style);
  }

  reloadStyle(style) {
    this.props.nicobarInstance.set(`.${this.className}`, style);
  }

  render() {
    return (
      <div className={this.className}>
        {this.props.children}
      </div>
    )
  }
}

export default Component;