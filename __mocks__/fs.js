'use strict';

// const file = '../../data/person.json'
let fileContents = 'Test string';

exports.readFile = (file, cb)=>{
  
  if (file.match(/bad/i)){
    cb('invalid file');
  } else {
    cb(undefined, Buffer.from(fileContents));
  }
};

exports.writeFile = (file, buffer, cb) => {
  if (file.match(/bad/i)){
    cb('invalid file');
  } else {
    fileContents = buffer;
    cb(undefined, fileContents);

  }
};
