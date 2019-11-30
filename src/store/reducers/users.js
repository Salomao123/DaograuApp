const INITAL_STATE = {
  users: {},
  insertUsers: {},
  error: false,
  loading: false,
};

export default function users(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_USERS_REQUEST':
      return {...state, loading: true};
    case 'LOAD_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload.data,
        error: false,
        loading: false,
      };
    case 'LOAD_USERS_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      };

    //insert
    case 'INSERT_USERS_REQUEST':
      return {...state, loading: true};
    case 'INSERT_USERS_SUCCESS':
      return {...state, insertUsers: action.payload.data, loading: false};
    case 'INSERT_USERS_FAILURE':
      return {...state, error: true, loading: false};

    default:
      return {...state};
  }
}
