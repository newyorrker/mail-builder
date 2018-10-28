var destPath = 'public';

var config = {

		src: {
				root: 'src',
				sass: 'src/sass',
				js  : 'src/js'
		},
		dest: {
				root : destPath,
				css  : destPath + '/css'
		},
		sass: {
				compressed: {
						outputstyle: 'compressed'
				},
				expanded: {
						outputstyle: 'expanded'
				}
		},
		setEnv: function(env) {
				this.dev = env;
		},

};

module.exports = config;