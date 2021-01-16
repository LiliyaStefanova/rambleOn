import React, {useState} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarker, faCalendar, faTasks} from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarker, faCalendar, faTasks);
const linkList = [{link:'https://www.accuweather.com/en/gb/united-kingdom-weather', caption:'Weather'},
    {link:'http://www.nationalrail.co.uk/', caption:'Rail Transport'},
    {link:'http://www.trafficengland.com/', caption:'Traffic Information'}];


const HikeItemDetails = () => {

    // const [hyperlinks, setHyperlinks] = useState(linkList);
    const [hyperlinks] = useState(linkList);

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



// const Details = () =>
//     <div>
//         <span>Details go here</span>
//     </div>

// const People = () =>
//     <div>
//         <span>People/attendees info goes here</span>
//     </div>

// const Links = ({links}) => {

//     return (
//         <div>
//             {
//                 links.map(l =>
//                     <div><a href={l.link}>{l.caption}</a></div>)

//             }
//         </div>
//     )

// };

// const Map = (props) =>
//     <div>
//         <span>Embedded map goes here</span>
//     </div>

// const Files = (props) =>
//     <div>
//         <span>Downloadable files go here</span>
//     </div>

// const Comments = (props) =>
//     <div>
//         <span>Comments go here</span>
//     </div>


export default HikeItemDetails;