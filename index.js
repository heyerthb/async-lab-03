// create 3 different things and modify the person.json file
// one file brings in all the modules and uses them
// the three js is lib should be file-edit-await/callback/promise respectively

'use strict';

const filePath = process.argv[2]; //look up what this means

const useCallback = require('./lib/file-edit-callback.js');
// const usePromise = require('./lib/file-edit-promise.js');
const useAwait = require('./lib/file-edit-async.js');

useCallback.read(filePath, (err, data)=> {
  if (err){
    console.error(err);
  } else {
    data.lastName = 'Changed from a callback';
    useCallback.write(filepath, data, (err)=> {
      if (err){
        console.error(err);
      }else {
        useCallback.read(filepath, (err, newData) => {
          console.log(newData);
        });
      }
    });
    console.log(data);
  }
});

async function calluseAwait(){
  const contents = await useAwait.read(filePath);
  contents.lastName = 'changed with await';
  await useAwait.write(filePath, contents);
  const newContents = await useAwait.read(filePath);
  return newContents;
}

calluseAwait().then((fileData) => console.log(fileData));