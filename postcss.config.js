const productionPlugins = process.env.NODE_ENV === 'production' ? [
	require('postcss-clean')
] : [];

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss')('./tailwind.config.js'),
		require('postcss-preset-env')({ stage: 1 }),
		...productionPlugins
	],
};
