const app = require('./app');

test("Is the app working", () => {

    const result =app.knowText;
    expect(result).toBe("Write one-part-joke in a sentence, or on it's own to get one part joke. \n Write two-part-joke in a sentence or on it's own to get a joke with setup and delivery.");

    const urlMatch =app.jokeUrl;
    expect(urlMatch).toBe("https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode");
    
    const twoUrlMatch = app.twoJokeUrl;
    expect(twoUrlMatch).toBe("https://v2.jokeapi.dev/joke/Programming?type=twopart&safe-mode")
    
});
