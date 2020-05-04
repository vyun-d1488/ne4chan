import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const style = {
	margin: 100,
	borderRadius: 0,
	cardMedia: {
		height: 500,
		width: 400,
	},
};

class App extends Component {
	render() {
		return (
			<Card style={style}>
				<CardActionArea>
					<CardMedia style={style.cardMedia} image="https://sun9-15.userapi.com/1_kVwT8NfsVuIDum-d4zBzT1-VG6UncnBElrhQ/3itJrSQe4bA.jpg" title="Contemplative Reptile" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{this.props.Title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{this.props.Content}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Like
					</Button>
					<Button size="small" color="primary">
						Dislike
					</Button>
					<Button size="small" color="primary" onClick={this.props.onClickLearn}>
						Get server's msg
					</Button>
				</CardActions>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	Title: state.get("Title"),
	Content: state.get("Content"),
});

const mapDispatchToProps = (dispatch) => ({
	onClickLearn: () => dispatch({ type: "LEARN MORE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
