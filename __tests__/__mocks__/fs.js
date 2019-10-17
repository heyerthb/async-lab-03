// 'use strict';

// module.exports = exports = {};

// exports.readFile = (file, cb) => {
//   if( file.match(/bad/i) ) {
//     cb('Invalid File');
//   }
//   else {
//     cb(undefined, new Buffer('File Contents'));
//   }
// };

'use strict';

module.exports = exports = {};

exports.readFile = ('./data/person.json', cb) => {
  if( '.data/person.json'.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, Buffer.from('File Contents'));
  }
};