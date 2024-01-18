import { useAppDispatch } from "@/store/hook";
import { sendEmailThunk } from "@/store/slices/sendEmailSlice";
import { toggleSnackbar } from "@/store/slices/snackbarSlice";
import { FormDataType } from "@/types/sendEmail";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

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
    <Element name="contact-me">
      <Box sx={{ pt: { xs: 5, md: 10, lg: 10 }, mt: 10 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: 40, sm: 44, lg: 48 },
              }}
            >
              Contact Me
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                color: "textSecondary.main",
                fontSize: { xs: 20 },
              }}
            >
              Get in touch
            </Typography>
          </Box>
          <Box
            sx={{
              my: { xs: 5, md: 10, lg: 10 },
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexWrap: "wrap",
              gap: { xs: 4, lg: 0 },
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", md: "40%", lg: "40%" },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, lg: 4 },
              }}
            >
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <PhoneIcon
                  sx={{ fontSize: { xs: 36, lg: 40 }, color: "primary.main" }}
                />
                <Box>
                  <Typography sx={{ fontSize: { xs: 22, sm: 24, lg: 22 } }}>
                    Call Me
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      color: "textSecondary.main",
                      fontSize: { xs: 18, sm: 20, lg: 16 },
                    }}
                  >
                    09942919808
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <EmailOutlinedIcon
                  sx={{ fontSize: { xs: 36, lg: 40 }, color: "primary.main" }}
                />
                <Box>
                  <Typography sx={{ fontSize: { xs: 22, sm: 24, lg: 22 } }}>
                    Email
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      color: "textSecondary.main",
                      fontSize: { xs: 18, sm: 20, lg: 16 },
                    }}
                  >
                    sutpi070@gmail.ocm
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <FmdGoodOutlinedIcon
                  sx={{ fontSize: { xs: 36, lg: 40 }, color: "primary.main" }}
                />
                <Box>
                  <Typography sx={{ fontSize: { xs: 22, sm: 24, lg: 26 } }}>
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      color: "textSecondary.main",
                      fontSize: { xs: 18, sm: 20, lg: 16 },
                    }}
                  >
                    Basic Education Primary School,
                    <br /> 41 Street, Yangon
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "90%", md: "56%", lg: "60%" },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2, md: 4, lg: 2 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: { xs: 2, sm: 2, md: 4, lg: 0 },
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  sx={{
                    bgcolor: "textField.main",
                    width: { xs: "100%", lg: "48%" },
                  }}
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
                  sx={{
                    bgcolor: "textField.main",
                    width: { xs: "100%", lg: "48%" },
                  }}
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
                    py: { xs: 2 },
                    width: "fit-content",
                    borderRadius: 2,
                    display: "flex",

                    alignItems: "center",
                  }}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <Typography
                    sx={{
                      mr: 1,
                      fontWeight: 600,
                      fontSize: { xs: 18, sm: 20, lg: 22 },
                    }}
                  >
                    Send Message
                  </Typography>
                  <SendRoundedIcon sx={{ fontSize: { lg: 25 } }} />
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
