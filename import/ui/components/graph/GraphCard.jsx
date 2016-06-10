import React from 'react';
import ChartistGraph from 'react-chartist';

export default class GraphCard extends React.Component {

  renderChart() {
    var simpleLineChartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [20, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6],
        [1, 7, 9, 5, 15]
      ]
    }

    return <ChartistGraph className={'ct-octave'} data={simpleLineChartData} type={'Line'} />
  }

  render() {
    return(
        <div className="graph-card col l4">
          <h5>Hydraulic arm 1</h5>
          <div className="graph row">
            <div className="col l12">
              {this.renderChart()}
            </div>
            <div className="graph-detail">
              <span>min: 0/max: 4</span>
            </div>
          </div>
        </div>
    )
  }
}
