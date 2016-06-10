import React from 'react';

export default class SideNavigator extends React.Component {

  onCLickOverview() {
    FlowRouter.go('overview');
  }

  onCLickMain() {
    FlowRouter.go('machine');
  }
  render() {
    return(
      <div className="side-navigator">
        <div><img onClick={this.onCLickOverview} src="/images/sidemenu/overview.png"/></div>
        <div><img onClick={this.onCLickMain} src="/images/sidemenu/machines.png"/></div>
        <div><img src="/images/sidemenu/setting.png"/></div>
      </div>
    )
  }
}
