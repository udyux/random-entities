'use strict'
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const eslint = require('gulp-eslint')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const rollup = require('gulp-better-rollup')
const sourcemaps = require('gulp-sourcemaps')
const version = require('../package.json').version

const plugins = [
	require('rollup-plugin-node-resolve')({ module: true, browser: true }),
	require('rollup-plugin-commonjs')({ include: 'node_modules/**' }),
	require('rollup-plugin-babel')({ presets: ['es2015-rollup'] }),
	require('rollup-plugin-json')()
]

const config = {
  entry: '../src/*.js',
	dist: '../',
	watch: '../src/*.js',
	eslint: { fix: true },
	rollup: {
		format: 'umd',
		name: 'RandomEntities',
		banner: `/*! random-entities v${version} */`
	}
}

// build
gulp.task('build', () =>
	gulp.src(config.entry)
		.pipe(plumber(function(e) {
			let msg = (e.loc.file)
				? `\n[JS Error] ${e.loc.file}: ${e.message} (${e.loc.line}:${e.loc.column})\n`
				: `\n[JS Error] ${e.message}\n`

			console.log(msg)
			this.emit('end')
		}))
		.pipe(eslint(config.eslint))
		.pipe(eslint.format())
		.pipe(sourcemaps.init())
		.pipe(rollup({ plugins }, config.rollup))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dist)))

// dev
gulp.task('dev', ['build'], () => {
	gulp.watch(config.watch, ['build'])
})
