"use client";
import { useState } from "react";
import Image from "next/image";

import styles from "./page.module.css";
import {
  Alert,
  AlertColor,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Header from "@/components/Header";
import { instance } from "@/shared/gateway";
import { getItem } from "@/shared/utils";

export type snackbarConfigType = {
  message: string;
  severity: AlertColor;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [snackbarConfig, setSnackbarConfig] = useState<snackbarConfigType>({
    message: "",
    severity: "info",
  });
  const [secretClicksCount, setSecretClicksCount] = useState<number>(0);
  const [isSecretMessageVisible, setIsSecretMessageVisible] =
    useState<boolean>(false);

  const handleSecretClick = () =>
    secretClicksCount < 5
      ? setSecretClicksCount(secretClicksCount + 1)
      : setIsSecretMessageVisible(true);

  const handleOpenSnackbar = (snackbarConfig: snackbarConfigType) => {
    setSnackbarConfig(snackbarConfig);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const scheduleMessage = async () => {
    if (!getItem("groups")?.length) {
      handleOpenSnackbar({
        message: "You need set up groups firstly",
        severity: "info",
      });
      return;
    }
    setIsLoading(true);
    instance
      .post("/schedule-message", {
        chatId: "343448048",
        message: "test 20.11.2024 05:33",
        dateTime: "2024-11-19T03:33:00",
      })
      .then(() =>
        handleOpenSnackbar({
          message: "Messages scheduled successfully",
          severity: "success",
        })
      )
      .catch((err) =>
        handleOpenSnackbar({
          message: err.message,
          severity: "error",
        })
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 onClick={handleSecretClick} style={{ textAlign: "center" }}>
            Drako Schule
          </h1>
          {isSecretMessageVisible && (
            <h1 style={{ textAlign: "center" }}>
              Just a small reminder that you are my beloved wife, I love you
              <br />
              ❤️‍🔥infinitely❤️‍🔥
            </h1>
          )}
          <TextField
            name="Text"
            label="Text"
            color="secondary"
            variant="standard"
          />
          <Button
            style={{ maxWidth: "200px", margin: "auto" }}
            onClick={scheduleMessage}
          >
            {isLoading ? <CircularProgress /> : "Schedule message"}
          </Button>
        </main>
        <footer className={styles.footer}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          action={
            <>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        >
          <Alert
            onClose={handleClose}
            severity={snackbarConfig.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbarConfig.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
