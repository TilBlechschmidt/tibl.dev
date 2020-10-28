module.exports = {
	purge: {
		mode: 'layers',
		content: ['_site/**/*.html'],
		options: {
			whitelist: [],
		},
	},
	theme: {
		extend: {
			colors: {
				change: 'black',
			},
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/typography')
	],
};
