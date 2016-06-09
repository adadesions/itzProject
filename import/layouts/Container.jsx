import React from 'react';

// Components
import Navigator from '../ui/components/navigator/Navigator.jsx';
import SideNavigator from '../ui/components/navigator/SideNavigator.jsx';

export default class Container extends React.Component {
  render() {
    return(
      <div>
        <Navigator />
        <div className="layout-container row">
          <div className="col l1">
            <SideNavigator />
          </div>
          <div className="col l11">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}
