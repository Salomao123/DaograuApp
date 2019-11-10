const INITAL_STATE = {
  email: null,
  password: null,
  loading: false,
  error: false,
};

export default function login(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {...state, loading: true};
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        error: false,
        loading: false,
      };
    case 'LOGIN_FAILURE':
      return {...state, error: true, loading: false};
    default:
      return {...state};
  }
}
