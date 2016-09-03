module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    },
    sass: {
        options: { 
            style: 'compact',
            update: false
        },
        dist: {
            files: {
                'css/main.css': 'sass/main.sass'
            }
        }
    },
    autoprefixer: {
      options: {
        browsers: ['last 10 versions', 'ie 8', 'ie 9']
      },
      your_target: {
        files: {
            'css/main.css': 'css/main.css'
        }
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    }, 
    watch: {
      scripts: {
        files: ['**/*.sass', 'node_modules/materialize-css/sass/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false,
        },
      },
    }

  });
 

  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'watch']);

};