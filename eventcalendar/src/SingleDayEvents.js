import React from 'react';
import EventButton from './EventButton'

class SingleDayEvents extends React.Component {
    render()
    {
        const { todaysEvents } = this.props;
        if (todaysEvents.length > 0)
        {
            return <EventButton todaysEvents = {todaysEvents}/>
        }
        return(<div></div>);
        
        
    }
}

export default SingleDayEvents;