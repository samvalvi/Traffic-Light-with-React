import React from 'react'
import Light from './Light'
import PropTypes from 'prop-types'


function TrafficLight(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="trafficTop">

                </div>
            </div>
            <div className="row">
                <Light color={props.color} updateTrafficLight={props.updateTrafficLight}/>
            </div>
            <div className="row">
                <Light color={props.color} updateTrafficLight={props.updateTrafficLight}/>
            </div>
            <div className="row">
                <Light color={props.color} updateTrafficLight={props.updateTrafficLight}/>
            </div>
        </div>
    )
}

TrafficLight.propTypes = {
    color: PropTypes.string,
    updateTrafficLight: PropTypes.func
}

export default TrafficLight
