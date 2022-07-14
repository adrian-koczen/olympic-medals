interface Theme {
  colors: {
    gray: string;
    lightGray: string;
    darkGray: string;
    white: string;
    pink: string;
    error: string;
  };
  typography: {
    normal: string;
    semiNormal: string;
    semiSmall: string;
    small: string;
  };
}

const theme: Theme = {
  colors: {
    gray: "#405260",
    lightGray: "#F1F5F8",
    darkGray: "#3e4851",
    white: "#ffffff",
    pink: "#ED3F58",
    error: "#f7bdbd",
  },
  typography: {
    normal: "18px",
    semiNormal: "16px",
    semiSmall: "14px",
    small: "12px",
  },
};

export default theme;
