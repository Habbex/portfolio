import React from 'react';
import {Link, useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ThemeSwitcher from "../components/themeSwitcher";
import GitHubIcon from '@material-ui/icons/GitHub';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    padding: theme.spacing(1)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
  activeLink:{
    color: theme.palette.text.disabled,
    textAlign: 'center',
    textDecoration: 'none',
  },
  imageAvatar:{
    margin: theme.spacing(1),
    width: "6.25em",
    boxSizing: "inherit",
    textAlign: "center",
    border: "2px solid theme.palette.text.secondary",
    display: "inline-block",
    position: "relative",
    borderRadius: "100%",
  }
}));


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImg: file(relativePath: { eq: "images/header/profilePic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Link to="/">
          <Img
            className={classes.imageAvatar}
            fluid={data.profileImg.childImageSharp.fluid}
          />
        </Link>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           Ehab Okal Portfolio
          </Typography>
          <ThemeSwitcher/> 
        </Toolbar>
        <Tabs
              indicatorColor="primary"
              textColor="primary"
              centered
            >
            <Link activeClassName={classes.activeLink} to="/blogs" className={classes.link}>
              <Tab label={<div className={classes.title}>
                <MailIcon style={{ verticalAlign: 'middle' }} /> Blogs</div>} />
            </Link>  
            <Link activeClassName={classes.activeLink}  to="/about-me" className={classes.link}>
              <Tab label={<div className={classes.title}>
                <MailIcon style={{ verticalAlign: 'middle' }} /> About Me</div>} />
            </Link>
            <Link activeClassName={classes.activeLink}  to="/contact-me" className={classes.link}>
              <Tab label={<div className={classes.title}>
                <MailIcon style={{ verticalAlign: 'middle' }} /> Contact Me</div>} />
            </Link>
          </Tabs>
      </AppBar>
      {/* <Drawer className={classes.drawer} variant="permanent" classes={{paper:classes.drawerPaper}}>
          <Toolbar/>
          <div className={classes.drawerContainer}>
            <List>
              <Link to="/contact-me">
              <ListItem button >
                <ListItemIcon><MailIcon/> </ListItemIcon>
                <ListItemText primary="Contact Me" />
              </ListItem>
              </Link>
            </List>
            <List>
              <Link to="/about-me">
              <ListItem button >
                <ListItemIcon><MailIcon/> </ListItemIcon>
                <ListItemText primary="About Me" />
              </ListItem>
              </Link>
            </List>
          </div>
      </Drawer> */}
    </div>
  );
}


export default Header