/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        base: "62.5%", // default browser font size now 10px instead of 16px
        6: "0.6rem", // 0.6rem => 6px now, etc.
        8: "0.8rem",
        10: "1rem",
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        18: "1.8rem",
        20: "2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
        36: "3.6rem",
        40: "4rem",
        48: "4.8rem",
        60: "6rem",
        72: "7.2rem",
        80: "8rem",
        100: "10rem",
      },
      width: {
        "w-0": "0px",
        "w-auto": "auto",
        "w-full": "100%",
      },
      spacing: {
        6: "0.6rem",
        8: "0.8rem",
        10: "1rem",
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        18: "1.8rem",
        20: "2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
        36: "3.6rem",
        40: "4rem",
        48: "4.8rem",
        60: "6rem",
        72: "7.2rem",
      },
      screens: {
        xs: "240px", // 240px
        sm: "576px", // 576px
        md: "768px", // 768px
        lg: "992px", // 992px
        xl: "1200px", // 1200px
      },
      borderRadius: {
        none: "0",
        xs: "1px",
        sm: "2px",
        DEFAULT: "5px",
        md: "8px",
        lg: "10px",
        xl: "15px",
      },
    },
  },
  plugins: [],
};
