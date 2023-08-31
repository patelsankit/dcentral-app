/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}



// /** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
// const rem = (px) => {
//   return px * 0.0625 + "rem";
// };
// module.exports = {
//   darkMode: "class",
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./page-components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     fontFamily: {
//       inter: ["'Inter'", "sans-serif"],
//       gilroy: ["'Gilroy'", "sans-serif"],
//     },
//     container: {
//       center: true,
//     },
//     fontWeight: {
//       100: 100,
//       200: 200,
//       300: 300,
//       400: 400,
//       500: 500,
//       600: 600,
//       700: 700,
//       800: 800,
//       900: 900,
//     },
//     fontSize: {
//       10: rem(10),
//       12: rem(12),
//       14: rem(14),
//       16: rem(16),
//       18: rem(18),
//       20: rem(20),
//       22: rem(22),
//       24: rem(24),
//       26: rem(26),
//       28: rem(28),
//       30: rem(30),
//       32: rem(32),
//       36: rem(36),
//       42: rem(42),
//       48: rem(48),
//     },
//     extend: {
//       colors: {
//         success: {
//           DEFAULT: "#027A48",
//           100: "#ECFDF3",
//         },
//         danger: {
//           DEFAULT: "#FF0000",
//           100: "#F63D68",
//           200:"#D92D20",
//         },
//         primary: {
//           DEFAULT: "#4898F0",
//           50: "#EFF8FF",
//           100: "#EEF4FF",
//           200: "#4897F0",
//           300: "#175CD3",
//           400: "#875BF7",
//           450: "#7F56D9",
//           500: "#3538CD",
//           550: "#0060E0",
//           600: "#6941C6",
//         },
//         black: {
//           DEFAULT: "#000000",
//           main: "#101828",
//           100: "#192528",
//           200: "#495355",
//         },
//         gray: {
//           100: "#F2F4F7",
//           150: "#EAECF0",
//           200: "#475467",
//           300: "#D0D5DD",
//           // 200: "#C9C9C9",
//           400: "#98A2B3",
//           450: "#949B9C",
//           500: "#667085",
//           550: "#7E8687",
//           600: "#4A5578",
//           700: "#344054",
//           800: "#1D2939",
//         },
//         orange: {
//           500: "#EF6820",
//           200: "#FFA537",
//         },
//         pink: {
//           100: "#F9F5FF",
//         },
//         green: {
//           100: "#027A48",
//           200: "#00B364",
//           300: "#12B76A",
//           400: "#DBE9F3",
//         },
//         "cornell-red": {
//           DEFAULT: "#B42318",
//           100: "#FEF3F2",
//         },
//         boxShadow: {
//           DEFAULT: "0px 10px 60px 0px #10112F0F",
//           xs: "0px 1px 2px 0px #1018280D",
//           sm: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
//           inner:"0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF;",
//           lg:"0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);",
//           xl:"0px 1px 2px rgba(16, 24, 40, 0.05)",
//         },
//       },
//       boxShadow: {
//         cst: "0px 0px 30px -14px rgba(0,0,0,0.3)",
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
// };