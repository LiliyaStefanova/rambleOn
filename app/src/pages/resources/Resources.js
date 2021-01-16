import React from 'react';
import {Card, CardBody, CardTitle, CardText, CardDeck} from 'reactstrap';
import './index.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass, faMapMarked, faSubway, faCloudSunRain, faHiking} from '@fortawesome/free-solid-svg-icons';

library.add(faCompass, faMapMarked, faSubway, faCloudSunRain, faHiking);

const Resources = () =>
            <div>
            <CardDeck>
                <Card>
                    <CardBody>
                        <FontAwesomeIcon icon="subway" className="resourceIcon" size="6x"/>
                        <CardTitle>Transport</CardTitle>
                        <CardText>Plan your journey</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <FontAwesomeIcon icon="cloud-sun-rain" className="resourceIcon" size="6x"/>
                        <CardTitle>Weather</CardTitle>
                        <CardText>Check the forecast</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <FontAwesomeIcon icon="map-marked" className="resourceIcon" size="6x"/>
                        <CardTitle>Navigation</CardTitle>
                        <CardText>Find your way</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <FontAwesomeIcon icon="hiking" className="resourceIcon" size="6x"/>
                        <CardTitle>Equipment</CardTitle>
                        <CardText>Equipment checklist</CardText>
                    </CardBody>
                </Card>
            </CardDeck>
            </div>

export default Resources;