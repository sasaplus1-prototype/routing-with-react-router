webpack = require 'webpack'

module.exports =

  context: __dirname

  entry:
    index: './index.jsx'
    bundle: [
      'flux'
      'keymirror'
      'object-assign'
      'react'
      'react-router'
    ]

  output:
    path: './'
    publicPath: './'
    filename: '[name].js'
    chunkFilename: 'chunk-[id].js'

  module:
    loaders: [
      { test: /\.jsx$/, exclude: /bower_components|node_modules/, loader: 'babel?stage=0' }
    ]

  resolve:
    extensions: [
      ''
      '.jsx'
      '.js'
    ]
    modulesDirectories: [
      'node_modules'
      'bower_components'
    ]

  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    )
    new webpack.NoErrorsPlugin
    new webpack.IgnorePlugin(/vertx/)
    new webpack.optimize.OccurenceOrderPlugin
    new webpack.optimize.DedupePlugin
    new webpack.optimize.AggressiveMergingPlugin
    new webpack.optimize.CommonsChunkPlugin('bundle', 'bundle.js')
  ].concat(
    if process.argv.some (arg) ->
      /^(?:-p|--optimize-minimize)$/.test(arg)
    then [
      new webpack.DefinePlugin(
        log: -> return
      )
      new webpack.optimize.UglifyJsPlugin(
        output: comments: require('uglify-save-license')
      )
    ]
    else [
      new webpack.DefinePlugin(
        log: ->
          if console?
            # for IE8 and IE9
            if typeof console.log is 'object'
              Function::apply.call(console.log, console, arguments)
            # for other browsers
            else
              console.log.apply(console, arguments)
          return
      )
    ]
  )
