import { createStore, applyMiddleware } from "redux";
import { Map } from "immutable";
import { createEpicMiddleware } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { mergeMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";

const fetchUserFulfilled = (payload) => ({ type: "LEARN MORE FULFILLED", payload });

const fetchUserEpic = (action$) =>
	action$.pipe(
		ofType("LEARN MORE"),
		mergeMap((action) => ajax.getJSON(`/learn`).pipe(map((response) => fetchUserFulfilled(response))))
	);

const initialState = new Map({
	Title: "Title",
	Content: "Content",
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "LEARN MORE FULFILLED":
			return state.set("Title", action.payload.Title).set("Content", action.payload.Content);
		default:
			return state;
	}
};

const epicMiddleware = createEpicMiddleware();
const enhancer = applyMiddleware(epicMiddleware);
const store = createStore(reducer, enhancer);
epicMiddleware.run(fetchUserEpic);

export default store;
