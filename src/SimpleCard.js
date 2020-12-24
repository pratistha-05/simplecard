import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 1204,
    minHeight: 201
  },

  text1: {
    fontSize: "28px",
    marginTop: 36,
    marginLeft: 47
  },

  button2: {
    backgroundColor: "#77C285",
    textTransform: "capitalize",
    minWidth: "79px",
    minHeight: "22px",
    color: "white",
    fontSize: "13px",
    marginTop: "36px"
  },
  text3: {
    fontSize: "13px",
    marginTop: 36,
    opacity: "68%"
  },
  text4: {
    fontSize: "34px",
    marginTop: 29
  },
  text5: {
    fontSize: "18px",
    marginTop: 29,
    marginLeft: 68, //CHANGE
    opacity: "76%",
    textAlign: "left"
  },
  button6: {
    backgroundColor: "#4474F8",
    fontSize: "22px",
    minWidth: "138px",
    minHeight: "43px",

    textTransform: "capitalize",
    color: "white",
    marginTop: "36px"
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div>
        <Grid container spacing={3}>
          <Grid xs>
            <Typography className={classes.text1}>
              Data Structure and Algorithm Basics
            </Typography>
          </Grid>

          <Grid
            xs
            style={{
              display: "flex",
              flexDirection: "column",
              justify: "center",
              alignItems: "center"
            }}
          >
            <Button className={classes.button2}>new</Button>
          </Grid>

          <Grid
            xs
            style={{
              display: "flex",
              flexDirection: "column",
              justify: "center",
              alignItems: "center"
            }}
          >
            <Typography className={classes.text3}>
              Published on 10th Dec,2020(1 day ago)
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid
            xs
            style={{
              display: "flex",
              flexDirection: "column",
              justify: "center",
              alignItems: "center"
            }}
          >
            <Typography className={classes.text4}>25</Typography>
            <Typography style={{ fontSize: 18 }}>Questions</Typography>
          </Grid>

          <Grid
            xs
            style={{
              display: "flex",
              flexDirection: "column",
              justify: "center",
              alignItems: "center"
            }}
          >
            <Typography className={classes.text4}>30</Typography>
            <Typography style={{ fontSize: 18 }}>Minutes</Typography>
          </Grid>

          <Grid
            xs
            style={{
              display: "flex",
              flexDirection: "column",
              justify: "center",
              alignItems: "center"
            }}
          >
            <Typography className={classes.text4}>2</Typography>
            <Typography style={{ fontSize: 18 }}>Attempts</Typography>
          </Grid>

          <Grid
            xs
            style={{
              display: "flex",
              flexDirection: "column",
              justify: "center",
              alignItems: "center"
            }}
          >
            <Typography className={classes.text5}>Dsa Basics</Typography>
            <Typography style={{ fontSize: "18px", opacity: "76%" }}>
              No negative Marking
            </Typography>
          </Grid>

          <Grid
            xs
            style={{
              display: "flex",
              flexDirection: "column",
              justify: "center",
              alignItems: "center"
            }}
          >
            <Button className={classes.button6}>View</Button>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}
