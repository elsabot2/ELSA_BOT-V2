//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const { cmd,sck,sck1, getAdmin, tlang, prefix } = require('../lib')
const Config = require('../config')
    //---------------------------------------------------------------------------
cmd({
        pattern: "تفعيل",
        desc: "Switches for varios works.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply("*֎╎هـذه الـمـيـزه للـقـروبـات*")
        if (!text) return citel.reply(`⚡️ *֎╎مـن فـضـلـك قـدم لـي مـصـطـلـح مـثـال┇*\n1┇الروابط\n2┇البنك\n3┇البوت\n4┇الاحداث\n5┇الاقتصاد`)
        if (!isAdmins) return citel.reply("⚡️ *֎╎هـذا الامـر لادمـن*")
        switch (text.split(" ")[0]) {
            case 'الروابط':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "true" })
                            .save()
                        return citel.reply(' *֎╎تـم تـفـعـيـل الـروابـط*')
                    } else {
                        if (checkgroup.antilink == "true") return citel.reply("*֎╎تـم تـفـعـيـل الـروابـط بـالـفـعـل*")
                        await sck.updateOne({ id: citel.chat }, { antilink: "true" })
                        citel.reply('*֎╎تـم تـفـعـيـل مـنـع الـروابـط بـالـقـروب*')
                        return
                    }
                }
                break
          
                      case 'الاقتصاد':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "true" })
                            .save()
                        return citel.reply('*֎╎تـم تـفـعـيـل الاقـتـصـاد*')
                    } else {
                        if (checkgroup.economy == "true") return citel.reply("*֎╎تـم تـفـعـيـل الاقـتـصـاد بـالـفـعـل*")
                        await sck.updateOne({ id: citel.chat }, { economy: "true" })
                        citel.reply('*֎╎تـم تـفـعـيـل الاقـتـصـاد بـالـقـروب*')
                        return
                    }
                }
                break
            case 'الاحداث':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, events: "true" })
                            .save()
                        return citel.reply("*֎╎تـم تـفـعـيـل الاحـداث*")
                    } else {
                        if (checkgroup.events == "true") return citel.reply("*֎╎تـم تـفـعـيـل الاحـداث بـالـفـعـل*")
                        await sck.updateOne({ id: citel.chat }, { events: "true" })
                        return citel.reply("*֎╎تـم تـفـعـيـل الاحـداث*")
                    }
                }
                break
            case 'البنك':
                {
                    let checkgroup = sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, cardgame: "active" })
                            .save()
                        return citel.reply("*֎╎تـم تـفـعـيـل الـبـنـك*")
                    } else {
                        if (checkgroup.cardgame == "active") return citel.reply("*֎╎تـم تـفـعـيـل الـبـنـك بـالـفـعـل*")
                        await sck.updateOne({ id: citel.chat }, { cardgame: "active" })
                        return citel.reply("*֎╎تـم تـفـعـيـل الـبـنـك*")
                    }
                }
                break
            case 'nsfw':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, nsfw: "true" })
                            .save()
                        return citel.reply("Successfully Enabled *NSFW*")
                    } else {
                        if (checkgroup.nsfw == "true") return citel.reply("*NSFW* is already enabled")
                        await sck.updateOne({ id: citel.chat }, { nsfw: "true" })
                        citel.reply("Successfully Enabled *NSFW*")
                        return
                    }
                }
                break
            default:
                {
                    citel.reply("*֎╎مـن فـضـلـك قـدم لـي مـصـطـلـح مـثـال┇*\n1┇الروابط\n2┇البنك\n3┇البوت\n4┇الاحداث\n5┇الاقتصاد")
                }
        }
    }
)
