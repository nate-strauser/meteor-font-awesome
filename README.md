font-awesome
===================

Meteor package for [Font-Awesome](http://fortawesome.github.com/Font-Awesome/).


## Browser policy
if you are using the `browser-policy` package, you'll need to add this line to a file in your `/server/` directory to allow the browser to load from the cdn
```
BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
```


## 4.0 Upgrade Issues

Be aware of the class name changes, [what's new in Font Awesome](http://fortawesome.github.io/Font-Awesome/whats-new/)
and [upgrading from v3 to v4](https://github.com/FortAwesome/Font-Awesome/wiki/Upgrading-from-3.2.1-to-4)
