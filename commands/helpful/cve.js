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
        let cve = interaction.options.getString('cve_id');
        let name = '';
        cve = cve.toUpperCase();

        if (!cve.match(cveRegex)) {
            await interaction.reply({ content: `CVE "${cve}" is invalid!\n\n*Example cve_id: CVE-2025-24200*`, flags: MessageFlags.Ephemeral });
            return;
        }

        try {
            const response = await fetch(`https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=${cve}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // console.log(data.vulnerabilities[0]);

            name = data.vulnerabilities[0].cve.cisaVulnerabilityName ?? 'No name provided';
            published = data.vulnerabilities[0].cve.published.split('T')[0];
            vulnStatus = data.vulnerabilities[0].cve.vulnStatus;
            description = data.vulnerabilities[0].cve.descriptions[0]?.value.trim();
            baseScore = data.vulnerabilities[0].cve.metrics.cvssMetricV31[0]?.cvssData.baseScore;
            requiredAction = data.vulnerabilities[0].cve?.cisaRequiredAction ?? 'None';
        } catch (error) {
            console.log(error);
        }

        await interaction.reply(`
            **${cve}: ${name}**\nPublished: ${published}\nStatus: ${vulnStatus}\n\n**CVSSv3.1**: ${baseScore}\n\n**Description:**\n${description}\n\n**CISA Required Action:**\n${requiredAction}\n\n[Full Info](https://nvd.nist.gov/vuln/detail/${cve})`,
        );
    },
};