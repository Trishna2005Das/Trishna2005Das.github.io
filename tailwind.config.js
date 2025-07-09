import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      border: "hsl(240, 5%, 91%)",
      background: "hsl(0, 0%, 100%)",
      foreground: "hsl(240, 10%, 3.9%)",
      // Add more if needed
    },
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
