import React, {Component} from 'react';
import WalkCard from './WalkCard';
import {Col, Container, Row} from 'reactstrap';
// import {splitInPairs} from '../../utils';

const dummyList = [
    { id: 1, description: 'Buckinghamshire Weekend', start: 'Tring', end: 'Wendover', distance: 25, difficulty: 3,
    startDate: Date.now(), endDate: Date.now() },
    { id: 2, description: 'South coast', start: 'Seaford', end: 'Eastbourne', distance: 28, difficulty:7,
    startDate: Date.now(), endDate: Date.now() },
    { id: 3, description: 'Surrey Hills', start: 'Guildford', end: 'Guildford', distance: 21, difficulty: 4,
      startDate: Date.now(), endDate: Date.now() },
    {id: 4, description: 'Irish Coastline', start: 'Cork', end: 'Galway', distance: 56, difficulty: 3,
      startDate: Date.now(), endDate: Date.now() },
    {
        id: 5,
        description: 'Pembrokeshire long weekend',
        start: 'New Haven',
        end: 'Old Haven',
        distance: 72,
        difficulty: 2,
        startDate: Date.now(),
        endDate: Date.now()
    }
];

class WalkList extends Component {


    constructor(props) {
        super(props);

        this.state = {
            walkList: null,
            error: null,
        };

    }

    componentDidMount(){
        //The list of walks will be fetched from the back end here
    }

    render() {
        const {error} = this.state;
        if (error) {
            return <p>Something went wrong</p>
        }
        return (
                <div>
                    <Container>
                        {dummyList.map(pair =>
                        <Row>
                            <Col><WalkCard walk={pair}/></Col>
                        </Row>)
                        }
                    </Container>
                </div>

        )
    }
}

export default WalkList;

