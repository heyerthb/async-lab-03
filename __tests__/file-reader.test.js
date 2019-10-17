'use strict';

jest.mock('fs');

// grab reader
const fileReader = require('../lib/file-reader');




// describe what the test should be doing
describe ('Testing file reader module', () => {
  it('Throws error when bad file path is given', (done)=>{
    let file = `${__dirname}../data/bad.txt;`
    fileReader(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).not.toBeDefined();
      expect(err).toBeDefined();

      expect(err).toEqual('invalid file');
      done();
    });
  });
});