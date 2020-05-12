import { createStore, applyMiddleware } from "redux";
import { Map } from "immutable";
import { createEpicMiddleware } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { mergeMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { combineReducers } from "redux-immutable";

const fetchUserFulfilled = (payload) => ({ type: "LEARN MORE FULFILLED", payload });

const fetchUserEpic = (action$) =>
	action$.pipe(
		ofType("FETCH USER SUCCESS"),
		mergeMap((action) => ajax.getJSON(`/learn`).pipe(map((response) => fetchUserFulfilled(response))))
	);

const reducer = (
	state = Map({
		Title: "",
		Content: "",
	}),
	action
) => {
	switch (action.type) {
		case "LEARN MORE FULFILLED":
			return state.set("Title", action.payload.Title).set("Content", action.payload.Content);
		default:
			return state;
	}
};

const threadReducer = (
	state = Map({
		btnState: "Создать тред",
	}),
	action
) => {
	switch (action.type) {
		case "TOGGLE THREAD BTN":
			const currentState = state.get("btnState").toLowerCase() === "создать тред" ? "закрыть тред" : "создать тред";
			return state.set("btnState", currentState);
		default:
			return state;
	}
};

const rootReducer = combineReducers({ reducer, threadReducer });

const epicMiddleware = createEpicMiddleware();
const enhancer = applyMiddleware(epicMiddleware);
const store = createStore(rootReducer, enhancer);
epicMiddleware.run(fetchUserEpic);

console.log(JSON.stringify(store.getState()));

export default store;
