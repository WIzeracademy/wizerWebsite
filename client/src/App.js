import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { connect } from "react-redux";
import * as actions from "./actions";
import Landing from "./components/Landing";
import "./App.css";
// Material Ui Theme Change
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Footer from "./components/Footer";
import Developing from "./components/Developing";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Light Color
      main: "#FFF5D1",
    },
    secondary: {
      // Dark Color
      main: "#10222E",
    },
  },
});

const Dashboard = () => <h2>Dashboard</h2>;
const paymentMade = () => <h2>Thankyou For the payment</h2>;

const SurveyNew = () => <h2>SirveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <div className="app">
              <Header></Header>
              <Route exact path="/" component={Landing}></Route>
              <Route exact path="/dashboard" component={Dashboard}></Route>
              <Route exact path="/developing" component={Developing}></Route>
              <Route exact path="/paymentMade" component={paymentMade}></Route>

              <Footer></Footer>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  }
}

export default connect(null, actions)(App);
