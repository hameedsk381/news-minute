import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress : 0
  }
 setProgress =(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
        color='blue'
        progress={this.state.progress}
       
      />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News  setProgress={this.setProgress}
                  key="general"
                  pageSize={12}
                  country={"in"}
                  category={"general"}
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News  setProgress={this.setProgress}
                  key="science"
                  pageSize={12}
                  country={"in"}
                  category={"science"}
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={12}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News  setProgress={this.setProgress}
                  key="health"
                  pageSize={12}
                  country={"in"}
                  category={"health"}
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News  setProgress={this.setProgress}
                  key="business"
                  pageSize={12}
                  country={"in"}
                  category={"business"}
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News  setProgress={this.setProgress}
                  key="sports"
                  pageSize={12}
                  country={"in"}
                  category={"sports"}
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News  setProgress={this.setProgress}
                  key="technology"
                  pageSize={12}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
