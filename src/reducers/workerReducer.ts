import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Equipment } from '../types/equipment';
import { Worker } from '../types/worker';

const initialState: Worker = {
  fullName: '',
  workplace: '',
  date: '',
};

export const inventoryReducer = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Equipment>) => {
      const item = action.payload;
      return [...state, item];
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const arrayAfterFilter = state.filter((item, i) => i !== action.payload);
      return [...arrayAfterFilter];
    },
    updateMissing: (
      state,
      action: PayloadAction<{ missing: string; index: number }>
    ) => {
      const itemEl = findItem(state, action.payload.index);
      itemEl!.missing = Number(action.payload.missing);
      return [...state];
    },
  },
});

const findItem = (
  state: Equipment[],
  itemIndex: number
): Equipment | undefined => {
  const item = state.find((product, index) => index === itemIndex);
  return item;
};

export const { addItem, removeItem, updateMissing } = inventoryReducer.actions;

export default inventoryReducer.reducer;
