
// 漏 2025 Kent 🦠. All Rights Reserved.
// respect the work, 🚫 don't copy for your safety🦠.

const fs = require('fs')

const config = {
    owner: "🦠KENT🦠",
    botNumber: "254792770219",
    setPair: "K0MRAID1",
    thumbUrl: "https://files.catbox.moe/z6v20i.jpg",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    mess: {
        owner: 'This command is only for the bot owner!',
        done: 'Mode changed successfully!',
        error: 'Something went wrong!',
        wait: 'Please wait...'
    },
    settings: {
        title: "harker🦠🚫",
        packname: 'prime killer 🦠',
        description: "we bug🦠 we don't wanna be bugged 🦠",
        author: 'https://www.github.com/Handsomekent-droid',
        footer: "饾棈饾柧饾梾饾柧饾梹饾棆饾柡饾梿: Handsomekent-droid"
    },
    newsletter: {
        name: "prime killer",
        id: "0@newsletter"
    },
    api: {
        baseurl: "https://files.catbox.moe/z6v20i.jpg/",
        apikey: "🦠 Kent 🦠"
    },
    sticker: {
        packname: "prime killer md",
        author: "🦠 kent 🦠"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
