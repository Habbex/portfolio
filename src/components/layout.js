import React from "react"
import { Paper, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./header";

const Layout = ({ children }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      padding: theme.spacing(2),
    },
    paper: {
      position: "absolute",
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      left: "245px"
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Header/>
     <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="column">
          {/* <Paper className={classes.paper} elevation={3}> */}
          <div className={classes.paper}>
               {children}
          </div>
             
          {/* </Paper> */}
        </Grid>
      </Container>
    </div>
    </>
   
  );
}


export default Layout
