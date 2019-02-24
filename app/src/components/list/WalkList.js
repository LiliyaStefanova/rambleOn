import React, {Component} from 'react';
import WalkCard from './WalkCard';
import { Container, Row, Col } from 'reactstrap';

const dummyList = [
    {id:1, description: 'Test walk 1', start: 'Start', end: 'End', distance: '25', date: Date.now()},
    {id:1, description: 'Test walk 1', start: 'Start', end: 'End', distance: '25', date: Date.now()}
];

class WalkList extends Component{


    constructor(props) {
        super(props);

        this.state = {
            walkList: null,
            selectedWalk:null,
            error: null,
            isLoading: false,
        };

    }

    render(){
        const { selectedWalk, error, isLoading } = this.state;
        if(error){
            return <p>Something went wrong</p>
        }
        return(
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col><WalkCard walk={dummyList[0]}/></Col>
                            <Col><WalkCard walk={dummyList[1]}/></Col>
                        </Row>
                    </Container>
                </div>
            </div>

        )
    }
}

export default WalkList;

