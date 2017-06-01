import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoardItem from './board-item.jsx';

class BoardContainer extends Component {
  render() {
    const { edges } = this.props;
    return (
      <div className="board-container">
          { edges.map((edge) => { return this.renderBoardItem(edge) }) }
      </div>
    );
  }

  renderBoardItem(edge) {
    return <BoardItem key={edge.cid} sourceName={edge.source.title} targetName={edge.target.title} total={edge.total} color={edge.color}/>
  }
}

BoardContainer.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.shape({
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
    })
  }))
};

export default BoardContainer;