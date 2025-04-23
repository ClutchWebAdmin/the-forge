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
          dark: "#C9A59A",
          medium: "#E4B79A",
          light: "#E4D6D3",
        },
        vaultPurple: {
          dark: "#605856",
          medium: "#7D726E",
          light: "#928682",
        },
        blush: {
          light: "#FADADD",  // Light blush color
        },
        new: {
          light: "#b7c0c8",
        }
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      textShadow: {
        'outline': '1px 1px 2px black',  // You can customize this value
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseArrow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' },
        },
        colorChange: {
          '0%': { color: '#f97316' }, // forgeOrange-light
          '33%': { color: '#ffbf00' }, // custom amber color
          '66%': { color: '#fdba74' }, // light blush
          '100%': { color: '#f97316' }, // back to forgeOrange-light
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        pulseArrow: 'pulseArrow 0.5s ease-in-out infinite',
        colorChange: 'colorChange 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          textShadow: '1px 1px 2px black',
        },
      });
    },
  ],
};
