'use strict';



jest.mock('fs');


const fileEdit = require('../lib/file-edit-async.js');


describe('tests file handler', () =>{
  
  it ('writes to a file using an async await', () => {
    fileEdit.write('test.json', {name: 'test'}, (err, data) => {
      expect(err).not.toBeDefined();
      expect(data).toBeDefined();
    });
  });

  it ('defines err with bad path', () => {
    fileEdit.write('bad.txt', {name: 'test'}, (err, data) => {
      expect(err).toBe('Invalid File');
      expect(data).not.toBeDefined();
    });
  });
});