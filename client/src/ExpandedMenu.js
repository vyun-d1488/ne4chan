import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import App from "./App";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "500px",

		boxShadow: "0 0 0 0",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

export default function SimpleExpansionPanel() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography>Создать тред</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className="ExpansionPanelDetails">
					<App className={classes.heading} />
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}
