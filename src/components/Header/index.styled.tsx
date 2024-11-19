"use client";

import { styled } from "@mui/material";
import Img from "next/image";
import Link from "next/link";

export const Container = styled("header")(() => ({
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 5%",
}));

export const Navigation = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
}));

export const NavLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
}));

export const Image = styled(Img)(() => ({}));
