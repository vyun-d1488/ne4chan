import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import { Provider } from "react-redux";
import "./main.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Threads from "./Threads";
import SimpleExpansionPanel from "./ExpandedMenu";
import store from "./Store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<MuiThemeProvider>
		<div className="MainContent">
			<Provider store={store}>
				<SimpleExpansionPanel />
				<Threads />
			</Provider>
		</div>
	</MuiThemeProvider>,
	document.getElementById("root")
);

serviceWorker.unregister();
