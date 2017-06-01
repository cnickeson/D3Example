import { getDataType, edgeClickedType } from '../actions/main-actions';
import uniqueId from 'lodash/uniqueId';

let initialState = {
  loading: true,
  nodes: [],
  edges: []
};

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case getDataType: {
      const { nodes, edges } = action.payload;
      //Consider bringing in immutableJS
      return {
        ...state,
        nodes: mapNodes(nodes),
        edges: edges.map((edge) => { return mapEdge(edge) }),
        loading: false
      }
    }
    case edgeClickedType: {
      const { cid } = action.payload;
      const mappedEdges = state.edges.map((edge) => { return edge.cid === cid ? {...edge, total: edge.total + 1} : { ...edge } });
      return {
        ...state,
        edges: mappedEdges
      }
    }
    default:
      return state;
  }
}

const randomColor = () => {
  return `rgb(${randomNumberRange(60,255)}, ${randomNumberRange(60,255)}, ${randomNumberRange(60,255)}`;
}

const randomNumberRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const mapEdge = (edge) => {
  return { 
    cid: uniqueId('edge_'), 
    source: edge.source, target: 
    edge.destination, 
    total: edge.total,
    color: randomColor()
  }
}

const mapNodes = (nodes) => {
  var result = [];
  for(var node in nodes) {
    result.push({
      id: node,
      title: nodes[node].title,
    });
  }
  return result;
}

export default mainReducer;