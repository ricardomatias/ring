import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'index.js',
		output: {
			name: 'ring',
			file: pkg.browser,
			format: 'umd',
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: 'node_modules/**',
			}),
			terser(),
		],
	},
];
