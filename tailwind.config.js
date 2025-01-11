/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "btn-default": withOpacity("--button-default-fgColor-rest"),
        "default": withOpacity("--fgColor-default"),
        "muted": withOpacity("--fgColor-muted"),
        "accent": withOpacity("--fgColor-accent"),
        "error": withOpacity("--default-error"),
      },
      backgroundColor: {
        "btn-default": withOpacity("--button-default-bgColor-rest"),
        "btn-default-hover": withOpacity("--button-default-bgColor-hover"),
        "btn-default-active": withOpacity("--button-default-bgColor-active"),
        "default": withOpacity("--default-bgColor"),
        "header": withOpacity("--header-default-bgColor-rest"),
        "error": withOpacity("--default-error"),
      },
      colors: {
        "border": withOpacity("--button-default-borderColor-rest"),
        "border-hover": withOpacity("--button-default-borderColor-hover"),
        "border-active": withOpacity("--button-default-borderColor-active"),
        "error": withOpacity("--default-error"),
      },
    },
  },
  plugins: [],
}

