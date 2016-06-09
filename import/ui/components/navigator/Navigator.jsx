import React from 'react';

export default class Navigator extends React.Component {

  componentDidMount() {
    $(document).scroll(function(){
      $('.navigator').addClass('navigator-on-scroll');
      $('.dashboard-page').addClass('dashboard-page-scroll');
      $('.side-navigator').addClass('side-navigator-scroll');
      $('.overview-page').addClass('overview-page-scroll');
    });

    $(document).scroll(function() {
      if ($(this).scrollTop() === 0) { // this refers to window
        $('.navigator').removeClass('navigator-on-scroll');
        $('.dashboard-page').removeClass('dashboard-page-scroll');
        $('.side-navigator').removeClass('side-navigator-scroll');
        $('.overview-page').removeClass('overview-page-scroll');
      }
    });
  }

  onCLickMain() {
    FlowRouter.go('dashboard');
  }

  render() {
    return(
      <div className="navigator">
        <div className="logo">
          <img onClick={this.onCLickMain} src="/images/logo.png"/>
        </div>
        <div className="menu">
          <div className="list">
            <i className="material-icons large">menu</i>
          </div>
        </div>
      </div>
    )
  }
}
