import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Edge extends Component {
  render() {
    const { target, source, total, color } = this.props.edge;
    return (
      <line onClick={this.props.onEdgeClick} className='link' strokeWidth={Math.max(total/25, 2)}
        x1={source.x} x2={target.x} y1={source.y} y2={target.y} stroke={color} />
    );
  }
}

Edge.propTypes = {
  edge: PropTypes.shape({
    target: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    source: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    total: PropTypes.number.isRequired
  }),
  onEdgeClick: PropTypes.func.isRequired
};

export default Edge;