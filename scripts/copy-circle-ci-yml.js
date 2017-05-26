const fs = require('fs-extra');

// Async with promises:
fs.copy('circle.yml', 'build/circle.yml')
  .then(() => console.log('Success! Circle CI config copied.'))
  .catch(err => console.error(err));
