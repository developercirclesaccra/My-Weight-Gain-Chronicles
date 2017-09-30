import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead">
            Welcome to Weight loss chronicles where you can share your stories
            about foods that you love to eat and will most likely get you fat
          </p>
          <div className="container text-center">
              <button className="btn btn-round btn-outline-primary btn-primary">Tell your story</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
