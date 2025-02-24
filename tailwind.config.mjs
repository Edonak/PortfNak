/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center:true,
		padding:"1rem",
	},
	screens:{
		sm:'640px',
		md:'768px',
		lg:'960px',
		xl:'1200px',
	},
	fontFamily:{
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
		  colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: 'white',
  			foreground: 'var(--foreground)',
			accent:{
				DEFAULT:"#00688B",
				hover:"#00688B"
			},
			primary: {
			  DEFAULT: "#151C35",
			  hover: "#1a2240",
			  light: "#232d4d",
			},
			secondary: {
			  DEFAULT: "#ffffff",
			  hover: "#f5f5f5",
			}
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
