import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import { Provider } from "react-redux";
import "./main.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import App from "./App";
import store from "./Store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<MuiThemeProvider>
		<div className="MainContent">
			<Provider store={store}>
				<App />
			</Provider>
		</div>
	</MuiThemeProvider>,
	document.getElementById("root")
);

serviceWorker.unregister();
