import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableSortLabel, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { Chat } from "@material-ui/icons";

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
}));


const PersonalBots = (props) => {
  const classes = useStyles();

  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState('asc')
  const [rows, setRows] = useState([
      {id: 0, name:"Bot 1 Personal", date: "01-01-2022", isPublic:true, users:1200},
      {id: 1, name:"Bot 2 Personal", date: "01-03-2022", isPublic:false, users:1},
      {id: 2, name:"Bot 3 Personal", date: "02-01-2022", isPublic:true, users:15}
   ])

  const handleSortColumnClick = (e) => {
      setSortBy(e)
      setSortOrder(sortOrder==="asc" ? 'desc' : "asc")
  }

  const sortRows = (data, sortBy, sortOrder) => {
    const sortedData = data.filter(row => row.name.toLowerCase().includes(props.filter.toLowerCase()));
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

    return sortedData
  }

  const sortedRows = sortRows(rows, sortBy, sortOrder)

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3" component="h1">
            My Bots
        </Typography>
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
                <TableCell>{row.isPublic ? row.users : 'Private'}</TableCell>
                <TableCell>
                  <IconButton aria-label="Open chat">
                        <Chat />
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <Button variant="contained" color="primary">+ Create Bot</Button>
    </div>
  );
}
export default PersonalBots
