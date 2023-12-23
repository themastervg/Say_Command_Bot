const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sendmessage')
        .setDescription('Sends a message to the current channel'),
    async execute(interaction) {
        const { channel, options } = interaction;
        const message = options.getString('message');

        if (!message) {
            return interaction.reply({ content: 'Please provide a message to send.' });
        }

        try {
            await channel.send(message);
            await interaction.reply({ content: 'Message sent!' });
        } catch (error) {
            console.error('Error sending message:', error);
            await interaction.reply({ content: 'There was an error sending the message.' });
        }
    },
};
