const { DateTime } = require("luxon");

const htmlmin = require('html-minifier');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginInclusiveLanguage = require('@11ty/eleventy-plugin-inclusive-language');
const pluginTimeToRead = require('eleventy-plugin-time-to-read');
const pluginNavigation = require('@11ty/eleventy-navigation');
const pluginRss = require("@11ty/eleventy-plugin-rss");

const plugins = [pluginInclusiveLanguage, pluginTimeToRead, pluginNavigation, pluginRss];

module.exports = eleventyConfig => {
	// ---- Configuration options ---- 
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setDataDeepMerge(true);

	// ---- Plugins ---- 
	plugins.forEach(plugin => eleventyConfig.addPlugin(plugin));

	// ---- Watch targets ---- 
	eleventyConfig.addWatchTarget('./_tmp/style.css');

	// ---- Passthroughs ---- 
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });

	eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

	// ---- Filters & Shortcodes ---- 
	eleventyConfig.addShortcode('version', () => {
		return String(Date.now());
	});

	eleventyConfig.addFilter("readableDate", dateObj => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
	});

	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// ---- Collections ---- 
	eleventyConfig.addCollection("tagList", function (collection) {
		let tagSet = new Set();
		collection.getAll().forEach(function (item) {
			if ("tags" in item.data) {
				let tags = item.data.tags;

				tags = tags.filter(function (item) {
					switch (item) {
						// this list should match the `filter` list in tags.njk
						case "all":
						case "nav":
						case "post":
						case "posts":
							return false;
					}

					return true;
				});

				for (const tag of tags) {
					tagSet.add(tag);
				}
			}
		});

		// returning an array in addCollection works in Eleventy 0.5.3
		return [...tagSet];
	});

	// ---- Template overrides ---- 
	let markdownLibrary = markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}).use(markdownItAnchor, {
		permalink: true,
		permalinkClass: "direct-link",
		permalinkSymbol: "#"
	});
	eleventyConfig.setLibrary("md", markdownLibrary);

	// ---- Transforms ---- 
	eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
		if (process.env.ELEVENTY_PRODUCTION && outputPath && outputPath.endsWith('.html')) {
			return htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			})
		} else {
			return content;
		}
	});
};