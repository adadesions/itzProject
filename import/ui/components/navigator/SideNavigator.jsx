import React from 'react';

export default class SideNavigator extends React.Component {

  onCLickOverview() {
    FlowRouter.go('overview');
    $('.overview-menu').addClass('active');
    $('.machine-menu').removeClass('active');
  }

  onCLickMain() {
    FlowRouter.go('machine');
    $('.machine-menu').addClass('active');
    $('.overview-menu').removeClass('active');
  }
  render() {
    return(
      <div className="side-navigator z-depth-2">
        <div onClick={this.onCLickOverview} className="overview-menu side-menu"><img id="overviewMenu" src="/images/sidemenu/overview.png"/></div>
        <div onClick={this.onCLickMain} className="machine-menu side-menu"><img id="machineMenu" src="/images/sidemenu/machines.png"/></div>
        <div className="setting-menu side-menu"><img id="settingMenu" src="/images/sidemenu/setting.png"/></div>
      </div>
    )
  }
}
