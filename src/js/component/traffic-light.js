import React, { useState, useEffect, Fragment } from "react";
import { Light } from "./light";

export function TrafficLight() {
	const [color, setColor] = useState("");

	useEffect(() => {
		console.log(`Light: ${color}`);
	});

	return (
		<Fragment>
			<div className="trafficTop"></div>
			<div className="container">
				<div className="row">
					<Light
						value="red"
						className={color === "red" ? "selected" : null}
						color={color}
						setColor={setColor}
					/>
				</div>
				<div className="row">
					<Light
						value="yellow"
						className={color === "yellow" ? "selected" : null}
						color={color}
						setColor={setColor}
					/>
				</div>
				<div className="row">
					<Light
						value="green"
						className={color === "green" ? "selected" : null}
						color={color}
						setColor={setColor}
					/>
				</div>
			</div>
		</Fragment>
	);
}
