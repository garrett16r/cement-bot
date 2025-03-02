const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('starter-ctfs')
        .setDescription('Provides a list of good CTFs for beginners'),
    async execute(interaction) {
        await interaction.reply('Placeholder');
    },
};