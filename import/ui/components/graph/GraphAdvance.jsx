import React from 'react';

// Components
import ChartistGraph from 'react-chartist';
import OptionValue from './OptionValue.jsx';

export default class GraphCard extends React.Component {

  renderChart() {
    var simpleLineChartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [20, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6],
        [0, 8, 11, 13, 15]
      ]
    }

    return <ChartistGraph className={'ct-octave'} data={simpleLineChartData} type={'Line'} />
  }

  render() {
    return(
      <div className="graph row">
        <h3>Hydraulic arm 1</h3>
        <div className="col l12">
          {this.renderChart()}
        </div>
        <div className="col l9 option-value">
          <div className="col l6 option-value-column-one">
            <OptionValue />
            <OptionValue />
            <OptionValue />
          </div>
          <div className="col l6 option-value-column-two">
            <OptionValue />
            <OptionValue />
          </div>
        </div>
        <div className="col l3 result">
          <span>min : 1</span>
          <span>max : 15.5</span>
          <span>Av : 5.6</span>
        </div>
      </div>
    )
  }
}
