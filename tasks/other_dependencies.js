/*
 * grunt-other-dependencies
 * https://github.com/BOsadnik/grunt-other-dependencies
 *
 * Copyright (c) 2016 bosadnik
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  // var cwd = process.cwd();
  // console.log(__dirname);
  // process.chdir(__dirname);

  var cwd = process.cwd();
  process.chdir(__dirname);
  process.chdir("..");
  grunt.loadNpmTasks('grunt-downloadfile');
  grunt.loadNpmTasks('grunt-zip');
  process.chdir(cwd);

  grunt.loadNpmTasks('grunt-contrib-clean');
//  //process.chdir(cwd);

  grunt.registerMultiTask('other_dependencies', 'Additional denepdencies for project downloaded direcly as zip and unpacked to defiened folder', function() {

    // Merge task-specific and/or target-specific options with these defaults.

     var _ = require('underscore');
        var pkg =  grunt.file.readJSON('package.json');
        function extractFileName(url){
            var reg = /.[^\/]*\.zip$/i;
            return reg.exec(url)[0].substr(1);

        }

        var  unzip = {};

      if(!grunt.config.data.clean) {grunt.config.data.clean={};}

        _.each(pkg.otherDependecies, function(dep){
                var temp_folder_name = _.random(9999,9999999);
                if(!grunt.config.data.downloadfile) {grunt.config.data.downloadfile = {};}
                if(!grunt.config.data.downloadfile.files) {grunt.config.data.downloadfile.files = [];}
                if(!grunt.config.data.clean.destFolder) {grunt.config.data.clean.destFolder=[];}
                
                grunt.config.data.downloadfile.files.push({
                        "url":dep.url,
                        "dest":"_temp/"+temp_folder_name
                    });

                if(!grunt.config.data.unzip) {grunt.config.data.unzip = {};}

                var destFolder = dep.destFolder+"/"+dep.name;
                grunt.config.data.unzip[destFolder] = "_temp/"+temp_folder_name+"/"+extractFileName(dep.url);
                
                grunt.config.data.clean.destFolder.push(destFolder);


        });
    
    
    grunt.config.data.clean.tmp = ['_temp'];

    
    grunt.task.run('clean:destFolder');
    grunt.task.run('downloadfile');
    grunt.task.run('unzip');
    grunt.task.run('clean:tmp');

    
/*    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
*/

  });

};
