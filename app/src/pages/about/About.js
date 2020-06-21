import React, {Component} from 'react';
import {Button, Card, CardBody, Collapse} from 'reactstrap';
import './index.css';
import ContactForm from "./ContactForm";

const starUrl = 'https://ghbtns.com/github-btn.html?user=liliyastefanova&repo=prep-your-walk&type=star&count=true&size=large';
const forkUrl = 'https://ghbtns.com/github-btn.html?user=liliyastefanova&repo=prep-your-walk&type=fork&count=true&size=large';
const followUrl = 'https://ghbtns.com/github-btn.html?user=liliyastefanova&type=follow&count=true&size=large';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.toggleFeedback = this.toggleFeedback.bind(this);
        this.toggleContribute = this.toggleContribute.bind(this);
        this.state = {
            collapseFeedback: false,
            collapseContribute: false
        };
    }

    toggleFeedback() {
        this.setState({collapseFeedback: !this.state.collapseFeedback});
    }

    toggleContribute(){
        this.setState({collapseContribute: !this.state.collapseContribute})
    }

    render() {
        return (
            <div>
                <Button color="primary" size="lg" block onClick={this.toggleFeedback} style={{'margin-bottom': '5px'}}>
                    Feedback & Questions
                </Button>
                <Collapse isOpen={this.state.collapseFeedback}>
                <Card className='card'>
                    <CardBody>
                        <ContactForm/>
                    </CardBody>
                </Card>
                </Collapse>
                <Button color="primary" size="lg" block onClick={this.toggleContribute} style={{'margin-bottom': '5px'}}>
                    Contribute
                </Button>
                <Collapse isOpen={this.state.collapseContribute}>
                <Card className='card'>
                    <CardBody>
                        <div style={{'margin': 'auto'}}>
                        <iframe  title='ghStar' src={starUrl} frameBorder='0' scrolling='0' width='160px' height='30px'/>
                        <iframe  title='ghFork' src={forkUrl} frameBorder='0' scrolling='0' width='160px' height='30px'/>
                        <iframe  title='ghFollow' src={followUrl} frameBorder='0' scrolling='0' width='250px' height='30px'/>
                        </div>
                    </CardBody>
                </Card>
                </Collapse>
            </div>
        )
    }
}


export default Contact;
