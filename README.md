# compat.js

Static analysis tool for detecting browser compatibility issues in JavaScript code.

# Usage

By default, compat will check files ending with `.js` in the current directory.

```
compat
```

To manually specify target files/directories, use the `--target` (`-t`) flag.

```
compat --target fileOne.js fileTwo.js directory
```

By default, compat will not recursively traverse directories to find all `.js` files.
Enable this functionality with the `--recursive` (`-r`) flag.

```
compat --recursive
```

By default, compat will search for all defined features when analysing targets. To specify
what features compat will search for, use the `--features` (`-f`) flag.

```
compat --features es6-bindings let
```

The features flag supports both specifying individual features (like `let` in the above example)
or specifying feature groups (like `es6-bindings`). Use the `--supportedFeatures` and
`--supportedFeatureGroups` flags to show available features and feature groups.

Additionally, individual features or feature groups can be ignored using the `--ignoreFeatures`
(`-i`) flag. The below example will detect all defined ES6 features, except for those
relating to syntax.

```
compat --features es6 --ignoreFeatures es6-syntax
```

When run with the `--enabledFeatures` flag, compat will print out a list of features
that it will be enabled for detection with the provided flags.

By default, compat will check for compatibility issues with the following environments:

- Internet Explorer 11
- Microsoft Edge 13 & 14
- Chrome 54
- Safari 9 & 10
- Firefox 49

Use the `--envs` (`-e`) flag to specify which environments to check for issues. Use the
`---supportedEnvs` flag to show available environments.

```
compat --envs ie11 chrome54
```

All of the above flags can be specified in a config file. By default, compat will try to read
`./.compatrc.json`, but another config file can be specified with the `--config` (`-c`) flag.
The config file must end with `.json`.

```
compat --config ./configs/compat-config.json
```

# Testing

Run tests with:

```
npm test
```

Lint with:

```
npm run lint
```

# License

MIT
