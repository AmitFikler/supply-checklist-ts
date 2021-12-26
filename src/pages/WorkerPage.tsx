import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../app/hooks';
import { entryWorker } from '../reducers/workerReducer';

const WorkerPage = () => {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState('');
  const [workplace, setWorkplace] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const submitForm = () => {
    if (!fullName || !workplace || !date) {
      return;
    }
    dispatch(entryWorker({ fullName, workplace, date }));
    navigate('/inventory');
  };

  return (
    <div>
      <label htmlFor="full-name">Full Name: </label>
      <input
        name="full-name"
        type="text"
        placeholder="Enter Full Name..."
        onChange={(e) => setFullName(e.target.value)}
      ></input>
      <br />
      <label htmlFor="work-place">Workplace: </label>
      <input
        name="work-place"
        type="text"
        placeholder="Enter Workplace..."
        onChange={(e) => setWorkplace(e.target.value)}
      ></input>
      <br />
      <label htmlFor="date">Date: </label>
      <input
        name="date"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <br />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};
export default WorkerPage;
