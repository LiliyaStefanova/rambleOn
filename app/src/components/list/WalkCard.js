import React from 'react';
import {Table} from 'reactstrap';
import './index.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faMapMarker, faCalendar} from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarker, faCalendar)

const WalkCard = ({walk} = walk) => {
    const {name, startLocation, endLocation, distance, difficulty, startDate, endDate } = walk;
    return (
        <div className="walkCard">
            <h2>{name}</h2>
            <Table>
              <tbody>
                <tr>
                    <th>Start</th>
                    <td>{startLocation}</td>
                    <th>End</th>
                    <td>{endLocation}</td>
                </tr>
                <tr>
                    <th>Distance</th>
                    <td>{distance}</td>
                    <th>Difficulty</th>
                    <td>{difficulty}</td>
                </tr>
                <tr>
                    <th>Start Date</th>
                    <td>{startDate}</td>
                  <th>End Date</th>
                  <td>{endDate}</td>
                </tr>
              </tbody>
            </Table>
        </div>
    );
};

export default WalkCard;
