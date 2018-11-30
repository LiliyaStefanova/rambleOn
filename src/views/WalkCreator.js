import React, {Component} from 'react';
import '../App.css';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class WalkCreator extends Component{

    render(){
        return(
            <div style={{'backgroundColor':'#f1f1f1'}}>Walk</div>
            // <Form>
            //     <FormGroup>
            //         <Label for="title">Title</Label>
            //         <Input type="text" name="title" id="walkTitle" placeholder="Hike title"/>
            //     </FormGroup>
            // </Form>
        )
    }
}

