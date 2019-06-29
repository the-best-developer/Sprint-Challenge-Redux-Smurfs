/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


import {SMURF_FETCHING, SMURF_FINISH, SMURF_FAIL,
        SMURF_POST_PENDING, SMURF_POST_SUCCESS, SMURF_POST_FAIL} from '../actions/';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  message: ""
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {

    case SMURF_FETCHING:
      return Object.assign({}, state, {fetchingSmurfs: true});

    case SMURF_FINISH:
      return Object.assign({}, state, {smurfs: [...action.payload]});

    case SMURF_FAIL:
      return state;
      

    case SMURF_POST_FAIL:
      return Object.assign({}, state, {message: action.payload});

    case SMURF_POST_PENDING:
      return Object.assign({}, state, {message: ""});

    case SMURF_POST_SUCCESS:
        return Object.assign({}, state, {message: "SUCCESS!"});
    default:
    return state;
  }
};

export default smurfReducer;