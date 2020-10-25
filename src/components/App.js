import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/App.css';

import events from './../data/events.json';

import EventCard from './../components/EventCard';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {events.map((event, index) => <EventCard key={event.name} {...event} /> )}
                </div>
            </div>
        );
    }
  
}

