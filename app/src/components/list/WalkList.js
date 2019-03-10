import React, {Component} from 'react';
import WalkCard from './WalkCard';
import {Col, Container, Row} from 'reactstrap';
import {splitInPairs} from '../../utils';

const dummyList = [
    {id: 1, description: 'Buckinghamshire Weekend', start: 'Tring', end: 'Wendover', distance: '25', date: Date.now()},
    {id: 2, description: 'South coast', start: 'Seaford', end: 'Eastbourne', distance: '28', date: Date.now()},
    {id: 3, description: 'Surrey Hills', start: 'Guildford', end: 'Guildford', distance: '21', date: Date.now()},
    {id: 4, description: 'Irish Coastline', start: 'Cork', end: 'Galway', distance: '56', date: Date.now()},
    {
        id: 5,
        description: 'Pembrokeshire long weekend',
        start: 'New Haven',
        end: 'Old Haven',
        distance: '72',
        date: Date.now()
    },
    {id: 6, description: 'Unknown', start: 'Lovely Place', end: 'New place', distance: '18', date: Date.now()},
    {id: 7, description: 'Highlands', start: 'Inverness', end: 'Fort Augustus', distance: '22', date: Date.now()}
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
        // const pairsList = splitInPairs(dummyList);
        if (error) {
            return <p>Something went wrong</p>
        }
        return (
                <div>
                    <Container>
                        {/*{pairsList.map(pair =>*/}
                        {/*<Row>*/}
                            {/*<Col><WalkCard walk={pair[0]}/></Col>*/}
                            {/*<Col><WalkCard walk={pair[1]}/></Col>*/}
                        {/*</Row>)*/}
                        {/*}*/}
                    </Container>
                </div>

        )
    }
}

export default WalkList;

