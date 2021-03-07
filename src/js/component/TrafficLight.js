import React from "react";
import Light from "./Light";
import PropTypes from "prop-types";

function TrafficLight(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="trafficTop"></div>
			</div>
			<div className="row">
				<Light
					value="red"
					color={props.color}
					setColor={props.setColor}
				/>
			</div>
			<div className="row">
				<Light
					value="yellow"
					color={props.color}
					setColor={props.setColor}
				/>
			</div>
			<div className="row">
				<Light
					value="green"
					color={props.color}
					setColor={props.setColor}
				/>
			</div>
		</div>
	);
}

TrafficLight.propTypes = {
	color: PropTypes.string,
	setColor: PropTypes.func
};

export default TrafficLight;
