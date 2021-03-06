 
module.exports = function(grunt) {

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  mocha_casperjs: {
      options: {
               },
      files: {
             src: ['test/**/*']
             }
      },
  express: {
    options: {
      port: '5000'
    },
    dev: {
      options: {
        script: './server.js'
      }
    },
    prod: {
      options: {
        script: './server.js',
        node_env: 'production'
      }
    },
    test: {
      options: {
        script: './server.js'
      }
    }
  },
})
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.registerTask('default', ['express','mocha_casperjs']);
};
