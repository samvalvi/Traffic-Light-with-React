import React, { Fragment } from "react";
import Light from "./Light";
import PropTypes from "prop-types";

function TrafficLight(props) {
	return (
		<Fragment>
			<div className="trafficTop"></div>
			<div className="container">
				<div className="row">
					<Light
						className="red"
						value="red"
						setColor={props.setColor}
					/>
				</div>
				<div className="row">
					<Light value="yellow" setColor={props.setColor} />
				</div>
				<div className="row">
					<Light value="green" setColor={props.setColor} />
				</div>
			</div>
		</Fragment>
	);
}

TrafficLight.propTypes = {
	setColor: PropTypes.func
};

export default TrafficLight;
