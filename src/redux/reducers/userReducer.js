// export const initialState = {
//   users: [],
// };

// export const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'USERS':
//       return {
//         ...state,
//         users: action.payload,
//       };
//     default:
//       return state;
//   }
// };


// redux/reducers/userReducer.js
const initialState = {
  users: [],
  // other states
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS":
      return { ...state, users: action.payload };

    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };

    default:
      return state;
  }
};

