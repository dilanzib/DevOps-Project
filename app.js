const { App } = require("@slack/bolt");
require("dotenv").config();
const express = require('express');
//https://github.com/node-fetch/node-fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Initializes your app with your bot token and signing secret
 const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.A_TOKEN
}); 


app.command("/knowledge", async ({ command, ack, say }) => {
  try 
  {
    await ack();
    say("Write one-part-joke in a sentence, or on it's own to get one part joke.");
    say("Write two-part-joke in a sentence, or on it's own to get a joke with setup and delivery.");

  } 
  catch (error) 
  {
    console.error(error);
  }
});  


 app.message(/one-part-joke/, async ({ command, say }) => {
  try 
  {
    const info= await fetch('https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode')
    const joke = await info.json();
    say(joke.joke);
    console.log(joke);
  } 
  catch (error) 
  {
    console.error(error);
  }
});


app.message(/two-part-joke/, async ({ command, say }) => {
  try 
  {
    //say("Yaaay! that command works!");
    const seconInfo= await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart&safe-mode');
    const twoPart = await seconInfo.json();
    say(twoPart.setup);
    say(twoPart.delivery);
    console.log(twoPart);
  } 
  catch (error)
  {
    console.error(error);
  }
});  


(async () => {
  const port = 3000
  // Start your app
  await app.start(process.env.PORT || port);
  //await app.start();
  console.log(`⚡️ Slack bot is running port ${port}!`);
})();


//app.listen(3000)