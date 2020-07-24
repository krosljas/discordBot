module.exports = {
    name: 'greeting',
    description: 'Greeting',
    execute(message, args) {
        message.channel.send(`Greetings, ${message.author.username}`);
    },
};