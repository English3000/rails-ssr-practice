import React from "react";
import PropTypes from "prop-types";
export default class HomePageContainer extends React.Component {
  render () {
    console.log("server");
    return (
      <div id='current-page' style={{display: 'flex', flex: 1, backgroundColor: 'red'}}>
        Server-rendered
      </div>
    );
  }
}
