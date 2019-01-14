var pkg = require('./package.json');

module.exports = {
    root: './',
    output: './book',
    title: '最全 Android 进阶路线知识图谱',
	author : 'FeelsChaotic',
	title : '最全 Android 进阶路线知识图谱',
	description : '你想要的最全 Android 进阶路线知识图谱+干货资料收集',
    plugins: ['-lunr', '-search','search-pro','fontsettings','splitter'],
    variables: {
        version: pkg.version
    },
	pluginsConfig: {
        'theme-default': {
             'showLevel': true
        },
		'tbfed-pagefooter': {
			'copyright':'Copyright &copy FeelsChaotic 2019'
		}
	}	
};
