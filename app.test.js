const app = require('./app');

test('Testing the app commands', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    app(callback);
  });