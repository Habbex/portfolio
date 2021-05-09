import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Grid,Typography,Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

const Pagination = ({ pageContext }) => {

    const useStyles = makeStyles((theme) => ({  
        title: {
            flexGrow: 1,
            textDecoration: 'none',
            padding: theme.spacing(1),
          },
          alignRight:{
              textAlign:"right",

          },
          test:{
              padding: theme.spacing(3)
          },
      }));


    const { previousPagePath, nextPagePath } = pageContext;
    const classes= useStyles()
    return (
        <>
        <Grid container item xs={8} className={classes.test}>
        <Grid item xs={4} >
                    {previousPagePath && (
                        <Link className={classes.title} to={previousPagePath}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<ArrowBackIcon />}
                            >
                                Prev
                            </Button>
                        </Link>
                    )}
           </Grid>
           <Grid item xs={4}>
               <Typography variant="h4" align="center" gutterBottom>
                   Lastest Posts
               </Typography>
            </Grid>  
           <Grid item xs={4} className={classes.alignRight}>
           {nextPagePath && (
                        <Link className={classes.title} to={nextPagePath}>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<ArrowForwardIcon />}
                            >
                                Next
                            </Button>
                        </Link>
                    )}
           </Grid>    
        </Grid>     
        </>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired
};

export default Pagination;