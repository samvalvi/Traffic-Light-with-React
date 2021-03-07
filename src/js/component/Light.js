import React from "react";
import PropTypes from "prop-types";

function Light(props) {
	return (
		<div
			className="circle"
			value={props.value}
			onClick={() => props.setColor(props.value)}></div>
	);
}

Light.propTypes = {
	color: PropTypes.string,
	setColor: PropTypes.func,
	value: PropTypes.string
};

export default Light;
