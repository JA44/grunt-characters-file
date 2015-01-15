# grunt-characters-file


> get the characters number file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-characters-file --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-characters-file');
```

## The "characters_file" task

### Overview
In your project's Gruntfile, add a section named `characters_file` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  characters_file: {
    options: {
     	alertIfHigher: 10000
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.alertIfHigher
Type: `Number`
Default value: `Number.POSITIVE_INFINITY`

Send an error if a file is higher that the specify value

### Usage Examples

#### Default Options

Show the number of characters for all javascript file in /tmp

```js
grunt.initConfig({
  characters_file: {
    options: {},
    src: {
      '/tmp/*.js',
    },
  },
});
```

#### Custom Options

Show the number of characters for all javascript file in /tmp and alert if the file exceeds the characters limit

```js
grunt.initConfig({
  characters_file: {
    options: {
	alertIfHigher: 10000
    },
    src: '/tmp/*.js',
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

