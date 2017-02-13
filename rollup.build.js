const rollup = require('rollup').rollup
const babel = require('rollup-plugin-babel')

rollup({
  entry: './javascripts/scs-commerce.main.js',
  external: ['zepto'],
  plugins: [ babel({
    exclude: 'node_modules/**'
  }) ]
})
.then((bundle) => bundle.write({
  format: 'amd',
  dest: 'dist/javascripts/scs-commerce.main.js'
}))
.then(() => console.log('finished'))
.catch(e => console.log(e))
