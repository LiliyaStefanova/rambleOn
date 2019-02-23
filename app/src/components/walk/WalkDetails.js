import React, {Component} from 'react';
import CheckList from "./CheckList";

const linkList = [{link:'https://www.accuweather.com/en/gb/united-kingdom-weather', caption:'Weather'},
    {link:'http://www.nationalrail.co.uk/', caption:'Rail Transport'},
    {link:'http://www.trafficengland.com/', caption:'Traffic Information'}];


class WalkDetails extends Component{

    constructor(props){
        super(props);
        this.state = {
            hyperlinks:linkList
        };
    }

    render(){
        const {hyperlinks} = this.state;
        return (
            <div>
                {/*<CheckList items={tasks}/>*/}
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