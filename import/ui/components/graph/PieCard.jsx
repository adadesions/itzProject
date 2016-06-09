import React from 'react';
import ChartistGraph from 'react-chartist';

export default class PieCard extends React.Component {

  renderChartPie() {
    var simpleLineChartData = {
      series: [20, 10, 30, 40]
    }

    return <ChartistGraph className={'ct-octave'} data={simpleLineChartData} type={'Pie'} />
  }

  render() {
    return(
        <div className="col l4">
          <div className="row">
            <div className="col l12">
              <h5>test</h5>
              {this.renderChartPie()}
            </div>
          </div>
        </div>
    )
  }
}
