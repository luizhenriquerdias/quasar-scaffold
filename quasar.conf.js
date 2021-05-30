/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli/quasar-conf-js

/* eslint-env node */
const ESLintPlugin = require('eslint-webpack-plugin');
/* eslint func-names: 0 */
/* eslint global-require: 0 */
const { configure } = require('quasar/wrappers');
const path = require('path');

module.exports = configure(() => ({
	// https://v2.quasar.dev/quasar-cli/supporting-ts
	supportTS: false,

	// https://v2.quasar.dev/quasar-cli/prefetch-feature
	// preFetch: true,

	// app boot file (/src/boot)
	// --> boot files are part of "main.js"
	// https://v2.quasar.dev/quasar-cli/boot-files
	boot: [
		'axios',
		'notify'
	],

	// https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
	css: [
		'app.scss'
	],

	// https://github.com/quasarframework/quasar/tree/dev/extras
	extras: [
		'fontawesome-v5',
		'roboto-font',
		'material-icons'
	],

	// Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
	build: {
		vueRouterMode: 'hash', // available values: 'hash', 'history'

		// transpile: false,

		// Add dependencies for transpiling with Babel (Array of string/regex)
		// (from node_modules, which are by default not transpiled).
		// Applies only if "transpile" is set to true.
		// transpileDependencies: [],

		// rtl: true, // https://v2.quasar.dev/options/rtl-support
		// preloadChunks: true,
		// showProgress: false,
		// gzip: true,
		// analyze: true,

		// Options below are automatically set depending on the env, set them if you want to override
		// extractCSS: false,

		// https://v2.quasar.dev/quasar-cli/handling-webpack
		// "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
		chainWebpack(chain) {
			chain.plugin('eslint-webpack-plugin')
				.use(ESLintPlugin, [{ extensions: ['js', 'vue'] }]);
			chain.resolve.alias
				.set('store', path.resolve(__dirname, './src/store'));
		}
	},

	// Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
	devServer: {
		https: false,
		port: 8080,
		open: true // opens browser window automatically
	},

	// https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
	framework: {
		config: {},

		// iconSet: 'material-icons', // Quasar icon set
		// lang: 'en-US', // Quasar language pack

		// For special cases outside of where the auto-import stategy can have an impact
		// (like functional components as one of the examples),
		// you can manually specify Quasar components/directives to be available everywhere:
		//
		// components: [],
		// directives: [],

		// Quasar plugins
		plugins: ['Notify']
	},

	// animations: 'all', // --- includes all animations
	// https://v2.quasar.dev/options/animations
	animations: [],

	// https://v2.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
	pwa: {
		workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
		workboxOptions: {}, // only for GenerateSW

		manifest: {
			name: 'Pokedex Vue',
			short_name: 'Pokedex Vue',
			description: 'A simple pokedex make with Vue',
			display: 'standalone',
			orientation: 'portrait',
			background_color: '#ffffff',
			theme_color: '#027be3',
			icons: [
				{
					src: 'icons/icon-128x128.png',
					sizes: '128x128',
					type: 'image/png'
				},
				{
					src: 'icons/icon-192x192.png',
					sizes: '192x192',
					type: 'image/png'
				},
				{
					src: 'icons/icon-256x256.png',
					sizes: '256x256',
					type: 'image/png'
				},
				{
					src: 'icons/icon-384x384.png',
					sizes: '384x384',
					type: 'image/png'
				},
				{
					src: 'icons/icon-512x512.png',
					sizes: '512x512',
					type: 'image/png'
				}
			]
		}
	}
}));
