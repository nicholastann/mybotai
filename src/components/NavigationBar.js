import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import ExploreIcon from '@material-ui/icons/Explore';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
      backgroundColor: theme.palette.background.default,
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component="a" href="/">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component="a" href="/discover">
          <ListItemIcon><ExploreIcon /></ListItemIcon>
          <ListItemText primary="Discover" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component="a" href="/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Account Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default NavigationBar
