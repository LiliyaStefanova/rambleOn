import React, {useEffect, useContext} from 'react';
import HikeItem from './HikeItem';
import {Col, Container, Row, Alert } from 'reactstrap';
import { Spinner } from 'reactstrap';
import HikeContext from '../../context/hike/hikeContext';

const HikeList = () => {

    const hikeContext = useContext(HikeContext);

    const { hikes, loading, getHikes, error} = hikeContext;


    useEffect(() => {
      getHikes();
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

