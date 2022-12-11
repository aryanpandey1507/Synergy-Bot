const discord = require('discord.js')
const client = new discord.Client()

let days =0;
let flag = new Boolean(false);

client.on('ready', () => {
    console.log('Connected as ')

    // client.user.setActivity("With Javascript");     // Setting Status of Bot
    client.user.setActivity("youtube", { type: "WATCHING" })

    // Lets See How many servers bot has been added to
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);

        guild.channels.cache.forEach((channel) => {
            console.log(`- ${channel.name} ${channel.type} ${channel.id}`);

        })
    })

    // General text id : 759783892256686141

    // Lets send a message via bot in specific channel via channel id

    //    let general = client.channels.cache.get('759783892256686141');
    //    general.send("Hello New People!!") 

})

//-----------------------------------------------------------------------------------------------------

function jokes(message) {
    let joke = [
        `Q: Why was six scared of seven?
            A: Because seven "ate" nine.`,
        `Q: Why couldn't the leopard play hide and seek?
            A: Because he was always spotted.`,
        "Chintu is a Better coder than you 🤣",
        `Q: Can a kangaroo jump higher than the Empire State Building?
            A: Of course. The Empire State Building can't jump.`,
        `Q: Can a kangaroo jump higher than the Empire State Building?
            A: Of course. The Empire State Building can't jump.`,
        "Want to hear a Potassium joke? K.",
        "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
        "One man’s crappy software is another man’s full-time job",
        "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
        "Aise Immediate nahi soche hai , But Sochege"
    ]
    let randomjoke = joke[Math.floor(Math.random() * joke.length)];
    message.channel.send(randomjoke);
};




//---------------------------------------------------------------------------------------------------------------------------------------

client.on('message', (message) => {

    if (message.author == client.user) {
        return
    }

    if (message.content == "avtar") {
        message.reply(message.author.displayAvatarURL());
        return
    }
    if (message.content == "chutiya") {
        message.channel.send("Gaali mat de MAdarCH*d");
        return
    }

    if (message.content == "joke") {
        jokes(message);
    }

    

    if (message.content == ".") {
        message.channel.send("Abe Salle!!!")
    }


    if (message.content == "help") {
        message.channel.send("Commands => joke,Hey,.,rip,avtar");
    }


    if (message.content.startsWith("rip")) {
        // Create Attcahment by this
        const attachment = new discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        //Send the Attachment
        message.channel.send(attachment);
        return
    }
    if (message.content.startsWith("boobs")) {
        // Create Attcahment by this
        const attachment = new discord.MessageAttachment('https://images.unsplash.com/photo-1492632503949-a31d9972b400?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80');
        //Send the Attachment
        message.channel.send(attachment);
        return
    }

    
    if(message.content == "bsdk"){
        message.reply('Gaali Mat de MadArChoD!🤬');
        return;
    }
    if(message.content == "TURN OFF"){
        message.channel.send('Bye bye , Going to Sleep 😴');
        return;
    }
    
if(message.author.id == 732221013999222814){
    message.channel.send('Tum kuch bhi likho, Tum chutiya hi rahoge')
    return
}

    if (message.content == "Hey" || message.content == 'hey') {
        if (message.author.id == 529005449379577866 || message.author.id == 759342924219285566) {
            message.channel.send(`hello ` + message.author.toString() + " tum mere Malik ho");
            return
        }
        message.channel.send(`hello ` + message.author.toString() + " Tum Chutiye ho      ")
    }

    // ---------------------------------------------------------------------------------------------------
    // DS ALGO Channel Coding 



 
})

//_-----------------------------------------------------------------------------------------------------------------------------




client.login('Nzg2OTI1Nzg1Nzc2MjU5MDcy.X9Nfvw.Pn9bfUwpFt9XIDErp13VWsrlRDQ');
