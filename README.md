# files-combiner

[![Greenkeeper badge](https://badges.greenkeeper.io/amio/files-combiner.svg)](https://greenkeeper.io/)

Combine multile files into a single stream, one by one.

### Usage

```javascript
var combiner = require('files-combiner')

var fileList = [
  'path/to/lib.js',
  'path/to/anotherlib.js',
]
var readableStream = combiner(fileList)
```
