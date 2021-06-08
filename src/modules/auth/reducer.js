import * as Actions from './constants';

const initialState = {
  token: null,
  isLoading: false,
  isError: false,
  isRegisterSuccess: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        token: null,
        isLoading: true,
        isError: false,
      };
    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        isLoading: false,
        isError: true,
      };
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        isError: false,
      };
    case Actions.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Actions.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isRegisterSuccess: true,
      };
    case Actions.RESET_REGISTER_STATE:
      return {
        ...state,
        isRegisterSuccess: false,
      };

    default:
      return state;
  }
}
