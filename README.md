Installation
------------

1. The site uses the following meteorite packages. To install, run:

```
    mrt add router
```

1. The app uses a local meteorite package for user logins (forked from
   accounts-ui-bootstrap-3 repo). It is stored as a git submodule for now. To
   initialize it, from your git root directory run:

```
    git submodule init
    git submodule update
```

1. You are all set. You can now launch the site with:

```
    meteor run
```
