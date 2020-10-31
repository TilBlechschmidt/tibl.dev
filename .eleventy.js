const { DateTime } = require('luxon');
const fs = require('fs');
const path = require('path');

const feather = require('feather-icons');
const htmlmin = require('html-minifier');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginInclusiveLanguage = require('@11ty/eleventy-plugin-inclusive-language');
const pluginTimeToRead = require('eleventy-plugin-time-to-read');
const pluginLazyImages = require('eleventy-plugin-lazyimages');
const pluginNavigation = require('@11ty/eleventy-navigation');
const pluginRss = require("@11ty/eleventy-plugin-rss");

const plugins = [pluginInclusiveLanguage, pluginTimeToRead, pluginLazyImages, pluginNavigation, pluginRss];

module.exports = eleventyConfig => {
	// ---- Configuration options ---- 
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setDataDeepMerge(true);

	// ---- Plugins ---- 
	plugins.forEach(plugin => eleventyConfig.addPlugin(plugin));

	// ---- Watch targets ---- 
	eleventyConfig.addWatchTarget('./_tmp/style.css');

	// ---- Passthroughs ---- 
	eleventyConfig.addPassthroughCopy("static");
	eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });

	eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

	// ---- Filters & Shortcodes ----
	eleventyConfig.addFilter('keys', object => {
		return Object.keys(object);
	});

	eleventyConfig.addShortcode('version', () => {
		return String(Date.now());
	});

	eleventyConfig.addShortcode('icon', (name, title) => {
		const svg = feather.icons[name].toSvg();
		return `<img src="data:image/svg+xml,${encodeURIComponent(svg)}" style="width: 100%; height: 100%;" alt="${title}" />`;
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
	eleventyConfig.addCollection("tagList", collection => {
		let tagSet = new Set();
		collection.getAll().forEach(item => {
			if ("tags" in item.data) {
				let tags = item.data.tags;

				tags = tags.filter(tag => {
					switch (tag) {
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