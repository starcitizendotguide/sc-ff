import React from 'react';

import humanizeDuration from 'humanize-duration';
import './../styles/EventCard.css';

const generateCardFooter = function(props) {

    let startDate = new Date(props.start);
    let endDate = new Date(props.end);
    let now = new Date(); 
    

    if(endDate.getTime() < now.getTime()) {
        return (<span>You missed the event :(</span>)
    } else if(startDate.getTime() > now.getTime()) {
        if(props.speculation) {
            return <span>Event probably starts in ~{humanizeDuration(now.getTime() - startDate.getTime(), { units: ["mo", "w"], round: true })}</span>
        } else {
            return <span>Event starts in {humanizeDuration(now.getTime() - startDate.getTime(), { units: ["mo", "d", "h"], round: true })}</span>
        }
    }

    return <>
        <div class="btn-group footer-btn" role="group" aria-label="Basic example">
            <a href={props.signupLink} className="btn btn-outline-primary">Sign Up</a>
            <a href={props.eventLink} className="btn btn-outline-secondary">Event Page</a>
        </div>
    </>;
}


const EventCard = (props) => {

    return (
        <div className="col col-sm-12 col-md-6 col-lg-4 card-column">
            <div className="card">
                <div className="card-body h-100">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="cardText">{props.description}</p>
                </div>
                <div className="card-footer text-center text-muted">
                    {generateCardFooter(props)}
                </div>
            </div>
        </div>
    );
};

export default EventCard;