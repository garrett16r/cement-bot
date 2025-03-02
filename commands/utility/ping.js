const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with "Pong!" to check connection'),
    async execute(interaction) {
        const sent = await interaction.reply('Pinging...');
        interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    },
};