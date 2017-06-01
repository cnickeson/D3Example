import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoardItem extends Component {
  render() {
    const { sourceName, targetName, total, color } = this.props;
    return (
      <div className="board-item" style={{backgroundColor: color}}>
        <label>{`${sourceName} -> ${targetName}`}</label> <br /><label>{total}</label>
      </div>
    );
  }
}

BoardItem.propTypes = {
  sourceName: PropTypes.string.isRequired,
  targetName: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default BoardItem;