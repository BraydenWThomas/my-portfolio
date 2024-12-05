import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'sticky',
    top: 0,
    backgroundColor: "#1C1C22!important",
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#D8DBE2'
  },
  menuButton: {
    display: 'none!important', 
    [theme.breakpoints.down('sm')]: {
      display: 'flex!important', 
      color: 'white!important',  
      '& svg': {
        fontSize: '3rem!important', 
      },
    },
  },
  drawerList: {
    width: 250,
  },
  drawerListItem: {
    textAlign: 'center!important',  
    color: '#58A4B0!important',
    '&:not(.active):hover': {
      backgroundColor: '#81B0C0!important', 
      color: "white!important"
    },
    '&.active': {
      backgroundColor: '#58A4B0!important', 
      color: "white!important"
    },
  },
  desktopMenu: {
    display: 'flex',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none!important', 
    },
  },
  button: {
    textDecoration: 'none',
    padding: theme.spacing(1),
    fontSize: '0.9rem!important',
    transition: 'background-color 0.3s ease',
    color: 'white!important',
    '&.active': {
      backgroundColor: '#58A4B0',
    },
    '&:not(.active):hover': {
      backgroundColor: '#81B0C0', 
    },
  },
  activeLink: {
    backgroundColor: '#58A4B0', 
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    padding: theme.spacing(1),
  },
}));

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);  // Close the drawer when a link is clicked
  };

  return (
    <AppBar className={classes.appBar} color="primary">
      <Container>
        <Toolbar>
          <div className={classes.title}>Brayden</div>
          
          {/* Menu icon for mobile */}
          <IconButton className={classes.menuButton} edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuRoundedIcon />
          </IconButton>

          {/* Drawer for mobile menu */}
          <Drawer 
            anchor="right" 
            open={menuOpen} 
            onClose={handleDrawerToggle}
            PaperProps={{
              style: {
                backgroundColor: '#1C1C22', 
                height: 'auto',
              },
            }}
          >
            <List className={classes.drawerList}>
              <ListItem button component={NavLink} to="/" activeClassName={classes.activeLink} className={classes.drawerListItem} onClick={handleLinkClick}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={NavLink} to="/about" activeClassName={classes.activeLink} className={classes.drawerListItem} onClick={handleLinkClick}>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component={NavLink} to="/projects" activeClassName={classes.activeLink} className={classes.drawerListItem} onClick={handleLinkClick}>
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem button component={NavLink} to="/contact" activeClassName={classes.activeLink} className={classes.drawerListItem} onClick={handleLinkClick}>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Drawer>

          {/* Desktop Menu */}
          <div className={classes.desktopMenu}>
            <Button
              className={classes.button}
              component={NavLink}
              to="/"
              activeClassName="active" 
            >
              Home
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              to="/about"
              activeClassName="active" 
            >
              About
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              to="/projects"
              activeClassName="active" 
            >
              Projects
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              to="/contact"
              activeClassName="active" 
            >
              Contact
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
