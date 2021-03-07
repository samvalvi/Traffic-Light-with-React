import React, { Fragment, useState, useEffect } from "react";
import TrafficLight from "./TrafficLight";

//create your first component
function Home() {
	const [color, setColor] = useState("");

	useEffect(() => {
		console.log(color);
	});

	return (
		<Fragment>
			<TrafficLight color={color} setColor={setColor} />
		</Fragment>
	);
}

export default Home;
