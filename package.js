Package.describe({
	summary: "Latest version Font-Awesome"
});

Package.on_use(function(api){
	api.add_files([
		'font-awesome/font/fontawesome-webfont.eot',
		'font-awesome/font/FontAwesome.otf',
		'font-awesome/font/fontawesome-webfont.ttf',
		'font-awesome/font/fontawesome-webfont.woff',
		'font-awesome/font/fontawesome-webfont.svg',
		'font-awesome/css/font-awesome.css'
	], 'client');
});