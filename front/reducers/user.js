export const initialState = {
  isLoggedIn: false,
  user: {}
}

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

const loginAction = {
  type: LOG_IN,
  user: {
    nickname: '이찬호',
  }
}

const logoutAction = {
  type: LOG_OUT
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user
      }
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    default:
      return {
        ...state
      };
  }
}

export default reducer;