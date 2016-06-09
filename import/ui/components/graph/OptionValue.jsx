import React from 'react';

export default class OptionValue extends React.Component {
  render() {
    return(
      <div className="switch">
        <label>
          <input type="checkbox"/>
          <span className="lever"></span>
          Value 1
        </label>
      </div>
    )
  }
}
