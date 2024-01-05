import { SnackbarSlice } from "@/types/snackBar";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SnackbarSlice = {
  message: null,
  autoHideDuration: 5000,
  open: false,
  severity: "success",
};
const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    toggleSnackbar: (state, { payload }) => {
      const { open, autoHideDuration = 5000, message, severity } = payload;
      state.open = true;
      state.message = message;
      state.autoHideDuration = autoHideDuration;
      state.severity = severity;
    },
    resetSnackBar: (state) => {
      state.open = false;
      state.autoHideDuration = 5000;
      state.severity = "success";
      state.message = null;
    },
  },
});

export const { toggleSnackbar, resetSnackBar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
