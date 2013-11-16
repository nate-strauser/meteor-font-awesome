Package.describe({
	summary: "Latest version Font-Awesome"
});

Package.on_use(function (api){
	api.add_files('lib/font-awesome/fonts/fontawesome-webfont.eot', 'client');
	api.add_files('lib/font-awesome/fonts/fontawesome-webfont.svg', 'client');
	api.add_files('lib/font-awesome/fonts/fontawesome-webfont.ttf', 'client');
	api.add_files('lib/font-awesome/fonts/fontawesome-webfont.woff', 'client');
	api.add_files('lib/font-awesome/fonts/FontAwesome.otf', 'client');
	api.add_files('lib/font-awesome/css/font-awesome.css', 'client');
	
	//font path override
	api.add_files('path-override.css', 'client');
});
