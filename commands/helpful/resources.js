const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resources')
        .setDescription('Provides a list of useful cybersecurity resources.'),
    async execute(interaction) {
        const resourcesEmbed = new EmbedBuilder()
            .setColor(0xFDBB30)
            .setTitle('Cyber Resources')
            .setDescription(
                `
                **Practice**:
                - [TryHackMe](https://tryhackme.com/)\n- [Hack The Box](https://hackthebox.com/)\n- [PicoCTF](https://picoctf.com/)\n- [OverTheWire](https://overthewire.org/wargames/)\n
                **Tools**:
                - [CyberChef](https://gchq.github.io/CyberChef/)\n- [HexEd.it](https://hexed.it/)\n- [Exploit Database](https://exploit-db.com/)\n- [VirusTotal](https://virustotal.com/)\n
                **Learning**:
                - [PortSwigger Web Security Academy](https://portswigger.net/web-security)\n- [Cybrary](https://cybrary.it/)\n- [AzureGOAT](https://github.com/ine-labs/AzureGoat)\n
                *Send resources ideas to <@164534150030819328> or [create an issue](https://github.com/garrett16r/cement-bot/issues)*
                `,
            );

        await interaction.reply({ embeds: [resourcesEmbed] });
    },
};