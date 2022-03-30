import dotenv from 'dotenv';
dotenv.config();
import * as rpc from 'discord-rpc';
//Importing things we need for this

let client = new rpc.Client({ transport: 'ipc' });

(async () => {
  client.on('ready', async() => {
    //Defining what is going to be on the rich presence
    await client.setActivity({
      buttons: [{ label: "github", url: "https://github.com/LaZeAsh"}], //Button and it's redirect
      details: "Discord Rich Presence Status",
      largeImageKey: "rpc", //Name of the image you added on developer portal
      largeImageText: "Hello there" //What will happen if you hover over the image
    })
    //Confirmation Message that the rich presence is activated
    .then(() => {
      console.log("Rich Presence Activated");
    })
    //If error catch it
    .catch((error) => {
      console.log(error);
    })
  })
  //Connect to discord client
  client.login({ clientId: process.env.APPLICATION_ID as string }).catch((error) => {
    console.log(error);
  })
})()

//Detailed information on how to set the image in README.md