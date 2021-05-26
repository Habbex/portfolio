import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ThemeSwitcher from "../components/themeSwitcher";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';
import CategoryIcon from '@material-ui/icons/Category';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

const drawerWidth= 240;

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
    textAlign: 'center',
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
  activeLink: {
    color: theme.palette.text.disabled,
    textAlign: 'center',
    textDecoration: 'none',
  },
  imageAvatar: {
    margin: theme.spacing(2),
    boxSizing: "inherit",
    textAlign: "center",
    display: "inline-block",
    position: "relative",
    width: "10.25em",
    border: `2px solid ${theme.palette.text.secondary}`,
    borderRadius: "100%",
  },
  imageAvatarHorizontallyCenter: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
    drawer: {
       width: drawerWidth,
        flexShrink: 0,
    },
     drawerPaper: {
       width: drawerWidth,
     },
     drawerContainer: {
       paddingTop: "100px"
     },
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
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ehab Okal Portfolio
          </Typography>
          <ThemeSwitcher />
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
          <Link activeClassName={classes.activeLink} to="/about-me" className={classes.link}>
            <Tab label={<div className={classes.title}>
              <MailIcon style={{ verticalAlign: 'middle' }} /> About Me</div>} />
          </Link>
          <Link activeClassName={classes.activeLink} to="/contact-me" className={classes.link}>
            <Tab label={<div className={classes.title}>
              <MailIcon style={{ verticalAlign: 'middle' }} /> Contact Me</div>} />
          </Link>
        </Tabs>
      </AppBar> 
       <Toolbar />*/}
      <Drawer className={classes.drawer} anchor="left" variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <div className={classes.drawerContainer}>
          <List>
            <Link to="/blogs">
              <ListItem>
                <div className={classes.imageAvatarHorizontallyCenter}>
                    <Img
                      className={classes.imageAvatar}
                      fluid={data.profileImg.childImageSharp.fluid}
                    />
                </div>
              </ListItem>
            </Link>
            <div className={classes.drawerContainer}>
            <ListItem>
              <ListItemText primary="I do computer magic 🧙‍♂️✨" />
            </ListItem>
            <Link activeClassName={classes.activeLink} className={classes.link} to="/blogs">
              <ListItem button >
                <ListItemIcon><CollectionsBookmarkIcon /> </ListItemIcon>
                <ListItemText primary="Blog posts" />
              </ListItem>
            </Link>
            <Link activeClassName={classes.activeLink} className={classes.link} to="/projects">
              <ListItem button >
                <ListItemIcon><CategoryIcon /> </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
            </Link>
            <Link activeClassName={classes.activeLink} className={classes.link} to="/contact-me">
              <ListItem button >
                <ListItemIcon><ContactMailIcon /> </ListItemIcon>
                <ListItemText primary="Contact Me" />
              </ListItem>
            </Link>
            <Link activeClassName={classes.activeLink} className={classes.link} to="/about-me">
              <ListItem button >
                <ListItemIcon><InfoIcon /> </ListItemIcon>
                <ListItemText primary="About Me" />
              </ListItem>
            </Link>
            <ListItem>
               <ThemeSwitcher/>
               <ListItemText primary="Theme switcher" />
              </ListItem>
              <ListItem>
              <ListItemIcon><GitHubIcon /> <MailIcon /> <TwitterIcon /></ListItemIcon>
              </ListItem>
            </div>
            <Divider/>       
          </List>
        </div>
      </Drawer>
    </div>
  );
}


export default Header