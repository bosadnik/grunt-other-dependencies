# grunt-other-dependencies

> Additional denepdencies for project downloaded direcly as zip and unpacked to defiened folder

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-other-dependencies --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-other-dependencies');
```

## The "other_dependencies" task

### Overview
In your project's Gruntfile, add a section named `other_dependencies` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
   other_dependencies: {
          target: {}       
        },
});
```


### Usage Examples

#### Default Options
Put dummy configuration into initConfig section

```js
grunt.initConfig({
   other_dependencies: {
          target: {}       
        },
});
```
#### package.json config
In your package.json file, put `other_dependencies' section

```js
  
  "otherDependecies": [
    {
      "name": "test-module-one",
      "url": "http://www.osadnik.com/download-zip/test-module-one.zip",
      "destFolder": "other-modules"
    },
    
    {
      "name": "test-module-two",
      "url": "http://www.osadnik.com/download-zip/test-module-two.zip",
      "destFolder": "other-modules"
    }
    
  ],

``` 





#### Grunt configuration
as a separeated task
```js

    grunt.registerTask('otherDeps', [
         'other_dependencies',
        ])

```
... or directly binded to  `build` task:
```js

 grunt.registerTask('build', [
        // 'test',
        'other_dependencies',
        'clean:dist',
        'useminPrepare',
        ...
        ...
        ]
      );

```
then you can just run:
```js
grunt otherDeps
```
or

then you can just run:
```js
grunt build
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
