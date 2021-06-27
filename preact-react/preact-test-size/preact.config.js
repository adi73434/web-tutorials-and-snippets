
export default (config, env, helpers, options) => {
	if (env.isProd) {
		// disable sourcemaps
		config.devtool = false;
	}
	
	config.output.publicPath = "/";
	
	// use the public path in your app as 'process.env.PUBLIC_PATH'
	config.plugins.push(
		new helpers.webpack.DefinePlugin({
			"process.env.PUBLIC_PATH": JSON.stringify(config.output.publicPath || "/"),
		}),
	);
};
