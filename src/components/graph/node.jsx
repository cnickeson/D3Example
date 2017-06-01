import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Node extends Component {
  render() {
    const { x, y, key, title } = this.props.node;
    var transform = 'translate(' + x + ',' + y + ')';
    return (
      <g className='node' key={key} transform={transform} cx={x} cy={y}>
        <circle r={2} />
        <text x={5} dy='.35em'>{title}</text>
      </g>
    );
  }
}

Node.propTypes = {
  node: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }),
  
};

export default Node;