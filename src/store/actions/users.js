export const loadUsersRequest = email => ({
  type: 'LOAD_USERS_REQUEST',
  payload: {
    email,
  },
});

export const loadUsersSuccess = data => ({
  type: 'LOAD_USERS_SUCCESS',
  payload: {
    data,
  },
});

export const loadUsersFailure = () => ({
  type: 'LOAD_USERS_FAILURE',
});

//insert
export const insertUsersRequest = data => ({
  type: 'INSERT_USERS_REQUEST',
  payload: {
    data,
  },
});

export const insertUsersSuccess = data => ({
  type: 'INSERT_USERS_SUCCESS',
  payload: {
    data,
  },
});

export const insertUsersFailure = () => ({
  type: 'INSERT_USERS_FAILURE',
});
