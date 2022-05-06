const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const commands = [
  {
    name: 'ping',
    description: 'Return pong',
  },
  {
      
  }
];

const rest = new REST({version: '9'}).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.DISCORD_ID), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();