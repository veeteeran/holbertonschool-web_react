import React, { Component } from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

export default class BodySectionWithMarginBottom extends Component {
  render() {
    const { children } = this.props
    return (
      <div className='bodySectionWithMargin'>
        <BodySection />
        {children}
      </div>
    );
  }
}