/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forgeBrown: "#371414",
        forgeGray: "#CBBBB6",
        forgeOrange: {
          dark: "#BC6600",
          medium: "#D47A10",
          light: "#FD9418",
        },
        dpwBlue: {
          dark: "#3F5777",
          medium: "#597495",
          light: "#7D92AD",
        },
        forgeRed: {
          dark: "#873534",
          medium: "#B04443",
          light: "#D25251",
        },
        collectivePink: {
          dark: "#D8A6C5",
          medium: "#E3BFD5",
          light: "#F4DCEB",
        },
        vaultPurple: {
          dark: "#605856",
          medium: "#7D726E",
          light: "#928682",
        },
      },
    },
  },
  plugins: [],
};
