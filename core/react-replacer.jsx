import Css from './css.helper';
import React from 'react';
import _ from 'lodash';

function reactInterceptor(instance) {
  let nativeRender = instance.render;

  instance.render = () => {
    console.log(this.selector);
    return <div className={this.selector}> { instance::nativeRender() } </div>;
  };
}

class ReactReplacer extends React.Component{
  constructor(instance) {
    super();
    this.selector = Css.getClassHash();
    this::reactInterceptor(instance);
  }

  set(data) {
    return nicobar.set(`.${this.selector} *`, data);
  }
}

export default ReactReplacer;
