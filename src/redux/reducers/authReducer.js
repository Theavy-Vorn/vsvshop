const initialState = {
  isLogin: false,
  auth: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isLogin: true, auth: action.payload, loading: false, error: null };
    case "PROFILE_REQUEST":
      return { ...state, loading: true, error: null };
    case "PROFILE_SUCCESS":
      // Update auth.user with profile data
      return {
        ...state,
        loading: false,
        error: null,
        auth: {
          ...state.auth,
          user: action.payload,
        },
      };
    case "PROFILE_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return { isLogin: false, auth: null, loading: false, error: null };
    default:
      return state;
  }
};
