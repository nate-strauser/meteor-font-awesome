meteor-font-awesome
===================

Meteorite smart package for [Font-Awesome](http://fortawesome.github.com/Font-Awesome/).

## How to install
1. `npm install -g meteorite` (if not already installed)
2. `mrt add font-awesome`

## Browser policy
if you are using the `browser-policy` package, you'll need to add this line to a file in your `/server/` directory to allow the browser to load from the cdn
```
BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
```


## 4.0 Upgrade Issues

Be aware of the class name changes, [what's new in Font Awesome](http://fortawesome.github.io/Font-Awesome/whats-new/)
and [upgrading from v3 to v4](https://github.com/FortAwesome/Font-Awesome/wiki/Upgrading-from-3.2.1-to-4)


## 3.1 Upgrade Issues

You may get this when running `mrt update`

```
"There was a problem checking out " + self.checkoutType + ": " + (self.co
                                                                    ^
There was a problem checking out tag: v0.1.6
```

to resolve this, run:

```
mrt uninstall --system
mrt update
```

See [here](https://github.com/nate-strauser/meteor-font-awesome/issues/5) for more details/background.
