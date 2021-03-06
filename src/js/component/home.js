import React, {Fragment, useState} from "react";
import TrafficLight from "./TrafficLight";

//create your first component
function Home() {
    const [color, setColor] = useState('');

    const updateTrafficLight = event => {
        setColor(
            color = e.target.value
        )
    }

    useEffect(() => {
        Console.log(color);
    })

	return (
        <Fragment>
            <TrafficLight color={color} updateTrafficLight={updateTrafficLight}/>
        </Fragment>
	);
}

export default Home;