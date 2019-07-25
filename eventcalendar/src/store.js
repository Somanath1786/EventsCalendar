import {createStore} from 'redux';

// Initial State of the Store
const initState = {
    display : false,
    selectedDate : 0,
    index : 0,
    events:[]
    // events : [{
    //     "_id": "ZZzRHiIXf",
    //     "title": "Bake Sale",
    //     "date": "2",
    //     "time": "9am - 11am",
    //     "building": "32",
    //     "event_type": "fundraising",
    //     "vp": "Gaurav Sareen",
    //     "designated_charity": "Washington Autism Alliance",
    //     "created_at": "2019-07-22T19:15:53.332Z",
    //     "updated_at": "2019-07-22T19:15:53.332Z",
    //     "__v": 0
    // },
    // {
    //     "_id": "To-XkOR_Q",
    //     "title": "Auction",
    //     "date": "5",
    //     "time": "9am - 11am",
    //     "building": "32",
    //     "event_type": "fundraising",
    //     "vp": "Gaurav Sareen",
    //     "designated_charity": "Washington Autism Alliance",
    //     "created_at": "2019-07-24T17:34:11.504Z",
    //     "updated_at": "2019-07-24T17:34:11.504Z",
    //     "__v": 0
    // },
    // {
    //     "_id": "dNBOpiBuh",
    //     "title": "Make Goody Bags",
    //     "date": "6",
    //     "time": "11:30am - 12:30pm",
    //     "building": "32",
    //     "event_type": "Volunteering",
    //     "vp": "Gaurav",
    //     "designated_charity": "Birthday Dreams",
    //     "created_at": "2019-07-24T20:47:42.466Z",
    //     "updated_at": "2019-07-24T20:47:42.466Z",
    //     "__v": 0
    // },
    // {
    //     "_id": "ysoprO4wL",
    //     "title": "Test",
    //     "date": "3",
    //     "time": "9:30am-10:30am",
    //     "building": "32",
    //     "event_type": "Fund raising",
    //     "vp": "Gaurav",
    //     "designated_charity": "testing",
    //     "created_at": "2019-07-24T22:27:13.394Z",
    //     "updated_at": "2019-07-24T22:27:13.394Z",
    //     "__v": 0
    // }]

}

export function calendarReducer(state = initState, action=[])
{
    switch(action.type)
    {
        case 'POPULATE' :
            return Object.assign({}, state, {
                events: action.eventData
            });
        
        default :
        return state;
    }
}

const store = createStore(calendarReducer);

export function populate(events)
{
    return {
        type : 'POPULATE',
        eventData : events.response
    }
}

export default store;