import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="col-md-8">
        <form action="">
          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
            />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              cols="30"
              rows="10"
            />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="url">Image Url</label>
            <input type="text" name="url" id="url" className="form-control"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-lg btn-round">Post</button>
        </div>
        </form>
      </div>
    );
  }
}
