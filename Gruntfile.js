module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				includePaths: ['../FoundationPress/bower_components/foundation/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/app.css': 'scss/app.scss'
				}        
			}
		},

		// copy: {
		// 	main: {
		// 		expand: true,
		// 		cwd: '../FoundationPress/bower_components',
		// 		src: [
		// 			'modernizr/modernizr.js',
		// 			'jquery/dist/jquery.min.js',
		// 			'foundation/js/foundation.min.js'
		// 		],
		// 		dest: 'js'
		// 	},
		// },

		uglify: {

			// base: {
			// 	files: [{
			// 		src: [
			// 			'../FoundationPress/bower_components/modernizr/modernizr.js',
			// 			'../FoundationPress/bower_components/jquery/dist/jquery.min.js',
			// 		],
			// 		dest: 'js/base.min.js'
			// 	}]
			// },
			custom: {
				files: [{
					src: [
						// 'js/custom/*.js',
						'../FoundationPress/bower_components/foundation/js/foundation.min.js',
						// add your plugin here. Ex:
						// 'js/custom/imagesloaded.pkgd.min.js',
						// 'js/custom/isotope.pkgd.min.js',
						'js/custom/init-foundation.js',
						'js/custom/app.js',
					],
					dest: 'js/custom.min.js'
				}]
			},
		},

		// concat: {
		// 	options: {
		// 		separator: ';',
		// 	},
		// 	dist: {
		// 		src: [
		// 			'js/base.min.js',
		// 			'js/custom.min.js'
		// 		],

		// 		dest: 'js/app.min.js',
		// 	},

		// },

		watch: {
			// options: {
			// 	livereload: true
			// },
			grunt: { files: ['Gruntfile.js'] },

			sass: {
				files: 'scss/**/*.scss',
				tasks: ['sass']
			},
			js: {
				files: 'js/custom/**/*.js',
				tasks: ['uglify:custom']
			},
			triggerLiveReloadOnTheseFiles: {
				// We use this target to watch files that will trigger the livereload
				options: { livereload: true },
				files: [
					// Anytime css is edited or compiled by sass, trigger the livereload on those files
					'css/app.css',
					// In parent theme also decomment below
					// '../FoundationPress/scss/**/*.scss',
					
					// Or a js file
					'js/custom.min.js',
					// '../**/*.js'
					
					// Or a php file
					// '../**/*.php','./**/*.php',
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// grunt.registerTask('build', ['copy', 'uglify', 'concat', 'sass']);
	grunt.registerTask('build', ['uglify', 'sass']);
	grunt.registerTask('default', [ 'build','watch']);
}
