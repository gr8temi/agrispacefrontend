import moxios from "moxios";
import axios from 'axios'

import * as actions from "../infoActions";
import thunk from "redux-thunk";
import { FETCH_INFO, SET_ACTIVITY } from "../types";

import configureMockStore from "redux-mock-store";

jest.mock("../../request",()=>({
    get:()=>({data:{record:[]}})
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("it creates an action to start the fetch of categories ", () => {


  const store = mockStore({});

  const expectedActions = [SET_ACTIVITY,FETCH_INFO ,SET_ACTIVITY];
  store.dispatch(actions.fetchInfo()).then(() => {
    const dispatchedActions = store.getActions();
    const actionTypes = dispatchedActions.map(action => action.type);
    expect(actionTypes).toEqual(expectedActions);
  }).catch((err)=>{
    fail('should not catch');
  });
});
