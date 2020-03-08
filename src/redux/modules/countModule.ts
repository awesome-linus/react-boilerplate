import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export type CountState = {
  count: number;
};

export const initialState: CountState = {
  count: 0
};

const countModule = createSlice({
  name: 'count',
  initialState,
  reducers: {
    plusOne: (state: CountState) => {
      return { count: state.count + 1 };
    },
    minusOne: (state: CountState) => {
      return { count: state.count - 1 };
    },
    plus: (state: CountState, action: PayloadAction<number>) => {
      return { count: state.count + action.payload };
    },
    minus: (state: CountState, action: PayloadAction<number>) => {
      return { count: state.count - action.payload };
    },
    postAsyncPlusOne: (state: CountState) => {
      return state;
    }
  }
});

export const useCount = () => {
  return useSelector((state: { count: CountState }) => state);
};

export default countModule;
