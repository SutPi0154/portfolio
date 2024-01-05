type SnackbarSeverity = "success" | "error" | "info" | "warning";
export interface SnackbarSlice {
  message: string | null;
  autoHideDuration: number;
  open: boolean;
  severity: SnackbarSeverity;
}
