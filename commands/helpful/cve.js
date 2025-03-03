const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cve')
        .setDescription('Shows info about the given CVE')
        .addStringOption(option =>
            option.setName('cve_id')
            .setDescription('The CVE to view info on. Formatted as CVE-YEAR-12345')
            .setRequired(true),
        ),
    async execute(interaction) {
        const cveRegex = '^CVE-\\d{4}-\\d{4,}$';
        const cve = interaction.options.getString('cve_id');

        if (!cve.match(cveRegex)) {
            await interaction.reply({ content: `CVE "${cve}" is invalid!\n\n*Example cve_id: CVE-2025-24200*`, flags: MessageFlags.Ephemeral });
            return;
        }

        // Only returns a link to the CVE info currently.
        // Later, find an API to call for detailed info that can go into an embed
        await interaction.reply(`https://nvd.nist.gov/vuln/detail/${cve}`);
    },
};