import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const style = {
	width: "100%",
	Main: {
		width: "100%",
	},
	Card: {
		boxShadow: "0 0 0 0",
	},
};

class App extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		fetch("/learn").then(async (response) => {
			console.log(await response.json());
			this.props.fetchUser();
		});
	}

	submit() {
		let formData = new FormData();
		formData.append("threadTitle", this.state.newPostTitle);
		formData.append("threadText", this.state.newPostText);
		fetch("thread", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	}

	render() {
		return (
			<div style={style.Main}>
				<form action="/thread" method="POST" className="createThreadForm">
					<Card style={style.Card}>
						<div>
							<TextField
								style={style}
								label="Тема"
								id="margin-none"
								onChange={(event) => {
									this.setState({
										newPostTitle: event.target.value,
									});
								}}
							/>
						</div>
						<div>
							<TextField
								style={style}
								id="filled-multiline-static"
								label="Комментарии к треду"
								multiline
								rows={4}
								variant="filled"
								onChange={(event) => {
									this.setState({
										newPostText: event.target.value,
									});
								}}
							/>
						</div>
						<CardActions>
							<Button size="small" color="primary" onClick={this.submit.bind(this)}>
								Отправить
							</Button>
						</CardActions>
					</Card>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	Title: state.get("Title"),
	Content: state.get("Content"),
});

const mapDispatchToProps = (dispatch) => ({
	fetchUser: () => dispatch({ type: "FETCH USER SUCCESS" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
