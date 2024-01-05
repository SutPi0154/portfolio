import { useAppDispatch, useAppSelector } from "@/store/hook";
import { resetSnackBar } from "@/store/slices/snackbarSlice";
import { Alert, Snackbar as MuiSnackbar } from "@mui/material";

const SnackBar = () => {
  const { open, message, severity, autoHideDuration } = useAppSelector(
    (store) => store.snackbar
  );
  const dispatch = useAppDispatch();
  setTimeout(() => dispatch(resetSnackBar()), autoHideDuration);
  return (
    <MuiSnackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default SnackBar;
