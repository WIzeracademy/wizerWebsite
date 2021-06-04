import React from "react";
import "./Landing.css";
import Grid from "@material-ui/core/Grid";
import heroImage from "../static/hero-image.svg";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";
import LandingForm from "./LandingForm";
import landingTeacherImage from "../static/landing_teacher.svg";
import landingRemoteImage from "../static/landing_remote.svg";
import landingEaseImage from "../static/landing_ease.svg";
import landingGameMathsImage from "../static/landing_game_maths.svg";
import landingGameMemoryImage from "../static/landing_game_memory.svg";
import landingGameResoningImage from "../static/landing_games_reasoning.svg";

const useStyles = makeStyles((theme) => ({
  landing: {
    paddingTop: "25px",
  },
  landingHeroImage: {
    height: "517px",
    width: "646px",
  },
  formHeading: {
    margin: "25px",
  },
  padding30: {
    padding: "30px 0",
  },
  memoryImage: {
    position: "relative",
  },
  memoryImageText: {
    position: "absolute",
    top: "92px",
    left: "48px",
    width: "203px",
  },
}));

function Landing() {
  const classes = useStyles();

  return (
    <div className="landing">
      <Grid container justify="space-around" className={classes.landing}>
        <Grid item className={classes.landingHeroImage}>
          <img src={heroImage} alt="Hero Image" />
        </Grid>
        <Grid
          item
          xs={3}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid>
            <Typography
              color="secondary"
              variant="h4"
              className={classes.formHeading}
            >
              Book Demo Classes
            </Typography>
            <LandingForm />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Grid container justify="center" className={classes.padding30}>
          <Typography color="secondary" variant="h3">
            Advantages
          </Typography>
        </Grid>

        <Grid container justify="space-around" className={classes.padding30}>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <img src={landingEaseImage} alt="Ease of Access Image" />
              <Typography
                color="secondary"
                variant="h5"
                className={classes.padding30}
              >
                Study Made Relaxing
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="column" alignItems="center">
              <img src={landingTeacherImage} alt="Ease of Access Image" />
              <Typography
                color="secondary"
                variant="h5"
                className={classes.padding30}
              >
                Constant Support by the faculties
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="column" alignItems="center">
              <img
                src={landingRemoteImage}
                alt="Ease of Access Image"
                style={{ marginBottom: "-54px" }}
              />
              <Typography
                color="secondary"
                variant="h5"
                className={classes.padding30}
              >
                Remote access at ease
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid>
        <Grid container justify="center" className={classes.padding30}>
          <Typography color="secondary" variant="h3">
            The Wizer Games
          </Typography>
        </Grid>
        <Grid container justify="space-around" className={classes.padding30}>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <img src={landingGameMathsImage} alt="Math Olympiad Image" />
              <Typography
                color="secondary"
                variant="h5"
                className={classes.padding30}
              >
                Math Olympiad
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <img
                src={landingGameResoningImage}
                alt="Logical Reasoning Image"
              />
              <Typography
                color="secondary"
                variant="h5"
                className={classes.padding30}
              >
                Logical Reasoning
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="space-around" className={classes.padding30}>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid className={classes.memoryImage}>
                <img src={landingGameMemoryImage} alt="Ease of Access Image" />
                <Typography
                  className={classes.memoryImageText}
                  variant="h5"
                  color="primary"
                >
                  Wizer Games For Memory And Logical Thinking of Brain
                </Typography>
              </Grid>
              <Typography
                color="secondary"
                variant="h5"
                className={classes.padding30}
              >
                Memory and Mind Booster
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
