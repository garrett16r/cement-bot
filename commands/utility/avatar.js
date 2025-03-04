const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Gets the profile picture of a user')
        .addUserOption(option =>
            option.setName('user')
            .setDescription('The user to get the avatar of')
            .setRequired(true),
        ),
    async execute(interaction) {
        await interaction.reply(interaction.options.getUser('user').displayAvatarURL({ dynamic: true }));
    },
};