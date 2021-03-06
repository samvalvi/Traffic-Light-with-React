import React, {Fragment, useState} from "react";
import TrafficLight from "./TrafficLight";

//create your first component
export function Home() {
    const [color, setColor] = useState('')

    const updateTrafficLight = (event) => {
        setColor(
            color = event.name.value
        )
    }

	return (
        <Fragment>
            <TrafficLight color={color} updateTrafficLight={updateTrafficLight}/>
        </Fragment>
	);
}
