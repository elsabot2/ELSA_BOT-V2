//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu","اوامر","الاوامر"],
            desc: "Help list",
            category: "general",
            react: "🗂",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*😔No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*✨Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*⚡️Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🗂Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*📡Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Africa/LAGOS')
                    .locale('id')
                const date = moment.tz('Africa/Lagos').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `┓─━═║✠║◦¦❄️¦◦║✠║═━─┏

*❄️⃝🧚‍♀️ مـرحــبـا بــك یــا ${citel.pushName}╎ᥫ᭡*
*✦*`
                str += `*❄️⃝🧚‍♀️│· • • ━ ⊰❄️⊱ ━ • • ·│❄️⃝🧚‍♀️*
*┇اهـلاً بـك فـي أوامـر الـبـوت الـكـيـوت مـلـكـة الـجـلـيـد "إلـسـا" ❄️┇*

*❄️⃝🧚‍♀️ اسـم الـبـوتـه 🤖 ⦂『إلـسـا』*
*❄️⃝🧚‍♀️ وقـت الـعـمـل 🕑 ⦂『 ${runtime(process.uptime())} 』*
*❄️⃝🧚‍♀️ الـمـطـوريـن 🧑🏻‍💻 ⦂ 『الـجـزار & ايـتـاتشـي』*
*❄️⃝🧚‍♀️ اصـدار 📲 ⦂『v2』*
*❄️⃝🧚‍♀️ الـمـنـصـة 🌐 ⦂『هـيـروكـو』*

*❄️⃝🧚‍♀️ الـمـوقـع الـرسـمـي لـلـبـوت 🔗 『https://639cdc98e060b.site123.me/ 』*

*❄️⃝🧚‍♀️ أرقـام الـمـطـوريـن 👨‍💻 ⦂『+201098906252 & +96178965440』*

*❄️⃝🧚‍♀️│· • • ━ ⊰❄️⊱ ━ • • ·│❄️⃝🧚‍♀️*

*❄️⃝🧚‍♀️⤺┇.1.1↜〘قسـم الاعـضـاء〙*
*❄️⃝🧚‍♀️⤺┇.2.1↜〘قسـم الـمـطـور〙*
*❄️⃝🧚‍♀️⤺┇.3.1↜〘قسـم الـقـروبـات〙*
*❄️⃝🧚‍♀️⤺┇.4.1↜〘قسـم الـتـحمـيـل〙*
*❄️⃝🧚‍♀️⤺┇.5.1↜〘قـسـم الالـعـاب〙*
*❄️⃝🧚‍♀️⤺┇.6.1↜〘قـسـم الـتحـويـل〙*
*❄️⃝🧚‍♀️⤺┇.7.1↜〘قـسـم الانـمي〙*
*❄️⃝🧚‍♀️⤺┇.8.1↜〘قـسـم البـنـك〙*
*❄️⃝🧚‍♀️⤺┇.9.1↜〘كـل الاوامـر〙*

┛─━═║✠║◦¦❄️¦◦║✠║═━─┗



*~.¸¸ ❝ 𝐸𝐿𝑆𝐴 𝐵𝑂𝑇 ❝ ¸¸.~*`
                /*for (const category in cmds) 
                {
                   str += `◎═══•『*${tiny(category)}*』•═══◎\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `┏━━━•❃ *${tiny(category)}* ❃•━━━┓\n` ;      
                        for (const plugins of cmds[category]) { str += `「★」${fancytext(plugins,1)}\n` ; }
                        str += `─── ✧《✩》✧ ───\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `「★」${fancytext(plugins,1)}\n` ; }
                         str += `─── ✧《✩》✧ ───\n`  ; 
                   }
  
                }
                str+= `*⚡️Type:* _${prefix}help cmd_ name to know more about specific command.\n*Eg:* _${prefix}help attp_\n*Made by 🥷 Excel* `*/
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "jfjcgxd",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
┏━━━━━•❃〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + `📟 *Command:-* .ستيكر
ℹ️ *Description:-* سيتم صناعة الملصق! 
🔥 *Help:-* منشن اي صورة او فيديو واكتب ستيكر


📟 *Command:-* .رفع
ℹ️ *Description:-* سيتم الترقيه الى ادمن
🔥 *Help:-* منشن على شخص واكتب رفع


📟 *Command:-* .تنزيل
ℹ️ *Description:-* سيتم تنزيلك من الادمن
🔥 *help:-* منشن مشرف واكتب تنزيل


📟 *Command:-* .بان
ℹ️ *Description:-* سبتم عمل بان للشخص
🔥 *Help:-* منشن شخص وتكتب بان


📟 *Command:-* .فك-البان
ℹ️ *Description:-* سيتم فك الباند على الشخص
🔥 *Help:-* منشن واكتب فك-البان


📟 *Command:-* .طرد
ℹ️ *Description:-* سيتم طرد العضو من الجروب
🔥 *Help:-* منشن واكتب طرد


📟 *Command:-* .اضافه
ℹ️ *Description:-* سيتم اضافه العضو
🔥 *Help:-* منشن رقم الشخص واكتب اضافه


📟 *Command:-* .تصويت
ℹ️ *Description:-* سيتم التصويت ف الجروب
🔥 *Help:-* اسطلاع سؤلل مثلا سؤال1 سؤال2 سؤال3


📟 *Command:-* .بروفايل
ℹ️ *Description:-* سيتم تنزيل بروفايلك ف الجروب
🔥 *Help:-* منشن واكتب بروفايل


📟 *Command:-* .جروب
ℹ️ *Description:-* تقدر تفتتح وتقفل الجروب
🔥 *Help:-* جروب


📟 *Command:-* .صورة-الجروب
ℹ️ *Description:-* سيتم تغير صورة الجروب
🔥 *Help:-* منشن الصورة واكتب الامر


📟 *Command:-* .حذف
ℹ️ *Description:-* سيتم حذف الرساله
🔥 *Help:-* منشن الرساله وسيتم حذفها بمجرد كتابة حذف


📟 *Command:-* .الروابط
ℹ️ *Description:-* سيتم طرد اي شخص يحط رابط بالجروب
🔥 *Help:-* اكتب الروابط لمنع اي رابط وطرد المخالف من المجموعه


📟 *Command:-* .منشن
ℹ️ *Description:-* منشن لاعضاء الجروب
🔥 *Help:-* .منشن


📟 *Command:-* .getjids
ℹ️ *Description:-* Get Jid
🔥 *Help:-* .getjids


📟 *Command:-* .رانك
ℹ️ *Description:-* معرفة المستوى
🔥 *Help:-* اكتب رانك او منشن وشوف المستوى


📟 *Command:-* .الترحيب 
ℹ️ *Description:-* تغير رسالة الترحيب
🔥 *Help:-* اكتب الرساله وبعدها امر الترحيب


📟 *Command:-* .الوداع
ℹ️ *Description:-* تغير رسالة الوداع
🔥 *Help:-* اكتب الرساله وبعدها اكتب الامر


📟 *Command:-* .gs
ℹ️ *Description:-* تغيير اعدادات المجموعة
🔥 *Help:-* .gs


📟 *Command:-* .الاعدادات
ℹ️ *Description:-* تغيير اعدادات المجموعه
🔥 *Help:-* .اعدادات


⦿. *REQUEST BY:* ${citel.pushName}`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `✰ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
      if (commands[i].desc === undefined) commands[i].desc = "";
      str += `✰ ${fancytext(commands[i].desc, 1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: botpic }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        alias: ["مطور","المطور","المالك"],
        desc: "To find owner number",
        category: "general",
        react: "👾",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'مطورين البوت',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=مـرحـب يـا ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "🥷",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*😔No Such commands.*");
        else arr.push(`*📡Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})