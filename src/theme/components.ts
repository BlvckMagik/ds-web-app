/* eslint-disable @typescript-eslint/ban-ts-comment */
import palette from "./palette";

const components = {
  MuiFormControl: {
    styleOverrides: {
      root: {
        //@ts-ignore
        color: palette.primary.main,
        fontSize: "20px",
        zIndex: 6,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        //@ts-ignore
        color: palette!.primary.main,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        // border: "none",
      },
    },
  },
};

export default components;
