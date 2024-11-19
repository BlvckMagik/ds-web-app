"use client";
import { useState } from "react";

import Header from "@/components/Header";
import {
  Alert,
  Button,
  IconButton,
  Paper,
  Snackbar,
  SnackbarCloseReason,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { getItem, setItem } from "@/shared/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { snackbarConfigType } from "../page";

import * as Styled from "./index.styled";

type Row = {
  name: "string";
  link: "string";
  days: Array<number>;
};

const Groups = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [snackbarConfig, setSnackbarConfig] = useState<snackbarConfigType>({
    message: "",
    severity: "info",
  });

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

  const groups = getItem("groups") || [];
  return (
    <>
      <Header />
      <Styled.Page>
        <Button onClick={() => setIsDialogOpen(true)} sx={{ margin: "50px 0" }}>
          Add group
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Days</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groups.map((row: Row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.days}</TableCell>
                  <TableCell align="center">{row.link}</TableCell>
                  <TableCell align="center">
                    <DeleteIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setItem(
                          "groups",
                          groups.filter(
                            (group: { name: string }) => group.name !== row.name
                          )
                        );
                        handleOpenSnackbar({
                          message: "Group deleted",
                          severity: "success",
                        });
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Styled.Page>
      <Styled.Dialog open={isDialogOpen}>
        <h1 style={{ textAlign: "center" }}>Create group</h1>
        <TextField
          name="name"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          label="Name"
          color="secondary"
          variant="standard"
        />
        <TextField
          name="days"
          value={days}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDays(event.target.value);
          }}
          label="Days"
          color="secondary"
          variant="standard"
        />
        <TextField
          name="link"
          value={link}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLink(event.target.value);
          }}
          label="Meet link"
          color="secondary"
          variant="standard"
        />
        <Button
          onClick={() => {
            setItem("groups", [...groups, { name, days, link }]);
            setIsDialogOpen(false);
          }}
        >
          Add group
        </Button>
      </Styled.Dialog>
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
    </>
  );
};

export default Groups;
