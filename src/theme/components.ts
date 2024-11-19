import palette from "./palette";

const components = {
  MuiFormControl: {
    styleOverrides: {
      root: {
        color: palette.primary.main,
        fontSize: "20px",
        zIndex: 6,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: palette.primary.main,
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
