import React, {useState, useEffect} from 'react';
import HikeItem from './HikeItem';
import {Col, Container, Row, Alert } from 'reactstrap';
import { Spinner } from 'reactstrap';
import axios from 'axios';

const PATH_BASE = 'http://localhost:8080';
const PATH_GRAPHQL = '/rambleOn';

const HikeList = () => {

    const [hikes, setHikes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleError = (error) => {
        this.setError(error);
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

    const request = (query) => {
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

    useEffect(() => {
        const query = `query{walks{id,name,startLocation,endLocation,startDate,endDate,distance,difficulty}}`;
        //The list of walks will be fetched from the back end here
        request(query)
        .then((result) => {
            const walkList = result.data.walks;
            setHikes(walkList);
            setLoading(false);

        }).catch(err => setError(err));
    }, []);

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
                        hikes.map( hike =>                       
                        <Row style={{marginBottom: 10}}>
                            <Col><HikeItem hike={hike}/></Col>
                        </Row>)
                        }
                    </Container>
                    }
                </div>

        )
    }

export default HikeList;

