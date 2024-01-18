import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const FrontEndCompo = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <Box>
      <Card
        sx={{
          height: 300,
          width: 300,
          bgcolor: "container.main",
        }}
      >
        <CardContent sx={{ mt: 4, pl: 4 }}>
          <CodeIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: 28 }}>Frontend Developer</Typography>
          </Box>
          <Box>
            <Button
              disableTouchRipple={true}
              onClick={() => {
                setOpenDialog(true);
              }}
              className="btn-parent"
              sx={{
                display: "flex",
                width: "fit-content",
                color: "primary.main",
                ":hover": {
                  bgcolor: "transparent",
                },
                gap: 1,
                mt: 2,
              }}
            >
              <Typography sx={{ fontSize: 18 }}>View More </Typography>
              <ArrowForwardIcon className="btn-child" sx={{}} />
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Dialog
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
      >
        <IconButton
          onClick={() => {
            setOpenDialog(false);
          }}
          sx={{ position: "absolute", top: 2, right: 2 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>
          <Typography sx={{ fontSize: 24 }}> Frontend development</Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <CheckCircleOutlineRoundedIcon
                sx={{ color: "textSecondary.main" }}
              />
              <Typography sx={{ fontSize: 20, color: "textSecondary.main" }}>
                Skilled in Next.js, Material-UI, TypeScript, and React.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <CheckCircleOutlineRoundedIcon
                sx={{ color: "textSecondary.main" }}
              />
              <Typography sx={{ fontSize: 20, color: "textSecondary.main" }}>
                Expert coder for dynamic, user-centric websites.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <CheckCircleOutlineRoundedIcon
                sx={{ color: "textSecondary.main" }}
              />
              <Typography sx={{ fontSize: 20, color: "textSecondary.main" }}>
                Delivering clean, efficient code for optimal performance.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <CheckCircleOutlineRoundedIcon
                sx={{ color: "textSecondary.main" }}
              />
              <Typography sx={{ fontSize: 20, color: "textSecondary.main" }}>
                Elevate your online presence with my coding expertise.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 4,
              mx: { lg: 10 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/html.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/css.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/javascript.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/react.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="300vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://mui.com/material-ui/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/mui.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>

            <a
              href="https://tailwindcss.com/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/tailwind.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/bootstrap.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://nextjs.org/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/next-js.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/typeScript.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "90%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default FrontEndCompo;
