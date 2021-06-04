import { Grid, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#10222e",
  },
  footerMain: {
    padding: "70px 0",
  },
  padding30: {
    padding: "30px 0",
  },
  padding10: {
    padding: "10px 0",
  },
  footerDeveloper: {
    paddingBottom: "70px",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.footer}>
        <Grid container justify="space-around" className={classes.footerMain}>
          <Grid item>
            <Grid className={classes.padding30}>
              <Typography variant="h5" color="primary">
                Classes
              </Typography>
            </Grid>
            <Grid>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                Class X
              </Typography>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                Class IX
              </Typography>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                Class VII
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid className={classes.padding30}>
              <Typography variant="h5" color="primary">
                Boards Covered
              </Typography>
            </Grid>
            <Grid>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                CBSE
              </Typography>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                ICSE
              </Typography>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                CHSE
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid className={classes.padding30}>
              <Typography variant="h5" color="primary">
                Resources
              </Typography>
            </Grid>
            <Grid>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                Practice Exams
              </Typography>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                Question Banks
              </Typography>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                Text Books
              </Typography>
              <Typography
                className={classes.padding10}
                variant="body1"
                color="primary"
              >
                Summary Vedios
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-around"
          className={classes.footerDeveloper}
        >
          <Typography variant="h5" color="primary">
            Developed By OrbTech.in
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
