import React from 'react';
import ChartistGraph from 'react-chartist';

export default class GraphCard extends React.Component {

  renderChart() {
    var simpleLineChartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [20, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ]
    }

    return <ChartistGraph className={'ct-octave'} data={simpleLineChartData} type={'Line'} />
  }

  render() {
    return(
        <div className="graph-card col l4">
          <div className="graph row">
            <h3>Hydraulic arm 1</h3>
            <div className="col l12">
              {this.renderChart()}
            </div>
            <div className="graph-detail">
              <span>test</span>
            </div>
          </div>
        </div>
    )
  }
}
