import React from "react";
import {Counter} from "./counter";

//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid d-flex justify-content-center bg-black">
		<Counter value={<span class="fa fa-clock"></span>} />
		<Counter value={Math.floor(props.time / 1000000) % 100000} />
		<Counter value={Math.floor(props.time / 100000) % 10000} />
		<Counter value={Math.floor(props.time / 10000) % 10000} />
		<Counter value={Math.floor(props.time / 1000) % 1000} />
		<Counter value={Math.floor(props.time / 100) % 100} />
		<Counter value={Math.floor(props.time / 10) % 10} />
		<Counter value={Math.floor(props.time % 10)} />
		</div>
	);
};

export default Home;
