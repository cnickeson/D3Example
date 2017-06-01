import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, edgeClicked } from '../../actions/main-actions';
import * as d3 from 'd3'
import Edge from './edge.jsx';
import Node from './node.jsx';
import Spinner from 'react-spinkit';
import BoardContainer from '../board/board-container.jsx';

var width = 960;
var height = 500;
var simulation = d3.forceSimulation()
  .force('charge', d3.forceManyBody().strength(-100))
  .force('x', d3.forceX(width/2).strength(.1))
  .force('y', d3.forceY(height/2).strength(.1));

class GraphContainer extends Component {

  constructor() {
    super();
    this.state = {
      width: 0
    };
  }

  componentWillMount() {
    this.props.getData();
    simulation.on('tick', () => {
       this.forceUpdate();
    });
  }

  componentWillReceiveProps(nextProps) {
    //Look at cloning the props since manipulating props is bad React practice
    simulation.nodes(nextProps.nodes);
    const forceLink = d3.forceLink(nextProps.edges)
                        .id(l => l.id)
                        .distance(400);

    simulation.force('link', forceLink);
  }
  

  render() {
    const { loading, nodes, edges, edgeClicked } = this.props;
    if(loading) {
      return <Spinner fadeIn="none" className="spinner" name="three-bounce" color="steelblue" />;
    }

    return (
      <div className="graph-container">
        <svg width={width} height={height}>
          <g>
            {edges.map((edge) => { return <Edge onEdgeClick={() => edgeClicked(edge.cid)} key={edge.cid} edge={edge} />})}
            {nodes.map((node) => { return <Node key={node.id} node={node} />})}
          </g>
        </svg>
        <BoardContainer edges={edges} nodes={nodes}/>
      </div>
    )
  }
}

GraphContainer.defaultProps = {
  width: 1200,
  height: 600,
  chartId: 'v_chart'
};

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => { dispatch(getData()); },
    edgeClicked: (cid) => { dispatch(edgeClicked(cid)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (GraphContainer);