import React, { PropTypes } from 'react';

export default class RightSideNavigator extends React.Component {
  render() {
    return(
      <div className="list-items">
        <img src={this.props.items.src}/>
        <h5>{this.props.items.name}</h5>
      </div>
    )
  }
}

RightSideNavigator.propTypes = {
  items: PropTypes.object.isRequired,
};
