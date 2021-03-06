const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];
const commandFiles = fs.readdirSync('./assets/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./assets/commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationCommands(process.env.DISCORD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);