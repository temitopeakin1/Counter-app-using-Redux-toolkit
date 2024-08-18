import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset:(state) => {
        state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
    })
    .addCase(
      incrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      }
    );
  },
});

// performing async operations
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync", // the name is defined by choice here
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

// selector
export const  selectValue = (state: RootState) => state.counter.value
export const { increment, decrement, incrementByAmount, reset} = counterSlice.actions;
export default counterSlice.reducer;
