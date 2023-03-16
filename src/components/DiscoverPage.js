import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Import the PersonalBots and CommunityBots components
import PersonalBots from './PersonalBots';
import CommunityBots from './CommunityBots';
import NavigationBar from './NavigationBar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary,
  },
  inputRoot: {
    color: theme.palette.text.primary,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    color: theme.palette.text.primary,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.dark
  },
  toolbar: theme.mixins.toolbar,
  table: {
    minWidth: 650,
  },
}));

const DiscoverPage = () => {
  const classes = useStyles();

  const [filter, setFilter] = React.useState("")

  return (
    <div className={classes.root}>
    <NavigationBar/>
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <InputBase
            placeholder="Search…"
            classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
        />
        </div>
        <PersonalBots filter={filter}/>
        <CommunityBots filter={filter} />
    </main>
    </div>
  );
};
export default DiscoverPage
