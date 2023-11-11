const { sck,sck1,cmd, getBuffer, tlang,sleep,getAdmin, prefix } = require('../lib')
const Config = require('../config')
const eco = require('discord-mongoose-economy')
const ty = eco.connect(mongodb);
    //---------------------------------------------------------------------------

cmd({
        pattern: "تصفير",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
       let zerogroup = (await sck.findOne({
           id: citel.chat,
       })) || (await new sck({
               id: citel.chat,
           })
           .save());
       let mongoschemas = zerogroup.economy || "false";
       if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
    if(!isCreator) return citel.reply(tlang().owner)
       let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
   if(!users) return citel.reply('֎╎مـنـشـن احـد بـعـد الأمـر @')
       const balance  = await eco.balance(users, "secktor")
       await eco.deduct(users, "secktor", balance.wallet);
       return await citel.reply(`*⛩️ الـمـسـتـخـدم┇ @${users.split('@')[0]}* \n *🧧فـقـدت كـل امـوالـك🪙*\n*الان بـتـعـيـش فـقـيـر🤡*`,{mentions:[users]})
}
)
   //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
    cmd({
       pattern: "المال",
       filename: __filename,
       react: "💷"
   },
   async(Void, citel, text,{ isCreator }) => {
    const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);
   let h = await eco.lb('secktor',300);
   let str = ``
   const { sck1 } = require('../lib');
   let arr = []
    for(let i=0;i<h.length;i++){
           let username = await sck1.findOne({ id: h[i].userID })
           var tname;
           if (username && username !== undefined) {
               tname = username.name
           } else {
               tname = Void.getName(h[i].userID)
           }
str+= `ـ *${i+1}* \n╮─────────────ـ\n│ *֎╎الـمـال*  ${h[i].wallet}\n│ـ\n│ *֎╎الـرقـم* wa.me/${h[i].userID.split('@')[0]}\n╯─────────────ـ\n\n`
    arr.push(h[i].userID)
    }
        citel.reply(str,{mentions:arr})
        
    })


    //---------------------------------------------------------------------------
    cmd({
        pattern: "اموالي",
        filename: __filename,
        react: "💷"
     },
     async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
         const secktor = "secktor"
         const balance = await eco.balance(citel.sender, secktor); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
         return await citel.reply(`⌬━─━｢❄️｣━─━⌬
↫ ⟦ بـنـك الـسـا  ⟧
             
❀ ╎رصـيـدك 💰 ⟦ ${balance.wallet} بيلي ⟧
⌬━─━｢❄️｣━─━⌬`)
     
     }
   )