import React, { Fragment, useState, useEffect } from "react";
import TrafficLight from "./TrafficLight";

//create your first component
export function Home() {
	const [color, setColor] = useState("");

	useEffect(() => {
		console.log(`Light: ${color}`);
	});

	return (
		<Fragment>
			<TrafficLight setColor={setColor} />
		</Fragment>
	);
}
