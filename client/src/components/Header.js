import React, { Component } from "react";
import "./Header.css";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../static/logo.jpg";
import MaterialLink from "@material-ui/core/Link";

import { Avatar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#10222e",
    height: "67px",
    padding: "0 2vw",
  },
  logo: {
    height: "67px",
    width: "67px",
  },
  brandName: {
    color: "#FFF5D1",
  },
  navLinks: {
    color: "#FFF5D1",
    padding: "0 10px",
    textDecoration: "none",
  },
  navButton: {
    color: "#FFF5D1",
  },
}));

function Header(props) {
  const classes = useStyles();

  const renderContent = () => {
    switch (props.auth) {
      case null:
        return "Still Logging";
      case false:
        return (
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className={classes.navButton}
            href="/auth/google"
          >
            Login with GOOGLE
          </Button>
        );
      default:
        return (
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className={classes.navButton}
            href="/api/logout"
          >
            LogOut
          </Button>
        );
    }
  };

  const NavTab = (props) => (
    <Link to="/developing" style={{ textDecoration: "none", margin: "0 10px" }}>
      <Typography color="primary">
        {props.text.charAt(0).toUpperCase() + props.text.slice(1)}
      </Typography>
    </Link>
  );

  console.log(props);
  return (
    <div className="header">
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.header}
      >
        <Grid item>
          <Grid container alignItems="center">
            <Link to="/">
              <Avatar src={logo} className={classes.logo}></Avatar>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h5" className={classes.brandName}>
                Wizer Academy
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid item alignItems="center">
          <Grid container justify="space-around">
            <NavTab text="resources"></NavTab>
            <NavTab text="courses"></NavTab>
            <NavTab text="classes"></NavTab>
            <NavTab text="games"></NavTab>
            <NavTab text="schedule"></NavTab>
          </Grid>
        </Grid>
        <Grid item>{renderContent()}</Grid>
      </Grid>
    </div>
  );
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
