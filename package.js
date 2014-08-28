Package.describe({
	name: "natestrauser:font-awesome",
  summary: "Latest version Font-Awesome loaded via CDN",
  version: "4.1.1",
  git: "https://github.com/nate-strauser/meteor-font-awesome.git"
});

Package.on_use(function (api){
  api.versionsFrom("METEOR@0.9.0");
	api.add_files('load.js', 'client');
});