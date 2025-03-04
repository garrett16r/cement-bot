const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('starter-ctfs')
        .setDescription('Provides a list of good CTFs for beginners'),
    async execute(interaction) {
        const ctfsEmbed = new EmbedBuilder()
                    .setColor(0xFDBB30)
                    .setTitle('Starter CTFs')
                    .setDescription(
                        `
                        **[National Cyber League (NCL)](https://nationalcyberleague.org/)**:
                        - Beginner-friendly CTF with a focus on various offensive skills.\n- Open to students and recent grads still looking for full-time employment.\n- Individual and team-based competitions.\n- $35 registration fee for the season (Extremely worth it).\n- Great for beginners and experienced players alike.\n
                        **[Collegiate Cyber Defense Competition (CCDC)](https://www.nationalccdc.org)**:
                        - Team-based competition where you defend a network from attackers.\n- Focuses on defensive skills and incident response.\n- Great for learning how to secure and defend a network.\n- Open to college students.\n
                        **[Collegiate Penetration Testing Competition (CPTC)](https://cp.tc)**:
                        - Team-based competition where you perform penetration tests on a network.\n- Focuses on offensive skills and red teaming.\n- Great for learning how to attack and exploit a network.\n- Open to college students.\n
                        **[National Centers of Academic Excellence (NCAE) Cyber Games](https://www.ncaecybergames.org)**:
                        - Free online cybersecurity competition.\n- Focuses on various offensive cybersecurity skills.\n- Great for beginners looking to learn and practice basic skills.\n
                        **[CTFTime](https://ctftime.org/)**:
                        - Website that lists upcoming CTFs and events.\n- Great for finding CTFs to participate in.\n- Some CTFs are beginner-friendly, while others are more advanced.
                        `,
                    );

        await interaction.reply({ embeds: [ctfsEmbed] });
    },
};