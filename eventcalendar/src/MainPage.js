import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Calendar from './Calendar';
import { connect } from 'react-redux';
import { populate } from './store';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {
        alignItems: 'center',
      }
  });
  
  function getEventsFromServer(dispatch)
  {
    var url = 'http://localhost:5000/api/events';
    fetch(url,{
      method: 'GET', // or 'PUT'
      mode: 'cors',      
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response =>dispatch(populate(response)))
    .catch(error => console.error('Error:', error));
  }

  function MainPage({dispatch}) {
    const classes = useStyles();
    
    getEventsFromServer(dispatch);

    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Give Calendar 2019
            </Typography>
          </Toolbar>
        </AppBar>
        <Calendar />
      </div>
    );
  }

  function mapStateToProps(state) {
    return{}
  }

  

export default connect(
  mapStateToProps,
  null
)(MainPage);