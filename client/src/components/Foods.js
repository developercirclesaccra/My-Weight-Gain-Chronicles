import React, { Component } from "react";

class Foods extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="../../public/assets/img/antoine-barres.jpg" alt=""  />
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Foods;
