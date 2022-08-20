/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx, html}"],
    theme: {
        fontFamily: {
            sans: ["Rubik", "sans-serif"],
        },
        extend: {
            colors: {
                white1: "#FFFFF",
                white2: "#F8FAFE",
                blue1: "#E2EAF8",
                blue2: "#C4D5F1",
                blue3: "#89ABE3",
                green1: "#059669",
            },
        },
    },
    extend: {},
    variant: {},
    plugins: [require("@tailwindcss/forms")],
};
