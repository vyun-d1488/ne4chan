import React, { Component } from "react";

class Threads extends Component {
	constructor() {
		super();
	}
	// componentDidMount() {
	// 	fetch("/thread").then(async (response) => {
	// 		// console.log(JSON.stringify(await response.json()) + "THREADS");
	// 		if (response.ok) {
	// 			this.setState({ s: await response.json() });
	// 		}
	// 	});
	// }
	render() {
		const { threadList } = this.state;
		return (
			<div>
				<p>Works</p>
				{this.state}
			</div>
		);
	}
}

export default Threads;
