import buble from "rollup-plugin-buble"
import uglify from "rollup-plugin-uglify-es"

export default {
  input: "src/index.js",
  plugins: [
    uglify(),
    buble({
      transforms: {
        generator: false
      }
    })
  ],
  output: [
    { file: "dist/bundle.cjs.js", sourcemap: true, format: "cjs"  },
    { file: "dist/bundle.umd.js", sourcemap: true, name: "randoom", format: "umd" },
    { file: "dist/bundle.js", sourcemap: true, format: "es" }
  ]
}
