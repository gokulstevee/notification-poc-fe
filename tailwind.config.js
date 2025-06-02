/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#20285C",
        secondary: "#F0FDF4",
        danger: "#ff2424",
        "primary-text": "#16A34A",
        "smoke-grey": "#656565",
        "orange-notify": "#F89616",
      },
    },
  },
  plugins: [],
};
