import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(4),
      width: theme.spacing(46),
      height: theme.spacing(46),
    },
  },
}));

const MyPaper = () => {
  const classes = useStyles();
  return (
    <div class="container mt-5">
      <p class="h2 d-flex justify-content-center">How it Works?</p>
      <p class="d-flex justify-content-center ">Jobs for anyone anywwhere</p>
      <div className={classes.root}>
        <Paper className="paper2">
          <div className="skillss">
            {" "}
            <img
              width="105"
              height="113"
              src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/03/f1.jpg"
              class="mt-5"
            />
          </div>

          <h5 className="skillss mt-5 ">
            <strong>Free Resume Assesment</strong>
          </h5>
          <center>
            <p className="skillss mt-3 justify-content-center">
              Employee Average spend 31 hours <br />
              Scanning resume to identify potensial match
            </p>
          </center>
        </Paper>
        <Paper className="paper2">
          <div className="skillss">
            {" "}
            <img
              width="105"
              height="113"
              src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/03/f2.jpg"
              class="mt-5"
            />
          </div>

          <h5 className="skillss mt-5 ">
            <strong>Job Fit Scoring</strong>
          </h5>
          <center>
            <p className="skillss mt-3 justify-content-center">
              Our new fit meter shows you which jobs are
              <br /> most relevant to your skills and interests.
            </p>
          </center>
        </Paper>
        <Paper className="paper2">
          <div className="skillss">
            {" "}
            <img
              width="105"
              height="113"
              src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/03/f3.png"
              class="mt-5"
            />
          </div>

          <h5 className="skillss mt-5 ">
            <strong>Help Every Step Of The Way</strong>
          </h5>
          <center>
            <p className="skillss mt-3 justify-content-center">
              Our career advice section is full of information <br />
              to help you identify the right fit.
            </p>
          </center>
        </Paper>
      </div>
    </div>
  );
};

export default MyPaper;
