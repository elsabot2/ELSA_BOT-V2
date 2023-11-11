/**
██╗███████╗██╗   ██╗██╗  ██╗██╗   ██╗    ███╗   ███╗██████╗ 
██║╚══███╔╝██║   ██║██║ ██╔╝██║   ██║    ████╗ ████║██╔══██╗
██║  ███╔╝ ██║   ██║█████╔╝ ██║   ██║    ██╔████╔██║██║  ██║
██║ ███╔╝  ██║   ██║██╔═██╗ ██║   ██║    ██║╚██╔╝██║██║  ██║
██║███████╗╚██████╔╝██║  ██╗╚██████╔╝    ██║ ╚═╝ ██║██████╔╝
╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝     ╚═╝╚═════╝ 
                                                            
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config ,sleep} = require('../lib')
const { TelegraPh } = require('../lib/scraper')   
const util = require('util')
//---------------------------------------------------------------------------
cmd({
            pattern: "ملاحظه",
            alias : ['اضف-ملاحظه','ملاحظة'],
            category: "owner",
            desc: "Adds a note on db.",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply("*֎╎اكـتـب مـا تـريـد حـفـظـه فـي الـمـذكـره*")
            await addnote(text)
            return citel.reply(`*֎╎تـم اضـافـه مـلاحـظـه جـديـده فـي الـمـذكـره*`)

        }
    )
 
    //---------------------------------------------------------------------------
cmd({
            pattern: "qr",
            alias : ['باركود'],
            category: "owner",
            filename: __filename,
            desc: "Sends CitelsVoid Qr code to scan and get your session id."
        },
        async(Void, citel, text) => {
            if (text) {
                let h = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`)
                await Void.sendMessage(citel.chat, { image: h })
                return
            }
            let buttonMessaged = {
                image: { url: 'https://citel-x.herokuapp.com/session' },
                caption: `*_Scan Qr within 15 seconds_*\nYou'll get session id in your log number.`,
                footer: ` Session`,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: 'IZUKU  Session',
                        body: 'Get you Session ID',
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },

                },

            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,

            });
            await sleep(20 * 1000)
            return citel.reply('Your session is over now.')


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "فك-البان",
            category: "misc",
            filename: __filename,
            desc: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply("*֎╎هـذا الامـر للـمـطـور فـقـط*")
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("*֎╎مـنشـن عـلـي شـخـص*")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        console.log(usr.ban)
                        return citel.reply(`*${pushnamer} تـم رفـع الـحـظـر عـنـه*`)
                    } else {
                        console.log(usr.ban)
                        if (usr.ban !== "true") return citel.reply(`*${usr.name} تـم رفـع الـحـظـر عـنـه بـالـفـعـل*`)
                        await sck1.updateOne({ id: users }, { ban: "false" })
                        return citel.reply(`*${usr.name} يـمـكنك اسـتـخـدام الـبـوت الان*`)
                    }
                })
            } catch {
                return citel.reply("*֎╎مـنشـن عـلـي شـخـص*")
            }


        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "url",
        alias : ['تلجراف','تليجراف'],
        category: "misc",
        filename: __filename,
        desc: "image to url."
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره او فـيـديـو اكـتـب الامـر مـثـال┇.تلجراف*`)
        let mime = citel.quoted.mtype
        if(mime !='videoMessage' && mime !='imageMessage' ) return await citel.reply("*֎╎رد عـلـي صـوره او فـيـديـو اكـتـب الامـر مـثـال┇.تلجراف*")
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let anu = await TelegraPh(media);
        await citel.reply('*֎╎الـرابـط┇*\n'+util.format(anu));
        return await fs.unlinkSync(media);
    })

    //---------------------------------------------------------------------------
    
cmd({
    pattern: "trt",
    alias :['ترجمه','ترجمة','ترجم'],
    category: "misc",
    filename: __filename,
    desc: "Translate\'s given text in desird language."
},
async(Void, citel, text) => {
    if(!text && !citel.quoted) return await citel.reply(`*֎╎اكـتـب نـص لـتـرجـمـتـه*`);
    const translatte = require("translatte");
    let lang = text ? text.split(" ")[0].toLowerCase() : 'ar';
    if (!citel.quoted)  { text = text.replace( lang , "");  }
    else { text = citel.quoted.text; }
    var whole = await translatte(text, { from:"auto",  to: lang , });
    if ("text" in whole) { return await citel.reply('*֎╎الـتـرجـمـه┇*\n'+whole.text); }
}
)
    //---------------------------------------------------------------------------

cmd({
            pattern: "حذف-ملاحظاتي",
            category: "owner",
            filename: __filename,
            desc: "Deletes all notes from db."
        },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delallnote()
             return citel.reply(`*֎╎تـم حـذف كـل مـلاحـظـاتـك*`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ban",
            alias :['بان'],
            category: "owner",
            filename: __filename,
            desc: "Bans user from using bot."
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`*֎╎مـنشـن عـلـي شـخـص🥷*`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`*تـم حـظـر ${usr.name} مـن اسـتـخـدام الـبـوت*`)
                    } else {
                        if (usr.ban == "true") return citel.reply(`*${pushnamer} تـم حـظـره مـن اسـتـخـدام الـبـوت بـالـفـعـل*`)
                        await sck1.updateOne({ id: users }, { ban: "true" })
                        return citel.reply(`*${usr.name} تـم حـظـره مـن اسـتـخـدام الـبـوت*`)
                    }
                })
            } catch (e) {
                console.log(e)
                return citel.reply("*֎╎مـنشـن عـلـي شـخـص🥷*")
            }


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            alias :['بوت','السا'],
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `بـوتـه الـسـا بـالـخـدمـه`
            const alivtxt = `
*❄️⃝🧚‍♀️مـرحـبـا┇ ${citel.pushName}*
*❄️⃝🧚‍♀️انــا┇ ${tlang().title}*
${alivemessage}
*❋─═━•┇❄️┇•━═─❋*
*❄️⃝🧚‍♀️الاصـدار┇ v1*
*❄️⃝🧚‍♀️مـده الـتـشـغـيـل┇ ${runtime(process.uptime())}*
*❄️⃝🧚‍♀️الـمـطـور┇ ${Config.ownername}_
*❄️⃝🧚‍♀️الـفـرع┇ ${Config.BRANCH}*
*❋─═━•┇❄️┇•━═─❋*
*❄️⃝🧚‍♀️اكـتـب .الاوامر لـظـهـور اوامـر الـبـوت*

*❄️⃝🧚‍♀️صـنـع بـواسـطـه┇ ${Config.ownername}*
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "ملاحظاتي",
        category: "owner",
        filename: __filename,
        desc: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        const note_store = new Array()
        let leadtext = `*❄️⃝🧚‍♀️كـل مـلاحـظـاتـك هـنـا📝┇*\n\n`
        leadtext += await allnotes()
        return citel.reply(leadtext)

    }
)
