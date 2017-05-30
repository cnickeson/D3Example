import { getDataType, barClickedType } from '../actions/main-actions';
import uniqueId from 'lodash/uniqueId';

let initialState = {
  loading: true,
  data: {}
};

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case getDataType: {
      const { nodes, edges } = action.payload;
      //Consider bringing in immutableJS
      return {
        ...state,
        data: mapDataToChartData(nodes, edges),
        loading: false
      }
    }
    case barClickedType: {
      const { key, cid } = action.payload;
      const mappedKeyVal = state.data[key].map((val) => { return val.cid === cid ? {...val, total: val.total + 1} : { ...val } });
      return {
        ...state,
        data: {
          ...state.data,
          [key]: mappedKeyVal 
        }
      }
    }
    default:
      return state;
  }
}

const mapDataToChartData = (nodes, edges) => {
  var result = {};
  edges.forEach((edge, index) => {
    const key = nodes[edge.source].title;
    const destinationName = nodes[edge.destination].title;
    if(result[key]){
      result[key].push({cid: uniqueId('bar_'), destinationName, total: edge.total});
    } else {
      result[key] = [{cid: uniqueId('bar_'), destinationName, total: edge.total}];
    }
  });
  return result;
}

export default mainReducer;