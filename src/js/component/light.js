import React from "react";
import PropTypes from "prop-types";

export function Light({ className, setColor, value }) {
	return (
		<div
			className={className}
			id={value}
			value={value}
			onClick={() => setColor(value)}></div>
	);
}

Light.propTypes = {
	className: PropTypes.string,
	setColor: PropTypes.func,
	value: PropTypes.string
};
