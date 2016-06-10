import React from 'react';

// Components
import RightSideNavigator from '../ui/components/dashboard/RightSideNavigator.jsx';
import GraphAdvance from '../ui/components/graph/GraphAdvance.jsx'

export default class Dashboard extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
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
          <h3>Machine</h3>
          <GraphAdvance />
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
