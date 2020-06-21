import React, {useState} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const items = [{task: 'Pack sleeping bag', status: 'checked'},
    {task: 'Load map on GPS', status: ''},
    {task: 'Buy provisions', status: ''}];

const CheckList = (props) => {

    const [tasks, setTasks] = useState([]);


     const onAdd = (task) => {
        const taskEntry = {keyID: task.hashCode(), task, checked: ""};
        const updatedTasks = tasks.push(taskEntry);
        setTasks(updatedTasks);
    }

    const onDelete = (id) => {
        const isNotId = item => item.keyID !== id;
        const updatedTasks = tasks.filter(isNotId);
        setTasks(updatedTasks);
    }

    return (
            <div className="container">
                <ListGroup>
                    {tasks.map(item =>
                        <ListGroupItem>
                            <div key={item.keyID}>
                                <label><input type="checkbox" checked="{item.status}"/>{item.task}</label>
                                <button className="" onClick={onDelete}>x</button>
                            </div>
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>

        );

}

export default CheckList;
