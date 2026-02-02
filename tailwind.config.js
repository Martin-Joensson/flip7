export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "var(--color-lightBg)",
        lightText: "var(--color-lightText)",
        darkBg: "var(--color-darkBg)",
        darkText: "var(--color-darkText)",
      },
    },
  },
};
