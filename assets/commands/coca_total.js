const { SlashCommandBuilder } = require('@discordjs/builders');
const ExcelBuilder = require('../classes/ExcelBuilder')

/*
	Command /coca_total
	Returns Excel file with all coca data
*/
module.exports = {
	data: new SlashCommandBuilder()
		.setName('coca_total')
		.setDescription('Get the COCA ranking'),
		//.setDefaultPermission(false),
	async execute(interaction) {
		await interaction.reply({ content: 'Working on the report...', ephemeral: true });
		let excel = new ExcelBuilder('coca');
        let attachment;
        try {
            attachment = await excel.export();
        } catch (error) {
            await interaction.editReply({ content: 'Error during export creation !', ephemeral: true });
			return;
        }
        await interaction.editReply({ files: [attachment], ephemeral: true });
        excel.clean();
	}
};
