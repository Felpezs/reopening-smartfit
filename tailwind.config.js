/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { gotham: ["gotham", "sans-serif"] },
    colors: {
      darkGrey: "#333333",
      lightGrey: "#808080",
      yellow: "#FFB612",
      red: "#dc0a17",
      green: "#2FC022",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
