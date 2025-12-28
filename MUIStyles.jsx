import { backdropClasses } from "@mui/material";

export const BtnStyle = {
  fontSize: "large",
  textTransform: "none",
  borderRadius: "8px",
  padding: "8px 16px",
  color: "white",
  backgroundColor: "#0F7173",
  border: "none",
  fontWeight: "700",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  "&:hover, &:active": {
    backgroundColor: "#0A4F50", // Darker teal
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  "&:disabled": {
    backgroundColor: "rgb(219, 219, 219)",
    color: "rgb(174, 174, 174)",
    boxShadow: "none",
  },
};

export const BtnStyleDisabled = {
  fontSize: "large",
  textTransform: "none",
  borderRadius: "8px",
  padding: "8px 16px",
  color: "rgb(174, 174, 174)",
  backgroundColor: "rgb(219, 219, 219)",
  border: "none",
  fontWeight: "700",
};

export const BtnStyleSmall = {
  fontSize: "medium",
  textTransform: "none",
  borderRadius: "6px",
  padding: "6px 12px",
  color: "white",
  backgroundColor: "#0F7173",
  border: "none",
  fontWeight: "600",
  "&:hover, &:active": {
    backgroundColor: "#0A4F50",
  },
  "&:disabled": { 
     backgroundColor: "rgb(219, 219, 219)",
     color: "rgb(174, 174, 174)",
  },
};

export const BtnStyleCancel = {
  fontSize: "medium",
  //textTransform: "none",
  fontWeight: "600",
  borderRadius: "10px",
  padding: "6px 6px 3px 6px",
  color: "var(--secondary-color)",
  backgroundColor: "var(--alert-color)",
  border: "1px solid var(--box-outline)",
  "&:hover, &:active": {
    backgroundColor: "var(--secondary-color)",
    color: "var(--alert-color)",
    border: "1px solid var(--alert-color)",
  },
  "&:disabled": {
    color: "var(--button-disabled-color)",
    backgroundColor: "var(--button-disabled-background)",
  },
};

export const BtnStyleSecondary = {
  fontSize: "medium",
  //textTransform: "none",
  fontWeight: "600",
  borderRadius: "10px",
  padding: "6px 6px 3px 6px",
  color: "var(--button-color)",
  backgroundColor: "var(--secondary-color)",
  border: "1px solid var(--button-color)",
  "&:hover, &:active": {
    backgroundColor: "var(--primary-color-semi-trans)",
    color: "var(--secondary-color)",
  },
  "&:disabled": {
    color: "var(--button-disabled-color)",
    backgroundColor: "var(--button-disabled-background)",
  },
};

export const BtnStyleTiny = {
  fontSize: "small",
  textTransform: "none",
  borderRadius: "4px",
  padding: "4px 8px",
  color: "white",
  backgroundColor: "#0F7173",
  border: "none",
  fontWeight: "600",
  "&:hover, &:active": {
    backgroundColor: "#0A4F50",
  },
  "&:disabled": { 
     backgroundColor: "rgb(219, 219, 219)",
     color: "rgb(174, 174, 174)",
  },
};

export const CheckBoxStyle = {
  color: "#6d3465", 
};

export const TextFieldStyle = {
  marginBottom: "2rem",
  marginTop: "1.5rem",
  boxSizing: "border-box",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "12px",
    transition: "box-shadow 0.2s ease-in-out",
    "& fieldset": {
      borderRadius: "12px",
      borderColor: "var(--textfield-border)",
      borderWidth: "2px",
      transition: "border-color 0.2s ease-in-out",
      top: 0, // Reset default MUI offsets that can cause gaps
    },
    "&:hover fieldset": {
      borderColor: "var(--textfield-border)",
    },
    "&.Mui-focused": {
      boxShadow: "0 0 0 4px var(--accent-glow)",
      "& fieldset": {
        borderColor: "var(--textfield-outline) !important",
        borderWidth: "2px",
      },
    },
    "& .MuiInputBase-input": {
      fontSize: "1rem",
      color: "black",
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #F0F9F9 inset !important", // Soft teal background
        WebkitTextFillColor: "var(--text-primary) !important",
        borderRadius: "inherit",
      },
    },
    "& input.MuiInputBase-input": {
      padding: "14px 16px",
    },
    "& textarea.MuiInputBase-input": {
      padding: 0,
    },
    "&.MuiOutlinedInput-multiline": {
      padding: "14px 16px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "var(--text-secondary)",
    fontFamily: "var(--font-main)",
    fontSize: "1.1rem",
    fontWeight: "600",
    transform: "translate(0, -1.8rem) scale(1)",
    transformOrigin: "top left",
    "&.Mui-focused": {
      color: "var(--text-primary)",
    },
    "&.MuiInputLabel-shrink": {
      transform: "translate(0, -1.8rem) scale(0.9)",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "12px",
    "& legend": {
      display: "none",
    },
  },
};

export const PaperStyle = {
  backgroundColor: "white",
  borderRadius: "12px",
  border: "2px solid var(--textfield-border)",
  padding: "1rem",
  boxShadow: "none",
  transition: "all 0.2s ease-in-out",
  position: "relative",
  "&:focus-within": {
    borderColor: "var(--textfield-outline)",
    boxShadow: "0 0 0 4px var(--accent-glow)",
  }
};

export const LabelStyle = {
  color: "var(--text-secondary)",
  fontFamily: "var(--font-main)",
  fontSize: "1.1rem",
  fontWeight: "600",
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translate(0, -1.8rem)",
  pointerEvents: "none",
  transition: "color 0.2s ease-in-out",
};

export const ChipStyle = {
  color: "black",
  borderColor: "var(--textfield-outline) !important",
  borderWidth: "1.5px",
  fontWeight: "500",
  borderRadius: "8px",
  backgroundColor: "white",
  margin: "2px",
  "&:hover": {
    backgroundColor: "rgba(15, 113, 115, 0.04)",
  },
  "& .MuiChip-deleteIcon": {
    color: "var(--accent-red)",
    "&:hover": {
      color: "var(--accent-red-dim)",
    },
  },
};

// StepperStyle.js
export const StepperStyle = {
  backgroundColor: "white",
  p: 0,

  // style the connector line
  "& .MuiStepConnector-root .MuiStepConnector-line": {
    borderColor: "var(--textfield-outline)",
    borderTopWidth: 3,
  },

  // base icon color
  "& .MuiStepIcon-root": {
    color: "#ccc",
  },
  // active step icon
  "& .MuiStepIcon-root.Mui-active": {
    color: "var(--textfield-outline)",
  },
  // completed step icon
  "& .MuiStepIcon-root.Mui-completed": {
    color: "var(--textfield-outline)",
  },

  // label text
  "& .MuiStepLabel-label": {
    color: "rgba(0,0,0,0.6)",
  },
  // active label
  "& .MuiStepLabel-label.Mui-active": {
    color: "var(--textfield-outline)",
  },
  // completed label
  "& .MuiStepLabel-label.Mui-completed": {
    color: "var(--textfield-outline)",
  },
};

export const MobileStepperStyle = {
  backgroundColor: "white",
  p: 0,

  // center the dots
  "& .MuiMobileStepper-dots": {
    display: "flex",
    justifyContent: "center",
    p: 1,
  },

  // inactive dots
  "& .MuiMobileStepper-dot": {
    backgroundColor: "#ccc",
    width: 8,
    height: 8,
    margin: "0 4px",
  },

  // active dot (override default blue)
  "& .MuiMobileStepper-dotActive": {
    backgroundColor: "var(--textfield-outline) !important",
  },

  // override the Next/Back button text color
  // these Buttons are rendered with .MuiButton-text and .MuiButton-textPrimary
  "& .MuiMobileStepper-button": {
    // target the inner <button>
    "& button.MuiButton-text": {
      color: "var(--textfield-outline) !important",
    },
  },
};

// in your styles file (e.g. src/styles/RadioStyles.js)
export const RadioGroupStyle = {
  // target each label+radio wrapper
  "& .MuiFormControlLabel-root": {
    margin: 0,

    // style the radio itself
    "& .MuiRadio-root": {
      color: "var(--textfield-outline)",
      "&.Mui-checked": {
        color: "var(--textfield-outline)",
      },
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.08)",
      },
      "&.Mui-focusVisible": {
        outline: "2px solid var(--textfield-outline)",
      },
    },

    // style the label text
    "& .MuiFormControlLabel-label": {
      color: "rgba(0,0,0,0.6)",
      "&.Mui-disabled": {
        color: "rgba(0,0,0,0.38)",
      },
    },
  },
};
