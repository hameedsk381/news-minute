import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, url } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={imgUrl }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-block">
            <h6 className="card-title ">{title}</h6>

            <p className="card-text ">
              <small>{description}</small>
            </p>

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary my-2"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
