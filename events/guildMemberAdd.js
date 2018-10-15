module.exports = member => {
    let username = member.user.username;
    member.sendMessage('welcome **' + username + '**!');
    member.guild.defaultChannel.send('welcome '+username+'');
};
