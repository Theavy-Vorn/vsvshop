const initialState = {
  isLogin: false,      // true if logged in
  auth: null,          // { token, user }
  loading: false,      // true while loading
  error: null,         // error message if login/profile fails
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "AUTH_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
        auth: action.payload,
        loading: false,
        error: null,
      };

    case "AUTH_SUCCESS":
      return {
        ...state,
        isLogin: true,
        auth: {
          ...state.auth,
          user: action.payload, // only update user
        },
        loading: false,
        error: null,
      };

    case "LOGIN_FAILURE":
    case "AUTH_ERROR":
      return {
        ...state,
        isLogin: false,
        auth: null,
        loading: false,
        error: action.payload,
      };

    case "LOGOUT":
      return { ...initialState };

    default:
      return state;
  }
};
