const app = require('./app');

test('Is the app working', () => { 
    //const result = app();
    //expect(result).toBe("Write one-part-joke in a sentence, or on it's own to get one part joke.\nWrite two-part-joke in a sentence, or on it's own to get a joke with setup and delivery.")
    app("This app");
  });
  

