import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Equipment } from '../types/equipment';
import fullEquipmentList from '../db';

const initialState = [...fullEquipmentList];

export const inventoryReducer = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Equipment>): Equipment[] => {
      const item = action.payload;
      return [...state, item];
    },
    removeItemFromList: (state, action: PayloadAction<number>): Equipment[] => {
      const arrayAfterFilter = state.filter((item, i) => i !== action.payload);

      return [...arrayAfterFilter];
    },
    updateMissing: (
      state,
      action: PayloadAction<{ missing: number; index: number }>
    ): void => {
      state[action.payload.index].missing = action.payload.missing;
    },
  },
});

export const { addItem, removeItemFromList, updateMissing } =
  inventoryReducer.actions;

export default inventoryReducer.reducer;
