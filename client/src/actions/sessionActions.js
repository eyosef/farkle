import * as types from './actionTypes';

const loadUserSuccess = (user) => {
    return {
      type: types.LOAD_USER_SUCCESS,
      payload: user
    }
  }

const userError = (message) => {
    return {
      type: types.USER_ERROR,
      payload: message
    }
  }

export const signUp = (userInfo) => {
    return dispatch => {
      return fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({userInfo}),
        })
        .then(response => response.json())
        // .catch(error => console.log(`There was an error: ${error}`))
        .then(result => {
          if (result.errors) {
            dispatch(userError(result.errors))
          } else {
            localStorage.setItem('Token', result.token)
            dispatch(findUser(result.token))
            dispatch({ type: types.CLEAR_ERROR })
          }
      })
      .catch(error => console.log(error))
    }
}


  // export const signUp = (userInfo) => {
  //   return dispatch => {
  //     dispatch({type: 'CREATE_ACCOUNT'})
  //     return fetch('http://localhost:3001/api/signup', {
  //       method: 'POST',
  //       headers: {'Content-type': 'application/json'},
  //       body: JSON.stringify({user: userInfo}),
  //       })
  //       .then(userInfo => dispatch({ type: 'LOGIN_USER', userInfo: userInfo }));
  //   }
  // }

  export const findUser = (user) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/find`, {
        method: 'POST',
        headers: {
          'Authorization': user,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user })
      })
      .then(response => response.json())
      .then(result => {
        if (result.errors) {
          dispatch(userError(result.errors))
        } else {
          dispatch(loadUser(result.user))
          dispatch({ type: types.CLEAR_ERROR })
        }
      })
      .catch(error => console.log(error))
    }
  }

  export const loadUser = (userId) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/users/${userId}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(result => {
        dispatch(loadUserSuccess(result))
      })
      .catch(error => console.log(error))
    }
  }
  