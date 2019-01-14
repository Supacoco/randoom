import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify-es'

export default {
  input: 'src/index.js',
  plugins: [ 
    uglify(),
    buble({ 
      transforms: {
        generator: false
      }
    })
  ],
  output: [
    { file: 'dist/bundle.cjs.js', format: 'cjs' },
    { file: 'dist/bundle.umd.js', name: 'randoom', format: 'umd' },
    { file: 'dist/bundle.js', format: 'es' }
  ]
}