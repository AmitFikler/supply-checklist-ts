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
      <div className="worker-form">
        <h1>Welcome!</h1>
        <div className="form-el">
          <label htmlFor="full-name">Full Name: </label>
          <input
            name="full-name"
            type="text"
            placeholder="Enter Full Name..."
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </div>
        <div className="form-el">
          <label htmlFor="work-place">Workplace: </label>
          <input
            name="work-place"
            type="text"
            placeholder="Enter Workplace..."
            onChange={(e) => setWorkplace(e.target.value)}
          ></input>
        </div>
        <div className="form-el">
          <label htmlFor="date">Date: </label>
          <input
            name="date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>

        <br />
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
};
export default WorkerPage;
