import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Worker } from '../types/worker';

const initialState: Worker = {
  fullName: '',
  workplace: '',
  date: '',
};

export const workerReducer = createSlice({
  name: 'worker',
  initialState,
  reducers: {
    entryWorker: (state, action: PayloadAction<Worker>) => {
      const { fullName, workplace, date } = action.payload;
      return { fullName, workplace, date };
    },
    addSignature: (state, action: PayloadAction<{ signature: string }>) => {
      return { ...state, signature: action.payload.signature };
    },
  },
});

export const { entryWorker, addSignature } = workerReducer.actions;

export default workerReducer.reducer;
