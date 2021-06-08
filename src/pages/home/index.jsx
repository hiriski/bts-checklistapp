import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChecklistContainer from 'src/containers/checklist/checklist-container';
import ChecklistHeader from 'src/containers/checklist/header';
import { fetchAllChecklist } from 'src/modules/checklist/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.checklistReducer);

  const fetchData = () => {
    dispatch(fetchAllChecklist());
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <ChecklistHeader />
      {data && data.length > 0 ? <ChecklistContainer data={data} /> : null}
    </React.Fragment>
  );
};

export default HomePage;
