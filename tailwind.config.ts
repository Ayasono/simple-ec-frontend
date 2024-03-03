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
			},
			keyframes: {
				fadein: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				fadein: 'fadein 1s ease-in',
			},
		},
	},
	plugins: [],
};
export default config;
