'use strict';

const fs = require('fs');
// const faker = require('faker');


// @param {string} filePath - the relative path
// @param{function} cb - error first callback

exports.read = (filePath, cb) => {
  fs.readFile(filePath, (err, data) => { //checking the documentation was the expecation here to find what you're looking for.
    if(err){
      cb(err);
    }else{
      try{
        console.log(data);
        cb(null, JSON.parst(data.toString()));

      } catch(e){
        (cb(e));
      }
    }
  });
};

// @param{string}file - the location to write to
// @param{String or an Object} text- a text info to write at the provided file path
// @param{functionn} cb - our callback function used to offload our data

exports.write = (file, changes, cb) => {
  try {
    let bufferText = JSON.stringify(changes);
    const buffer = Buffer.from(bufferText);
    fs.writeFile(file, buffer, cb);
  } catch (e){
    cb(e);
  }
};
