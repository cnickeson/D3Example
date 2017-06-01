import file from '../data.json';

export const getDataType = "GET_DATA_TYPE";
export const getData = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({type: getDataType, payload: { edges: file.edges, nodes: file.nodes }});
    }, 1000);
  }
}

export const edgeClickedType = "BAR_CLICKED_TYPE";
export const edgeClicked = (cid) => {
  return { type: edgeClickedType, payload: { cid } };
}