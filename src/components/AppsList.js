import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: '66vw',
    border: '1px solid black',
  },
});

const AppsList = ({ jobsList }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" style={{ marginTop: '1rem' }}>
      <Grid item xs={11} md={8} lg={4}>
        <TableContainer className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>Application Date</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Response</TableCell>
                <TableCell>Interview</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {jobsList.map((job) => {
                return (
                  <TableRow key={job.job_app_id}>
                    <TableCell>{job.company}</TableCell>
                    <TableCell>{job.applyDate}</TableCell>
                    <TableCell>{job.salary}</TableCell>
                    <TableCell>{job.response}</TableCell>
                    <TableCell>{job.interview}</TableCell>
                    <TableCell>
                      <IconButton aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton aria-label="Edit">
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            {/* <List>
          <div className="AppsList">
            {jobsList.map((job) => {
              console.log(job);
              return <li>{job.company}</li>;
            })}
          </div>
        </List> */}
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default AppsList;
