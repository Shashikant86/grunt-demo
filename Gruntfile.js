module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        // string to put between concatenated files
        separator: ';'
      },
      dist: {
        // files to concat
        src: ['js/*.js'],
        // location of result file
        dest: 'jsmin/<%= pkg.name %>.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
};