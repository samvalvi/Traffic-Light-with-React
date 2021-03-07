import React from "react";
import PropTypes from "prop-types";

function Light(props) {
	return (
		<div
			className="light-circle"
			id={props.value}
			value={props.value}
			onClick={() => props.setColor(props.value)}></div>
	);
}

Light.propTypes = {
	setColor: PropTypes.func,
	value: PropTypes.string
};

export default Light;
