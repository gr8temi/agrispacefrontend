import { FETCH_INFO, SET_ACTIVITY } from "./types";
import request from "../request"

const setinfo = payload => ({
  type: FETCH_INFO,
  payload
});

const setActivity = payload => ({
  type: SET_ACTIVITY,
  payload
});

export const fetchInfo =() => async dispatch => {
	try{	
		dispatch(setActivity(true));
		const information = await request.get();
		dispatch(setinfo(information.data.record));
		dispatch(setActivity(false));
	}
	catch(err){
		dispatch(setActivity(false))		
	}
	

};
