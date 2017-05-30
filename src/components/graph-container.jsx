import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData, barClicked } from '../actions/main-actions';
import * as d3 from 'd3'
import Bar from './bar.jsx';
import Text from './text.jsx';
import Spinner from 'react-spinkit';

var xfunc, height;
var margin={top:20,right:5,bottom:20,left:5};

class GraphContainer extends Component {

  constructor() {
    super();
    this.state = {
      width: 0
    };
    this.renderBarsByKey = this.renderBarsByKey.bind(this);
    this.renderBar = this.renderBar.bind(this);
  }

  componentWillMount() {
    this.props.getData();
  }

  componentDidMount() {
  }

  render() {
    
    if(this.props.loading) {
      return <Spinner fadeIn="none" className="spinner" name="three-bounce" color="steelblue" />;
    }

    const data = this.props.data;
    height=this.props.height-(margin.top+margin.bottom);

    var transform='translate('+margin.left+','+50+')';
    xfunc=d3.scaleBand()
        .domain(Object.keys(data).map((d) => {
          return d;
        }))
        .rangeRound([0,this.props.width - 15])
        .padding(0.2);

    return(
        <div>
            <svg id={this.props.chartId} width={this.props.width}
                  height={this.props.height}>

                <g transform={transform}>
                  { Object.keys(data).map((key) => { return this.renderBarsByKey(key, data[key]); }) }
                  { Object.keys(data).map((prop) => { return this.renderBottomText(prop); }) }
                </g>
            </svg>
        </div>
        );
  }

  renderBarsByKey(key, entry) {
    return entry.map((val, index) => {
      return this.renderBar(key, val, index, entry.length); 
    });
  }

  renderBar(key, val, index, length) {
    const width = xfunc.bandwidth() / length;
    const x = xfunc(key) + (width * index);
    const y = height - val.total - 40;
    //Consider a way to wrap the desintaionName or use colors and a map for a better visual
    return (
      <Bar key={index} x={x} y={y} height={val.total} width={width} onBarClicked={() => this.props.barClicked(key, val.cid)}>
        <g>
          <text x={x} y={y - 25}>{val.destinationName}</text>
          <text x={x} y={y - 10}>{`(${val.total})`}</text>
        </g>
      </Bar>
    );
  }

  renderBottomText(prop) {
    return <Text key={prop} y={height - margin.bottom} x={xfunc(prop)} text={prop}/>;
  }
}

GraphContainer.defaultProps = {
  width: 1200,
  height: 600,
  chartId: 'v_chart'
};

GraphContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => { dispatch(getData()); },
    barClicked: (key, cid) => { dispatch(barClicked(key, cid)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (GraphContainer);