'use strict';

const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

exports.read = (file) => readFile(file)
  .then(buffer => {
    return JSON.parse(buffer.toString());
  })
  .catch(e => {
    throw e;
  });

exports.write = (file, text) => {
  let textString = JSON.stringify(text) || text;
  let contents = Buffer.from(textString);
  return writeFile(file, contents)
    .then(results => results)
    .catch(err => {
      throw err;
    });
};