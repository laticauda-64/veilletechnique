module.exports = {
	reactStrictMode: true,
	images: {
		domains: [
			'images-ext-1.discordapp.net',
			'images-ext-2.discordapp.net',
			'media.discordapp.net',
		],
	},
	webpack: function (config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};
