import {Table} from 'reactstrap';
import React from 'react';
import './index.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarker, faCalendar} from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarker, faCalendar)

const WalkCard = ({walk}) => {
    const {description, start, end, distance, date} = walk;
    return (
        <div className="walkCard">
            <h2>{description}</h2>
            <Table>
                <tr>
                    <th>Start</th>
                    <td>{start}</td>
                </tr>
                <tr>
                    <th>End</th>
                    <td>{end}</td>
                </tr>
                <tr>
                    <th>Distance</th>
                    <td>{distance}</td>
                </tr>
                <tr>
                    <th>Date</th>
                    <td>{date}</td>
                </tr>
                <tr>Difficulty Level</tr>
            </Table>
        </div>
    );
};

export default WalkCard;