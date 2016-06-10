import React from 'react';

// Components
import GraphCard from '../ui/components/graph/GraphCard.jsx';
import PieCard from '../ui/components/graph/PieCard.jsx';
import DonutCard from '../ui/components/graph/DonutCard.jsx';

export default class Overview extends React.Component {

  componentDidMount() {

  }

  renderChartPie() {
    var simpleLineChartData = {
      series: [20, 10, 30, 40]
    }

    return <ChartistGraph className={'ct-chart-donut ct-octave'} data={simpleLineChartData} type={'Pie'} />
  }

  render() {
    return(
      <div className="overview-page row">
        <div className="overview col l12">
          <h3>Overview</h3>
          <div className="row graph-row">
            <GraphCard />
            <GraphCard />
            <GraphCard />
          </div>
          <div className="row pie-row">
            <DonutCard />
          </div>
        </div>
      </div>
    )
  }
}
