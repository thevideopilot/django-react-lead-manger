import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import store from "../store";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "../components/layout/Alerts";

// ALerts Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <>
            <Header />
            <Alerts />
            <div className="container mx-auto">
              <Dashboard />
            </div>
          </>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
