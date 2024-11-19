"use client";

import { Dialog as MUIDialog, styled } from "@mui/material";

export const Page = styled("div")(() => ({
  display: "flex",
  minHeight: "calc(100% - 80px)",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 10%",
  flexDirection: "column",
}));

export const Dialog = styled(MUIDialog)(() => ({
  "& .MuiPaper-root": {
    padding: "30px",
    gap: "16px",
    minWidth: "300px",
  },
}));
