export const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
