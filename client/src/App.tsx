import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <div>main content here</div>
      </Layout>
    );
  }
}
