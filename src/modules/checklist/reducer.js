import * as Actions from './constants';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export default function checklistReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * ---------------
     * Fetch all checklist.
     * ---------------
     */
    case Actions.FETCHING_ALL_CHECKLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Actions.FETCHING_ALL_CHECKLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Actions.FETCHING_ALL_CHECKLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
