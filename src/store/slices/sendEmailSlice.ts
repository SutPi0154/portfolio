import { FormDataType, sendEmailType } from "@/types/sendEmail";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import emailjs from "emailjs-com";

const initialState: sendEmailType = {
  items: [],
  isLoading: false,
  iserror: null,
};
export const sendEmailThunk = createAsyncThunk(
  "sendEmailSlice/sendEmail",
  async (options: FormDataType) => {
    const { name, email, project, message, onSuccess, onError } = options;
    try {
      const response = await emailjs.send(
        "service_h6c9os9",
        "template_joln7pm",
        {
          to_name: "Sut Pi",
          from_name: name,
          email,
          message,
          project,
        }
      );

      console.log("Email sent successfully:", response);
      onSuccess && onSuccess();
    } catch (error) {
      console.error("Error sending email:", error);
      onError && onError();
    }
  }
);
const sendEmailSlice = createSlice({
  name: "sendEmail",
  initialState,
  reducers: {},
});

export const {} = sendEmailSlice.actions;
export default sendEmailSlice.reducer;
