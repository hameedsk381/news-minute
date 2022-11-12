import React, { Component } from "react";
import {Link} from  'react-router-dom'

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-danger fixed-top ">
          <div class="container-fluid ">
            <img
              src="https://www.thenewsminute.com/sites/all/themes/tnm/The-News-Minute-Logo_mob.png"
              alt="logo"
              style={{ width: "75px" }}
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto px-auto">
                <li class="nav-item text-white fs-4">
                  <Link
                    class="nav-link active text-white fs-4"
                    aria-current="page"
                    to={"/general"}
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-4 text-white" to="/business">
                    Business
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-4 text-white" to="/entertainment">
                    Entertainment
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link fs-4 text-white" to="/health">
                    Health
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link fs-4 text-white" to="/science">
                    science
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-4 text-white" to="/sports">
                    sports
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-4 text-white" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
