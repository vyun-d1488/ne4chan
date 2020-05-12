import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const style = {
	margin: 100,
	padding: 10,
	borderRadius: 0,
	textField: {
		width: 400,
	},
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			ThreadBtn: "Создать тред",
			newPostTitle: "",
			newPostText: "",
			newPostImage: "",
		};
	}

	componentDidMount() {
		fetch("/learn").then(async (response) => {
			console.log(await response.json());
			this.props.fetchUser();
		});
	}

	submit(event) {
		console.log("To send: " + this.state);
	}

	render() {
		return (
			<div>
				<Card style={style}>
					<Button size="small" color="primary" onClick={this.props.toggleThreadBtn}>
						{this.props.btnState}
					</Button>
				</Card>
				<form action="/thread" method="POST">
					<Card style={style}>
						<div>
							<TextField style={style.textField} label="Тема" id="margin-none" />
						</div>
						<div>
							<TextField style={style.textField} id="filled-multiline-static" label="Комментарии к треду" multiline rows={4} variant="filled" />
						</div>
						<CardActions>
							<Button size="small" color="primary" onClick={this.submit.bind(this)}>
								Отправить
							</Button>
							<p>{this.props.Title}</p>
						</CardActions>
					</Card>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	Title: state.get("reducer").get("Title"),
	Content: state.get("reducer").get("Content"),
	btnState: state.get("threadReducer").get("btnState"),
});

const mapDispatchToProps = (dispatch) => ({
	fetchUser: () => dispatch({ type: "FETCH USER SUCCESS" }),
	toggleThreadBtn: () => dispatch({ type: "TOGGLE THREAD BTN" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
