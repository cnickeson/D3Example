import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bar extends Component {
  render() {
    const { x, y, height, width, onBarClicked } = this.props;
    return (
        <g>
          <rect fill="#74d3eb" rx="3" ry="3"
              x={x} y={y}
              height={height}
              width={width}
              onClick={onBarClicked} />
              {this.props.children}
        </g>
    );
  }
}

Bar.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onBarClicked: PropTypes.func.isRequired
};

export default Bar;