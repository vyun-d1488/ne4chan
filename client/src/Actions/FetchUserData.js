export function usersFetchDataSuccess(users) {
	alert(users);
	return {
		type: "FETCH_DATA_SUCCESS",
	};
}

export default function userFetchData(url) {
	return (dispatch) => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res;
			})
			.then((res) => res.json())
			.then((users) => dispatch(usersFetchDataSuccess(users)));
	};
}
