require('babel-core/register')({
  "ignore": [
    'node_modules/**/*'
  ]
});

var path = require('path');
require('./src/delivery/console')({
  pathHistoryFile: path.join(__dirname, 'history.json'),
});
