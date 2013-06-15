meteor-font-awesome
===================

Meteorite smart package for font awesome
[Font-Awesome](http://fortawesome.github.com/Font-Awesome/)

## How to install
1. `npm install -g meteorite` (if not already installed)
2. `mrt add font-awesome`

## 3.1 Upgrade Issues
you may get this when running `mrt update`

```
"There was a problem checking out " + self.checkoutType + ": " + (self.co
                                                                    ^
There was a problem checking out tag: v0.1.6
```

to resolve this run

```
mrt uninstall --system
mrt update
```

See [here](https://github.com/nate-strauser/meteor-font-awesome/issues/5) for more details/background
