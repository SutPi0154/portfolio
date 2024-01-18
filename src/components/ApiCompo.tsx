import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CloseIcon from "@mui/icons-material/Close";
import DataObjectIcon from "@mui/icons-material/DataObject";
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
const ApiCompo = () => {
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
          <DataObjectIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: 28 }}>
              Api <br /> Service
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => {
                setOpenDialog(true);
              }}
              disableTouchRipple={true}
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
              <ArrowForwardIcon className="btn-child" />
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
          <Typography sx={{ fontSize: 24 }}> Api Service</Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <CheckCircleOutlineRoundedIcon
                sx={{ color: "textSecondary.main" }}
              />
              <Typography sx={{ fontSize: 20, color: "textSecondary.main" }}>
                Next.js, Node.js, Express, PostgreSQL, Prisma, TypeScript
                backend skills.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <CheckCircleOutlineRoundedIcon
                sx={{ color: "textSecondary.main" }}
              />
              <Typography sx={{ fontSize: 20, color: "textSecondary.main" }}>
                Tailoring robust APIs to your specifications.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <CheckCircleOutlineRoundedIcon
                sx={{ color: "textSecondary.main" }}
              />
              <Typography sx={{ fontSize: 20, color: "textSecondary.main" }}>
                Database mastery with PostgreSQL and Prisma.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <CheckCircleOutlineRoundedIcon
                sx={{ color: "textSecondary.main" }}
              />
              <Typography sx={{ fontSize: 20, color: "textSecondary.main" }}>
                Efficient API development and Postman testing.
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
              href="https://nodejs.org/en"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/node-js.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
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
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://www.postman.com/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/postman.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="300vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/postgresql.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>

            <a
              href="https://www.prisma.io"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/prisma.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
            <a
              href="https://expressjs.com/"
              target="_blank"
              style={{ textDecoration: "none", width: 60, height: 60 }}
            >
              <IconButton sx={{ width: 60, height: 60 }}>
                <Image
                  src="/express-js.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: 2 }} // optional
                />
              </IconButton>
            </a>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ApiCompo;
