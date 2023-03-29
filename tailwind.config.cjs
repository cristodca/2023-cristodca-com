/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'primary': '#657ED4',
        'secondary': '#9452C8',
        'danger': '#FF5B48',
        'alert': '#D0B72B',
        'light': '#fafafa',
        'dark': '#272727',
      }
    },
	},
	plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}
