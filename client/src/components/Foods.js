import React, { Component } from "react";

class Foods extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="header">
              <h4 className="title">Lousy Bread</h4>
            </div>
            <div className="content">
                I kinda like lousy bread...
                <p><button className="btn btn-sm btn-round btn-primary">More</button></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="header">
              <h4 className="title">Lousy Bread</h4>
            </div>
            <div className="content">
                I kinda like lousy bread...
                <p><button className="btn btn-sm btn-round btn-primary">More</button></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="header">
              <h4 className="title">Lousy Bread</h4>
            </div>
            <div className="content">
                I kinda like lousy bread...
                <p><button className="btn btn-sm btn-round btn-primary">More</button></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Foods
