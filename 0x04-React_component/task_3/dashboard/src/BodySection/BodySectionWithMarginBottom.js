import React, { Component } from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

export default class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className='bodySectionWithMargin'>
        <BodySection />
      </div>
    );
  }
}