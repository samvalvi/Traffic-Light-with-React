import React from "react";
import PropTypes from "prop-types";

function Light({ setColor, value }) {
	return (
		<div
			className="light-circle"
			id={value}
			value={value}
			onClick={() => setColor(value)}></div>
	);
}

Light.propTypes = {
	setColor: PropTypes.func,
	value: PropTypes.string
};

export default Light;
