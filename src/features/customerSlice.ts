import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

export interface AddFoodToCustomer {
  id: string;
  food: string;
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
    addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomer>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

// export actions
export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

// export reducer
export default customerSlice.reducer;
