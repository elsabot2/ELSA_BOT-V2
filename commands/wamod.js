const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const fs = require('fs-extra')
//---------------------------------------------------------------------------

cmd({

            pattern: "wamod",           
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "♻️",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: 'https://telegra.ph/file/7f3125a8821f7d84b57f2.jpg',
                },

                caption: `
*─👑𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿-𝗪𝗔𝗠𝗢𝗗𝗦👑─*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබට අවශ්‍ය අංකය පහතින් තෝරන්න.*
*Select the number you want*
◉───────────────────    
        
*${prefix}4.0┃ Whatsapp*
*${prefix}4.1┃ FMWhatsapp*
*${prefix}4.2┃ GBWhatsapp*
*${prefix}4.3┃ YOWhatsapp*


*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*▶ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ ◀*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------

cmd(
    {
        pattern: "4.0", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file
            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_whatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_whatsapp.name,
                    caption: '👑 KING-VAJITA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

//---------------------------------------------------------------------------

cmd(
    {
        pattern:"4.1", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_fmwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_fmwhatsapp.name,
                    caption: '👑 KING-VAJIRA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

//---------------------------------------------------------------------------

cmd(
    {
        pattern: "4.2", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_gbwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_gbwhatsapp.name,
                    caption: '👑 KING-VAJIRA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

//---------------------------------------------------------------------------

cmd(
    {
        pattern: "4.3", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_yowhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_yowhatsapp.name,
                    caption: '👑 KING-VAJIRA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);
