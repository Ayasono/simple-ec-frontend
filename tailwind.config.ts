import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			width: {
				240: "60rem",
			},
			borderColor: {
				'category': '#CEBFB4',
			},
			textColor: {
				'category': '#473733',
			},
			backgroundColor: {
				'category': '#CEBFB4',
			}
		},
	},
	plugins: [],
};
export default config;
