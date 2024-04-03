//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------

cmd({
        pattern: "السورس",
        alias: ["سكريبت", "sc", "script","الفروع","المجتمع"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://youtube.com/@ABDALLAH_MOHAMED')
        let cap = `هـاي ${citel.pushName}\n
*❄️⃝🧚‍♀️ 𒆜𝑬𝑳𝑺𝑨 𝑩𝑶𝑻𒆜♦️*

*❄️⃝🧚‍♀️ 〘الـيـك فـروع مـجـتـمـعـنـا〙*

*❄️⃝🧚‍♀️ الـفـرع الاول https://chat.whatsapp.com/D2q8dnfUwbL83Tz79bGEK*

*❄️⃝🧚‍♀️ الـفـرع الـثـانـي قـريـبـا...*`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "مجتمعنا",
                    body: "فروع المجتمع",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["الحاله","الحاله"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
ㅤ ────────────────────────── .°୭̥ ❁ 	
*❄️⃝🧚‍♀️الـسـرعـه⚡️┇ ${latensie.toFixed(4)} مـللـي ثـانـيـه*
*❄️⃝🧚‍♀️مـده الـتـشـغـيـل⏱┇ ${runtime(process.uptime())}*
*❄️⃝🧚‍♀️ الاصـدار📡┇ V1*
*❄️⃝🧚‍♀️ الـمـطـوريـن👤┇ ${Config.ownername}*
*❄️⃝🧚‍♀️ اسـم الـبـوتـه🤖┇ ${tlang().title}*
°୭̥ ❁ ───────────────────────── .°୭̥ ❁ `;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `حاله البوت`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
    pattern: "theme",
    alias: ["ثيم","الثيم"],
    desc: "To find all themes",
    category: "general",
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => {

if(!isCreator) return citel.reply(tlang().owner);
let str="*جميع ثيمات بوته السا ELSA *"
str+=`1. ELSA\_Reply ${prefix}الثيم THEME:ELSA`
return citel.reply(str)
    
}
)
