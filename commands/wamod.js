const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const fs = require('fs-extra')
//---------------------------------------------------------------------------

cmd({

            pattern: "wamod",
            alias :["واتس","مود"],           
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
*👑 𝐄𝐋𝐆𝐀𝐙𝐀𝐑 ❄️&𝐈𝐓𝐀𝐂𝐇𝐈 👑*

💓هـلا ${citel.pushName}💓

◉───────────────────               
*اكتـب رقـم مـن الاسـفـل*
◉───────────────────    
        
*${prefix}4.0┃ Whatsapp*
*${prefix}4.1┃ FMWhatsapp*
*${prefix}4.2┃ GBWhatsapp*
*${prefix}4.3┃ YOWhatsapp*


*👑 𝐄𝐋𝐆𝐀𝐙𝐀𝐑 ❄️&𝐈𝐓𝐀𝐂𝐇𝐈 👑*
*👩‍💻 𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻*
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
                    caption: '👑 *𝐄𝐋𝐆𝐀𝐙𝐀𝐑 ❄️&𝐈𝐓𝐀𝐂𝐇𝐈 👑*\n👩‍💻 *𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻*'
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
                    caption: '👑 *𝐄𝐋𝐆𝐀𝐙𝐀𝐑 ❄️&𝐈𝐓𝐀𝐂𝐇𝐈 👑*\n👩‍💻 *𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻*'
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
                    caption: '👑 *𝐄𝐋𝐆𝐀𝐙𝐀𝐑 ❄️&𝐈𝐓𝐀𝐂𝐇𝐈 👑*\n👩‍💻 *𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻*'
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
                    caption: '👑 *𝐄𝐋𝐆𝐀𝐙𝐀𝐑 ❄️&𝐈𝐓𝐀𝐂𝐇𝐈 👑*\n👩‍💻 *𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻*'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);
