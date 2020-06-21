import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const items = [{task: 'Pack sleeping bag', status: 'checked'},
    {task: 'Load map on GPS', status: ''},
    {task: 'Buy provisions', status: ''}];

class CheckList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: items
        };

        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
    };


    onAdd(task) {
        const taskEntry = {keyID: task.hashCode(), task, checked: ""};
        const updatedTasks = this.state.tasks.push(taskEntry);
        this.setState({tasks: updatedTasks})
    }

    onDelete(id) {

        const {tasks} = this.state;
        const isNotId = item => item.keyID !== id;
        const updatedTasks = tasks.filter(isNotId);
        this.setState({tasks: updatedTasks});
    }

    render() {
        return (
            <div className="container">
                <ListGroup>
                    {this.state.tasks.map(item =>
                        <ListGroupItem>
                            <div key={item.keyID}>
                                <label><input type="checkbox" checked="{item.status}"/>{item.task}</label>
                                <button className="" onClick={this.onDelete}>x</button>
                            </div>
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>

        );
    }

}

export default CheckList;
