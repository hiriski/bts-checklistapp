import * as Actions from './constants';
import ChecklistService from './service';

/**
 * --------------------
 * Fetch all checklist.
 * --------------------
 */
export const fetchAllChecklist = () => {
  return async (dispatch) => {
    dispatch(fetchingAllChecklistRequest());
    try {
      const response = await ChecklistService.getAll();
      if (response.status === 200) {
        const { data } = response.data;
        dispatch(fetchingAllChecklistSuccess(data));
      }
    } catch (e) {
      console.log(e.response);
      dispatch(fetchingAllChecklistFailure());
    }
  };
};

const fetchingAllChecklistRequest = () => ({
  type: Actions.FETCHING_ALL_CHECKLIST_REQUEST,
});

const fetchingAllChecklistFailure = () => ({
  type: Actions.FETCHING_ALL_CHECKLIST_FAILURE,
});

const fetchingAllChecklistSuccess = (items) => ({
  type: Actions.FETCHING_ALL_CHECKLIST_SUCCESS,
  payload: items,
});
