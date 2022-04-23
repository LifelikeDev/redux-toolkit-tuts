import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

// export actions
export const { addReservation, removeReservation } = reservationSlice.actions;

// export reducer
export default reservationSlice.reducer;
