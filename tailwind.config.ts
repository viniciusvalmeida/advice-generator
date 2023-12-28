import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					lightCyan: "hsl(193, 38%, 86%)",
					neonGreen: "hsl(150, 100%, 66%)",
				},
				neutral: {
					grayishBlue: "hsl(217, 19%, 38%)",
					darkGrayishBlue: "hsl(217, 19%, 24%)",
					darkBlue: "hsl(218, 23%, 16%)",
				},
			},
		},
	},
	plugins: [],
};
export default config;
