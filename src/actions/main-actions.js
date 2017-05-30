import file from '../data.json';

export const getDataType = "GET_DATA_TYPE";
export const getData = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({type: getDataType, payload: { edges: file.edges, nodes: file.nodes }});
    }, 1000);
  }
}

export const barClickedType = "BAR_CLICKED_TYPE";
export const barClicked = (key, cid) => {
  return { type: barClickedType, payload: { key, cid } };
}