//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

 const { sck,sck1,cmd, getAdmin, tlang, prefix } = require('../lib')
 const Config = require('../config')
 
     //---------------------------------------------------------------------------
 cmd({
         pattern: "تعطيل",
         desc: "Switches for varios works.",
         category: "group",
         filename: __filename
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
         if (!text) return citel.reply(`❌ *֎╎مـن فـضـلـك قـدم لـي مـصـطـلـح مـثـال┇*\n1┇الروابط\n2┇البنك\n3┇البوت\n4┇الاحداث\n5┇الاقتصاد`)
         if (!isAdmins) return citel.reply("*֎╎هـذا الامـر لادمـن*")
         switch (text.split(" ")[0]) {
            case 'الروابط':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "false" })
                            .save()
                        return citel.reply(' *֎╎تـم تـعـطـيـل مـنـع الـروابـط*')
                    } else {
                        if (checkgroup.antilink == "false") return citel.reply("*֎╎تـم تـعـطـيـل مـنـع الـروابـط بـالـفـعـل*")
                        await sck.updateOne({ id: citel.chat }, { antilink: "false" })
                        citel.reply('*֎╎تـم تـعـطـيـل مـنـع الـروابـط بـالـقـروب*')
                        return
                    }
                }
                break
                       case 'الاقتصاد':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "false" })
                            .save()
                        return citel.reply(' *֎╎تـم تـعـطـيـل الاقـتـصـاد*')
                    } else {
                        if (checkgroup.economy == "false") return citel.reply("*֎╎تـم تـعـطـيـل الاقـتـصـاد بـالـفـعـل*")
                        await sck.updateOne({ id: citel.chat }, { economy: "false" })
                        citel.reply('*֎╎تـم تـعـطـيـل الاقـتـصـاد بـالـقـروب*')
                        return
                    }
                }
                break
                case 'الاحداث':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, events: "false" })
                                .save()
                            return citel.reply("*֎╎تـم تـعـطـيـل الاحـداث*")
                        } else {
                            if (checkgroup.events == "false") return citel.reply("*֎╎تـم تـعـطـيـل الاحـداث بـالـفـعـل*")
                            await sck.updateOne({ id: citel.chat }, { events: "false" })
                            return citel.reply("*֎╎تـم تـعـطـيـل الاحـداث بـالـقـروب*")
                        }
                    }
                    break
                case 'البنك':
                    {
                        let checkgroup = sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, cardgame: "deactive" })
                                .save()
                            return citel.reply("*֎╎تـم تـعـطـيـل الـبـنـك*")
                        } else {
                            if (checkgroup.cardgame == "deactive") return citel.reply("*֎╎تـم تـعـطـيـل الـبـنـك بـالـفـعـل*")
                            await sck.updateOne({ id: citel.chat }, { cardgame: "deactive" })
                            return citel.reply("*֎╎تـم تـعـطـيـل الـبـنـك*")
                        }
                    }
                    break
                case 'nsfw':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, nsfw: "false" })
                                .save()
                            return citel.reply("Successfully disabled *NSFW*")
                        } else {
                            if (checkgroup.nsfw == "false") return citel.reply("*NSFW* is already disabled")
                            await sck.updateOne({ id: citel.chat }, { nsfw: "false" })
                            citel.reply("Successfully disabled *NSFW*")
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
