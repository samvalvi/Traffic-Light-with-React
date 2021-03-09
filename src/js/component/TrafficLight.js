import React, { Fragment } from "react";
import Light from "./Light";
import PropTypes from "prop-types";

function TrafficLight({ setColor }) {
	return (
		<Fragment>
			<div className="trafficTop"></div>
			<div className="container">
				<div className="row">
					<Light value="red" setColor={setColor} />
				</div>
				<div className="row">
					<Light value="yellow" setColor={setColor} />
				</div>
				<div className="row">
					<Light value="green" setColor={setColor} />
				</div>
			</div>
		</Fragment>
	);
}

TrafficLight.propTypes = {
	setColor: PropTypes.func
};

export default TrafficLight;
