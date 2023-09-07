/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./index.html"],
	theme: {
		extend: {
			colors: {
				primary: "#21B573",
			},
			fontFamily: {
				popins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
