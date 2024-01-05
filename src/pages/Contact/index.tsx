import { useAppDispatch } from "@/store/hook";
import { sendEmailThunk } from "@/store/slices/sendEmailSlice";
import { toggleSnackbar } from "@/store/slices/snackbarSlice";
import { FormDataType } from "@/types/sendEmail";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Element } from "react-scroll";

const defaultFormData: FormDataType = {
  name: "",
  email: "",
  project: "",
  message: "",
};

const ContactMe = () => {
  const [formData, setFormData] = useState<FormDataType>(defaultFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || !(formData.name.length > 4)) {
      newErrors.name = "Name is at least 4";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.project.trim()) {
      newErrors.project = "Project is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };
  const dispatch = useAppDispatch();

  emailjs.init("1hfRLdJGeGqXNFRBv");
  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(
        sendEmailThunk({
          ...formData,
          onSuccess: () => {
            dispatch(
              toggleSnackbar({
                message: "send email successfully",
              })
            );
            setFormData(defaultFormData);
          },
        })
      );
    }
  };

  return (
    <Element name="contact-me-page">
      <Box sx={{ pt: 10, mt: 10 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Contact Me
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 300, color: "textSecondary.main" }}
            >
              Get in touch
            </Typography>
          </Box>
          <Box
            sx={{
              my: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <PhoneIcon sx={{ fontSize: 40, color: "primary.main" }} />
                <Box>
                  <Typography sx={{ fontSize: 25 }}>Call Me</Typography>
                  <Typography
                    sx={{ fontWeight: 300, color: "textSecondary.main" }}
                  >
                    09942919808
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <EmailOutlinedIcon
                  sx={{ fontSize: 40, color: "primary.main" }}
                />
                <Box>
                  <Typography sx={{ fontSize: 28 }}>Email</Typography>
                  <Typography
                    sx={{ fontWeight: 300, color: "textSecondary.main" }}
                  >
                    sutpi070@gmail.ocm
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <FmdGoodOutlinedIcon
                  sx={{ fontSize: 40, color: "primary.main" }}
                />
                <Box>
                  <Typography sx={{ fontSize: 28 }}>Location</Typography>
                  <Typography
                    sx={{ fontWeight: 300, color: "textSecondary.main" }}
                  >
                    Basic Education Primary School, 41 Street, Yangon
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "70%",
                bgcolor: "",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  sx={{ bgcolor: "textField.main", width: "48%" }}
                  error={!!errors.name}
                  helperText={errors.name}
                />

                <TextField
                  label="Email"
                  variant="outlined"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  sx={{ bgcolor: "textField.main", width: "48%" }}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Box>
              <TextField
                label="Project"
                variant="outlined"
                value={formData.project}
                error={!!errors.project}
                helperText={errors.project}
                onChange={(e) => {
                  setFormData({ ...formData, project: e.target.value });
                }}
                sx={{ bgcolor: "textField.main", width: "100%" }}
              />
              <TextField
                placeholder="message"
                value={formData.message}
                sx={{ bgcolor: "textField.main" }}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
                multiline
                rows={6}
              />
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    py: 2,
                    width: "fit-content",
                    borderRadius: 2,
                    display: "flex",

                    alignItems: "center",
                  }}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <Typography sx={{ mr: 1, fontWeight: 600, fontSize: "18px" }}>
                    Send Message
                  </Typography>
                  <SendIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default ContactMe;
