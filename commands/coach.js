const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coach')
		.setDescription('Shows Number of people with role coach.'),
	async execute(interaction) {
		await interaction.guild.members.fetch()
            .then((users) => {
                let count = 0;
                users.forEach(user => {
                    if (user._roles.includes("507655031110238210")){
                        count++;
                    }
                });
                return interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nMembers with role Coach: ${count}`);
            })
            .catch(error => {
                console.log(error);
                return interaction.reply(`ERRO. Verifica os logs`);
            });
	},
};