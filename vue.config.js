module.exports = {
  // ...
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/styles/_variable.scss";`
      }
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    lintOnSave: false
  }
}