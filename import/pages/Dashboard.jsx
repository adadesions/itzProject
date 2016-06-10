import React from 'react';
import ChartistGraph from 'react-chartist';

// Components
import OptionValue from '../ui/components/graph/OptionValue.jsx';
import RightSideNavigator from '../ui/components/dashboard/RightSideNavigator.jsx';

export default class Dashboard extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }

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

  renderChartPie() {
    var simpleLineChartData = {
      series: [20, 10, 30, 40]
    }

    return <ChartistGraph className={'ct-chart-donut ct-octave'} data={simpleLineChartData} type={'Pie'} />
  }

  getItem() {
    return [
      { _id: 1, src: '/images/sidemenu/arm.png', name: 'Hudrauric arm 1'},
      { _id: 2, src: '/images/sidemenu/arm.png', name: 'Hudrauric arm 2'},
      { _id: 3, src: '/images/sidemenu/press.png', name: 'Hudrauric press 1'},
      { _id: 4, src: '/images/sidemenu/press.png', name: 'Hudrauric press 2'},
      { _id: 5, src: '/images/sidemenu/other.png', name: 'Other'}
    ];
  }

  renderItems() {
    return this.getItem().map((items) => (
      <RightSideNavigator key={items._id} items={items} />
    ));
  }

  render() {
    return(
      <div className="dashboard-page row">
        <div className="dash-board col l9">
          <h3>Dashboard</h3>
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
        </div>
        <div className="tools-dashboard l3">
          <div className="tools-list">
            {this.renderItems()}
          </div>
        </div>
      </div>
    )
  }
}
