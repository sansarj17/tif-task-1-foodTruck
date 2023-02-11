/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brightRed: "#E23744",
                primaryBlue: "#0E2368",
                font: "#444957",
                c_button: "#424961",
                c_card: "#93A2D361",
				c_border_m:"#373737",
                lightBlue: "#F0F1F7",
				lightGray:"#f8f8f8",
				footerSubtext:"#646874",
				footerCopyText:"#828b9c"
            },
            fontFamily: {
                open: ["Open Sans", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                source: ["Source Sans Pro", "sans-serif"],
            },
        },
    },
    plugins: [],
};
