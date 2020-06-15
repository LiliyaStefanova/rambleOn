import React, {Component} from 'react';
import WalkCard from './WalkCard';
import {Col, Container, Row, Alert } from 'reactstrap';
import { Spinner } from 'reactstrap';
import {splitInPairs} from '../../utils';
import axios from 'axios';

const PATH_BASE = 'http://localhost:8080';
const PATH_GRAPHQL = '/rambleOn';

class MyWalks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            walkList: [],
            pairs:[],
            error: null,
            loading: true
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
            const walkList = result.data.walks;
            this.setState({walkList: walkList, loading: false});

        }).catch(err => this.setState({error: err}));
   
    }

    render(){
        const {pairs, loading, error} = this.state;
        if (error) {
            return <Alert color='danger'>Something went wrong</Alert>
        }
        return (
                <div>
                    {loading
                    ?<div>
                          <p>Loading Your Hikes...</p>
                          <Spinner type="grow" color="primary" />
                          <Spinner type="grow" color="secondary" />
                          <Spinner type="grow" color="dark" />
                    </div>:
                    <Container >{
                        this.state.walkList.map( walk =>                       
                        <Row style={{marginBottom: 10}}>
                            <Col><WalkCard walk={walk}/></Col>
                        </Row>)
                        }
                    </Container>
                    }
                </div>

        )
    }
}


export default MyWalks;

