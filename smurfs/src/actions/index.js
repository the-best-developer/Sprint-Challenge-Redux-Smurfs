/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';
export const SMURF_FETCHING = 'SMURF_FETCHING';
export const SMURF_FINISH = 'SMURF_FINISH';
export const SMURF_FAIL = 'SMURF_FAIL';

export const SMURF_POST_PENDING = 'SMURF_POST_PENDING';
export const SMURF_POST_SUCCESS = 'SMURF_POST_SUCCESS';
export const SMURF_POST_FAIL = 'SMURF_POST_FAIL';

export const addSmurf = (name, age, height) => dispatch => {
    
  dispatch({type: SMURF_POST_PENDING, payload: true });
  axios
  .post('http://localhost:3333/smurfs', (
    { 
      name: name,
      age: age,
      height: height
    }
  ))
  .then(({data}) => {
    dispatch({type: SMURF_POST_SUCCESS, payload: data.payload});
  })
  .catch(err => {
    dispatch({type: SMURF_POST_FAIL, payload: err});
  });
};

export const getSmurfList = () => dispatch => {
  dispatch({type: SMURF_FETCHING, payload: true});
  axios
  .get('http://localhost:3333/smurfs')
  .then(({data}) => {
      dispatch({type: SMURF_FINISH, payload: data});
  })
  .catch(err => {
      dispatch({type: SMURF_FAIL, payload: err});
  });
};

  export default getSmurfList;