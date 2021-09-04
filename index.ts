import rpc from "discord-rpc";

const client = new rpc.Client({ transport: "ipc" });

client.on("ready", async():Promise<void> => {
  
   await client.setActivity({
        details: "Coding nerd, loves sloths",
        state: "My bot, if you interested in finding new people!",
        startTimestamp: Date.now(),
        largeImageKey: "slothy",
        smallImageKey: "blurple_sloth",
        buttons: [{ label: "Slothy invite", url: "https://discord.com/oauth2/authorize?client_id=826056261610373130&permissions=3761564736&scope=bot%20applications.commands" }, { label: "Epic server", url: "https://discord.com/invite/KDvhzHFfBj" }]
    });
  console.log('Authed for user', client.user.username);
});

client.login({ clientId: "822768554042589234" });
