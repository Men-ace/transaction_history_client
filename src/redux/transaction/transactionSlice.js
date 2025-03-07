import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      const { payload } = action;
      state.transactions = payload;
    },
  },
});

const { reducer: transactionReducer, actions } = transactionSlice;
export const { setTransaction } = actions;

export default transactionReducer;