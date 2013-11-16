Package.describe({
	summary: "Latest version Font-Awesome loaded via CDN"
});

Package.on_use(function (api){
	api.add_files('load.js', 'client');
});