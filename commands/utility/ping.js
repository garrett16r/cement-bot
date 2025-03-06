const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Test if the bot is alive or died from cement overdose'),
    async execute(interaction) {
        await interaction.reply({ content: 'Pong!', flags: MessageFlags.Ephemeral });
        // interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    },
};