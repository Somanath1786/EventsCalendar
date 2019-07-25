import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const styles = {
    button: {
      maxWidth: 75,      
      fontSize : '10px',      
    },
}

class EventButton extends React.Component{
    render()
    {
        const {classes, todaysEvents} = this.props;
        return(
            <Typography>
                <Button size="small" className={classes.button} >                
                    {todaysEvents[0].title}                
                </Button>
            </Typography>    
        )
    }
}

export default withStyles(styles)(EventButton)