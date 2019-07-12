import React, {Component} from 'react';
import WalkCard from './WalkCard';
import {Col, Container, Row} from 'reactstrap';
import {splitInPairs} from '../../utils';
import axios from 'axios';

// const dummyList = [
//     { id: 1, description: 'Buckinghamshire Weekend', start: 'Tring', end: 'Wendover', distance: 25, difficulty: 3,
//     startDate: Date.now(), endDate: Date.now() },
//     { id: 2, description: 'South coast', start: 'Seaford', end: 'Eastbourne', distance: 28, difficulty:7,
//     startDate: Date.now(), endDate: Date.now() },
//     { id: 3, description: 'Surrey Hills', start: 'Guildford', end: 'Guildford', distance: 21, difficulty: 4,
//       startDate: Date.now(), endDate: Date.now() },
//     {id: 4, description: 'Irish Coastline', start: 'Cork', end: 'Galway', distance: 56, difficulty: 3,
//       startDate: Date.now(), endDate: Date.now() },
//     {
//         id: 5,
//         description: 'Pembrokeshire long weekend',
//         start: 'New Haven',
//         end: 'Old Haven',
//         distance: 72,
//         difficulty: 2,
//         startDate: Date.now(),
//         endDate: Date.now()
//     }
// ];

const PATH_BASE = 'http://localhost:8080';
const PATH_GRAPHQL = '/rambleOn';

class MyWalks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            walkList: [],
            error: null,
        };
        // this.getWalks = this.getWalks.bind(this);
        this.request = this.request.bind(this);
    }

    handleError(error){
        this.setState({ error });
    }

    // handleResponse(response){
    //     const payload = response.data;
    //     console.log(`Result looks like: ${JSON.stringify(payload)}`);
    //     const walkList = result.data.walks;
    //     this.setState({walkList: walkList});
    // }

    // getWalks(){
    //     const query = `query{walks{id,name,startLocation,endLocation,startDate,endDate,distance,difficulty}}`;
    //     return this.request(query);
    // }

    request(query){
        const finalQuery = {query: query}
        console.log(`Final query looks like: ${JSON.stringify(finalQuery)}`);
        return axios({
            method: 'post',
            url: `${PATH_BASE}${PATH_GRAPHQL}`,
            headers: { 'Content-Type': 'application/json' },
            data: finalQuery
        }).then(response =>{ return response.data;})
          .catch(error => {return error;});
    }

    componentDidMount() {
        const query = `query{walks{id,name,startLocation,endLocation,startDate,endDate,distance,difficulty}}`;
        //The list of walks will be fetched from the back end here
        this.request(query).then((result) => {
            console.log(`Result looks like: ${JSON.stringify(result)}`);
            const walkList = result.data.walks;
            this.setState({walkList: walkList});
        })
        console.log(`Walk list after component was mounted: ${this.state.walkList} `)
    }

    render(){
        const {walkList, error} = this.state;
        const pairs = [];
        console.log(`Pairs looks like: ${pairs}`);
        if (error) {
            return <p>Something went wrong</p>
        }
        return (
                <div>
                    <Container>{
                        pairs.map(pair =>
                        <Row>
                            <Col><WalkCard walk={pair[0]}/></Col>
                            <Col><WalkCard walk={pair[1]}/></Col>
                        </Row>)
                        }
                    </Container>
                </div>

        )
    }
}

export default MyWalks;

