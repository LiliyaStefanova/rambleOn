import {Table} from 'reactstrap';
import React from 'react';

const WalkCard = ({walk}) => {
    const {desc, start, end, distance, date} = walk;
    return (
        <div>
            <h2>{desc}</h2>
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
            </Table>
        </div>
    );
};

export default WalkCard;