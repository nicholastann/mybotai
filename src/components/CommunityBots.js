import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  FormControlLabel, Switch, Button, IconButton, TableSortLabel
} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { Chat, Bookmark } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  table: {
    minWidth: 650,
    backgroundColor: theme.palette.background.default
  },
  bookmarkButton: {
    marginRight: theme.spacing(1),
  },
}));


const CommunityBots = (props) => {
  const classes = useStyles();
  const [showBookmarked, setShowBookmarked] = useState(false);

  const handleToggle = () => {
    setShowBookmarked(!showBookmarked);
    sortRows(rows, sortBy, sortOrder, !showBookmarked)
  }

  const handleBookmarkToggle = (id) => {
    const newRows = [...rows];
    const index = newRows.findIndex(row => row.id === id)
    newRows[index].bookmarked = !newRows[index].bookmarked;
    sortRows(newRows, sortBy, sortOrder, showBookmarked)
  }

  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState('asc')
  const [rows, setRows] = useState([
      {id: 0, name:"Bot 1 Personal", date: "01-01-2022", bookmarked:true, users:1200},
      {id: 1, name:"Bot 2 Personal", date: "01-03-2022", bookmarked:false, users:1},
      {id: 2, name:"Bot 3 Personal", date: "02-01-2022", bookmarked:true, users:15}
   ])

  const handleSortColumnClick = (e) => {
      setSortBy(e)
      const newSortOrder = sortOrder==="asc" ? 'desc' : "asc"
      setSortOrder(newSortOrder)
      sortRows(rows, e, newSortOrder, showBookmarked)
  }

  const sortRows = (data, sortBy, sortOrder, showBookmarked) => {
    let sortedData = data.filter(row => row.name.toLowerCase().includes(props.filter.toLowerCase()));
    if (showBookmarked) sortedData = sortedData.filter(row=> row.bookmarked)

    sortedData.sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (valueA === valueB) return 0;
        if (sortOrder === 'asc') {
            if (valueA < valueB) return -1;
            return 1;
        }
        else {
            if (valueA > valueB) return -1;
            return 1;
        }
    });

    setSortedRows(sortedData)
  }

  const [sortedRows, setSortedRows] = useState(rows)

  useEffect(() => {
    sortRows(rows, sortBy, sortOrder, showBookmarked);
  }, [props.filter, sortBy, sortOrder, showBookmarked]);


  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3" component="h1">
            Community Bots
        </Typography>
        <FormControlLabel
          control={<Switch checked={showBookmarked} onChange={handleToggle} />}
          label="Show Bookmarked Bots Only"
        />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortBy === "name"}
                  direction={sortOrder}
                  onClick={() => handleSortColumnClick("name")}
                 >
                    Bot Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === "date"}
                  direction={sortOrder}
                  onClick={() => handleSortColumnClick("date")}
                 >
                    Date Created
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === "users"}
                  direction={sortOrder}
                  onClick={() => handleSortColumnClick("users")}
                 >
                    Users
                </TableSortLabel>
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.users}</TableCell>
                <TableCell>
                  <IconButton aria-label="Open chat">
                        <Chat />
                    </IconButton>
                    <IconButton aria-label="Bookmark">
                        <Bookmark
                            onClick={() => handleBookmarkToggle(row.id)}
                            color={row.bookmarked ? 'secondary' : 'default'}
                        />
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default CommunityBots
