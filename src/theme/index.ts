/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { createTheme } from "@mui/material/styles";

import components from "@/theme/components";
import typography from "@/theme/typography";
import palette from "@/theme/palette";
import breakpoints from "@/theme/breakpoints";

const theme = createTheme({
  spacing: 4,
  // @ts-ignore
  components,
  typography,
  palette,
  breakpoints,
});

export default theme;
