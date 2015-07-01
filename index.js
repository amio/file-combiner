'use strict'

var fs = require('fs')
var combinedStream = require('combined-stream2')

// TODO: encode, callback
module.exports = function(paths){
    var resultStream = combinedStream.create()
    paths.forEach(function(file) {
      if(fs.statSync(file).isFile()){
        resultStream.append(fs.createReadStream(file))
      }
    })
    return resultStream
}
