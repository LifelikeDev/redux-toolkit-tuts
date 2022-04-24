import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

export interface Customer {
  id: string;
  name: string;
  food: string[];
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
  },
});

// export actions
export const { addCustomer } = customerSlice.actions;

// export reducer
export default customerSlice.reducer;
