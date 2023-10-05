// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/**

/** @type {import('tailwindcss').Config} */

const rem = (px) => {
  return px * 0.0625 + "rem";
};

module.exports = {
  // darkMode: ['class', '[data-mode="dark"]'],
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["'Inter'", "sans-serif"],
      kanit: ["Kanit", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
    },
    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
    fontSize: {
      10: rem(10),
      12: rem(12),
      14: rem(14),
      15: rem(15),
      16: rem(16),
      18: rem(18),
      20: rem(20),
      22: rem(22),
      24: rem(24),
      26: rem(26),
      28: rem(28),
      30: rem(30),
      32: rem(32),
      36: rem(36),
      40: rem(40),
      42: rem(42),
      44: rem(44),
      48: rem(48),
      56: rem(56),
      62: rem(62),
      64: rem(64),
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: {
          DEFAULT: "#4898F0",
          100: "#0066B3",
          600: "#6941C6",
          200: "#c6e3f9",
        },
        white: {
          DEFAULT: "#ffffff",
        },
      },
      boxShadow: {
        main: "0px 0px 0px 0px rgba(3, 34, 51, 0.07), 0px 5px 10px 0px rgba(2, 27, 41, 0.05), 0px 10px 20px 0px rgba(6, 35, 52, 0.02)",
        main_hover:
          "0px 0px 0px 0px rgba(3, 34, 51, 0.07), 0px 31px 31px 0px rgba(2, 27, 41, 0.03), 0px 70px 42px 0px rgba(6, 35, 52, 0.03)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
