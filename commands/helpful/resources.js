const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resources')
        .setDescription('Provides a list of useful cybersecurity resources.'),
    async execute(interaction) {
        // Add list of useful resources. Send as a nice embed block.
        const resourcesEmbed = new EmbedBuilder()
            .setColor(0xf0ec00)
            .setTitle('Cyber Resources')
            .setDescription(
                `
                **Practice**:
                - [TryHackMe](https://tryhackme.com/)\n- [Hack The Box](https://hackthebox.com/)\n- [PortSwigger Web Security Academy](https://portswigger.net/web-security)\n
                **Tools**:
                - [CyberChef](https://gchq.github.io/CyberChef/)
                `,
            );
            // .setFooter('Send resources you wanted added to @Syn');

        await interaction.reply({ embeds: [resourcesEmbed] });
    },
};