import React, {Component} from 'react';

const items = [{task: 'Pack sleeping bag', status: 'checked'},
    {task: 'Load map on GPS', status: ''},
    {task: 'Buy provisions', status: ''}];

const linkList = [{link:'https://www.accuweather.com/en/gb/united-kingdom-weather', caption:'Weather'},
    {link:'http://www.nationalrail.co.uk/', caption:'Rail Transport'},
    {link:'http://www.trafficengland.com/', caption:'Traffic Information'}];


class WalkDetails extends Component{

    constructor(props){
        super(props);
        this.state = {
            tasks:items,
            hyperlinks:linkList
        };
    }

    render(){
        const {tasks, hyperlinks} = this.state;
        return (
            <div>
                <Tasklist items={tasks}/>
                <Details/>
                <People/>
                <Links links={hyperlinks}/>
                <Map/>
                <Files/>
                <Comments/>
            </div>
        )

    }

}

class Tasklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: null
        }

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
                <ul>
                    {items.map(item =>
                        <li>
                            <div key={item.keyID}>
                                <label><input type="checkbox" checked="{item.status}"/>{item.task}</label>
                                <button className="" onClick={this.onDelete}>x</button>
                            </div>
                        </li>
                    )}

                </ul>
            </div>

        );
    }

}


const Details = (props) =>
    <div>
        <span>Details go here</span>
    </div>

const People = (props) =>
    <div>
        <span>People/attendees info goes here</span>
    </div>

const Links = ({links}) => {

    return (
        <div>
            {
                links.map(l =>
                    <div><a href={l.link}>{l.caption}</a></div>)

            }
        </div>
    )

};

const Map = (props) =>
    <div>
        <span>Embedded map goes here</span>
    </div>

const Files = (props) =>
    <div>
        <span>Downloadable files go here</span>
    </div>

const Comments = (props) =>
    <div>
        <span>Comments go here</span>
    </div>


export default WalkDetails;