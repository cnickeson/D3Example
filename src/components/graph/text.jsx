import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
  render() {
    const { x, y, text } = this.props;
    return (
      <text x={x} y={y}>{text}</text>
    );
  }
}

Text.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default Text;