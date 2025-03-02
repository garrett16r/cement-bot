const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with roundtrip latency for debugging'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', flags: MessageFlags.Ephemeral });
        interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    },
};