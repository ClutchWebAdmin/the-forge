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
        forgeRed: {
          1: "#FF7223",
          2: "#B80000",
          3: "#800000",
          4: "#520000",
          5: "#3D0000",
        },
        collectivePink: {
          1: "#FFDAB9",
          2: "#F7D9E3",
          3: "#FFB6C1",
          4: "#EF789C",
          5: "#E75480",
        },
        vaultPurple: {
          1: "#86577F",
          2: "#573151",
          3: "#381633",
          4: "#23091F",
          5: "#10040E",
        },
      },
    },
  },
  plugins: [],
};
