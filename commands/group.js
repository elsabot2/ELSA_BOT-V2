/**
██╗███████╗██╗   ██╗██╗  ██╗██╗   ██╗    ███╗   ███╗██████╗ 
██║╚══███╔╝██║   ██║██║ ██╔╝██║   ██║    ████╗ ████║██╔══██╗
██║  ███╔╝ ██║   ██║█████╔╝ ██║   ██║    ██╔████╔██║██║  ██║
██║ ███╔╝  ██║   ██║██╔═██╗ ██║   ██║    ██║╚██╔╝██║██║  ██║
██║███████╗╚██████╔╝██║  ██╗╚██████╔╝    ██║ ╚═╝ ██║██████╔╝
╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝     ╚═╝╚═════╝ 

 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : IZUKU-Md
 * @author : excel <https://github.com/excelottah6>
 * @description : IZUKU,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
//---------------------------------------------------------------------------
cmd({
            pattern: "join",
            alias: ["انضم","ادخل"],
            desc: "joins group by link",
            category: "owner",
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`*֎╎ويـن  الـرابـط ؟ ${tlang().greet}*`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com"))
                citel.reply("*֎╎الـرابـط غـلـط*");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("*֎╎تـم الانـضـمـام بـنـجـاح*"))
                .catch((err) => citel.reply("*֎╎مـقـدرت ادخـل*"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "sticker",
            alias: ["s","ملصق","ستيكر","استيكر"],
            desc: "Makes sticker of replied image/video.",
            category: "group",
            use: '<reply to any image/video.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*֎╎رد  عـلـى صـورة*`);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
            if (citel.quoted) {
                let media = await citel.quoted.download();
                citel.reply("*֎╎لـحـظـه بـرسـلـك الـمـلـصـق...*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            } else if (/video/.test(mime)) {
                if ((quoted.msg || citel.quoted)
                    .seconds > 20) return citel.reply("*֎╎الـحـد الاقـصـى للـفـيـديـو 20 ثـانـيـه*");
                let media = await quoted.download();
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.FULL, // The sticker type
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 70, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
            } else {
                citel.reply("*֎╎رد  عـلـى صـورة*");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "support",
        alias: ["الدعم","مساعده","مساعدة"],
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text) => {
        citel.reply(`*֎╎شـوف خـاصـك*`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `*֎╎رابـط جـروب الـدعـم┇ https://chat.whatsapp.com/DmGUnUroeRB1FAoBnHZMWP*`,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
    pattern: "gdesc",
    alias : ['تغيرالوصف','تغيرالبايو'],
    desc: "Set Description of Group",
    category: "group",
    filename: __filename,
    use: 'enter Description Text',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*֎╎ايـن الـوصـف الـجـديـد؟*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateDescription(citel.chat, text);
        citel.reply('*֎╎تـم تـغـيـر وصـف الـجـروب بـنـجـاح*') 
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"*֎╎حـدث خـطـأ اثـنـاء تـغـيـر الـوصـف*\n*֎╎الـسـبـب*" + e, } ,{quoted : citel})   }
}
)
//———————————————————————————————————

cmd({
        pattern: "لينك",
        alias:["glink","الرابط"],
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Void, citel)	
	    const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	
if (!isBotAdmins) return citel.reply(tlang().admin);
var str1 = await Void.groupInviteCode(citel.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return citel.reply("*֎╎رابـط الـجـروب┇* \n*"+mergedString+"*");
	
    }
	)
//————————————————————-/————————-

cmd({
    pattern: "gname",
    alias: ['تغيرالاسم','setname'],
    desc: "Set name of Group",
    category: "group",
    filename: __filename,
    use: 'enter Description Text',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*֎╎ويـن الاسـم الجـديـد؟*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateSubject(citel.chat, text)
        citel.reply('*֎╎تـم تـغـيـر اسـم الـجـروب بـنـجـاح*') 
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"*֎╎حـدث خـطـأ اثـنـاء تـغـيـر الاسـم*\n*֎╎الـسـبـب*" + e, } ,{quoted : citel})   }
}
)
//--------------------------------------------------------------------------------------------
cmd({
    pattern: "انذار",

    filename: __filename,
},
async(Void, citel, text,{ isCreator }) => {
     if (!citel.isGroup) return citel.reply('*֎╎هـذا الأمـر خـاص بـالـقـروب*')
    const groupAdmins = await getAdmin(Void, citel)
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isAdmins) return citel.reply('*֎╎هـذا الأمـر خـاص بـالـمشرفـيـن*')
const S=m;function Z(){const F=['126402oKAcRa','date','*֎╎تـم طـرده لانـه تـجـاوز الانـذارات*\x0a','chat','8qachoN','580yXDZAo','groupParticipantsUpdate','114528WgITIL','reply','groupMetadata','│\x20֎╎الـوقـت┇\x20','find','locale','log','196311jXGmuc','quoted','save','*\x0a◆──────────────╮\x0a│\x20֎╎الـمـكـان┇\x20','759700KYdstU','warnedby','pushName','reason','8dUtMfa','2BlOCqD','550MdvhLT','\x0a֎╎الانـذار لـ┇\x20@','54828ViphBF','subject','1100323uEahgH','30204512uUuJcj','֎╎عـدد انـذاراتـه┇\x20','split','│\x20֎╎الـمـنـذر┇\x20','length','sender','setDefault','group','Africa/Lagos','../config','215XZLRSE','HH:mm:ss','warn','remove'];Z=function(){return F;};return Z();}(function(U,w){const c=m,s=U();while(!![]){try{const q=parseInt(c(0x1eb))/0x1*(parseInt(c(0x1f0))/0x2)+parseInt(c(0x1e7))/0x3*(parseInt(c(0x1ef))/0x4)+-parseInt(c(0x200))/0x5*(-parseInt(c(0x204))/0x6)+-parseInt(c(0x1f5))/0x7*(-parseInt(c(0x1dd))/0x8)+-parseInt(c(0x1f3))/0x9*(-parseInt(c(0x1de))/0xa)+parseInt(c(0x1f1))/0xb*(parseInt(c(0x1e0))/0xc)+-parseInt(c(0x1f6))/0xd;if(q===w)break;else s['push'](s['shift']());}catch(B){s['push'](s['shift']());}}}(Z,0x707d4));function m(Y,U){const w=Z();return m=function(s,q){s=s-0x1dd;let B=w[s];return B;},m(Y,U);}if(!citel['quoted'])return citel[S(0x1e1)]('*֎╎رد عـلـي رسـالـه شـخـص*');const timesam=moment(moment())['format'](S(0x201));moment['tz'][S(0x1fc)](S(0x1fe))[S(0x1e5)]('id');try{let metadata=await Void[S(0x1e2)](citel[S(0x207)]);await new warndb({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202),'reason':text,'group':metadata[S(0x1f4)],'warnedby':citel[S(0x1ed)],'date':timesam})[S(0x1e9)]();let ment=citel[S(0x1e8)][S(0x1fb)];Void['sendMessage'](citel['chat'],{'text':S(0x1f2)+citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+'\x0a֎╎الـسـبـب┇\x20'+text+'\x0a֎╎الـمـنـذر┇\x20'+citel[S(0x1ed)],'mentions':[citel[S(0x1e8)][S(0x1fb)]]},{'quoted':citel});let h=await warndb[S(0x1e4)]({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});const Config=require(S(0x1ff));if(h[S(0x1fa)]>Config['warncount']){teskd=S(0x206);let h=await warndb[S(0x1e4)]({'id':citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});teskd+=S(0x1f7)+h[S(0x1fa)]+'\x20\x20*\x0a';for(let i=0x0;i<h[S(0x1fa)];i++){teskd+='*'+(i+0x1)+S(0x1ea)+h[i][S(0x1fd)]+'\x0a',teskd+=S(0x1e3)+h[i][S(0x205)]+'\x0a',teskd+=S(0x1f9)+h[i][S(0x1ec)]+'\x0a',teskd+='│\x20֎╎الـسـبـب┇\x20'+h[i][S(0x1ee)]+'_\x0a◆──────────────╯\x0a\x0a';}citel[S(0x1e1)](teskd),await Void[S(0x1df)](citel['chat'],[citel['quoted'][S(0x1fb)]],S(0x203));}}catch(Y){console[S(0x1e6)](Y);}
    
}
)
    //---------------------------------------------------------------------------
cmd({
            pattern: "unblock",
            alias: ["فك-البلوك"],
            desc: "Unblocked to the quoted user.",
            category: "owner",
            filename: __filename,

        },
        async(Void, citel, text,{ isCreator }) => {

            if (!citel.quoted) return citel.reply("*֎╎مـنـشـن عـلـي شـخـص*");
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "unblock")
                .then((res) => console.log(jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "ujid",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }
      citel.reply(textt)

    }
)

    //---------------------------------------------------------------------------
cmd({
        pattern: "tagall",
        alias: ["منشن","تاك"],
        desc: "Tags every person of group.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);

        let textt = `
*❋ ─═══━•┇❄️┇•━═══─ ❋*

*『⚶الـمـنـشـن ⋋🪀⋌ الـجـمـاعـي⚶』*

*❋ ─═══━•┇❄️┇•━═══─ ❋*


*❆╎الـرسـالـه┇* ${text ? text : "مفيش رساله"}\n\n
*❆╎طـالـب الـمـنـشـن┇* ${citel.pushName}
`
        for (let mem of participants) {
            textt += ` *❆┇↜* @${mem.id.split("@")[0]}\n`;
        }
        Void.sendMessage(citel.chat, {
            text: textt,
            mentions: participants.map((a) => a.id),
        }, {
            quoted: citel,
        });
    }
)

//---------------------------------------------------------------------------
cmd({
             pattern: "طلب",
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`.طلب ممكن تضيف امر يسوي ملصقات؟`);
             textt = `*| لديك طلب |*`;
             teks1 = `\n\n*المُطالب* : @${
     citel.sender.split("@")[0]
   }\n*الطلب* : ${text}`;
             teks2 = `\n\n*السلام عليكم  @${citel.sender.split("@")[0]},تم ارسال الطلب للمطور*.\n\n*انتظر الرد .....*`;
             for (let i of owner) {
                 Void.sendMessage(i + "@s.whatsapp.net", {
                     text:textt + teks1,
                     mentions: [citel.sender],
                 }, {
                     quoted: citel,
                 });
             }
             Void.sendMessage(citel.chat, {
                 text: teks2 ,
                 mentions: [citel.sender],
             }, {
                 quoted: citel,
             });
 
         }
     )
     
    //---------------------------------------------------------------------------
cmd({
            pattern: "حذف-انذار",
            desc: "Deletes all previously given warns of quoted user.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{isCreator}) => {
            if (!isAdmins) return citel.reply(tlang().admin)
            if (!citel.quoted) return citel.reply('*֎╎مـنـشـن عـلـي شـخـص*')
            await warndb.deleteOne({ id: citel.quoted.sender.split('@')[0] + 'warn' });
            return citel.reply('*֎╎تـم حـذف انـذار*')
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "استطلاع",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `questionoption1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isAdmins) return citel.reply(tlang().admin)
            let [poll, opt] = text.split("!");
            if (text.split(",") < 2)
                return await citel.reply(
                    `*֎╎مـثـال┇.استطلاع بتحبوني! اه,لا,لا برضو*`
                );
            let options = [];
            for (let i of opt.split(',')) {
                options.push(i);
            }
            await Void.sendMessage(citel.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "profile",
            alias: ["ايدي","بروفايل","me","انا"],
            desc: "Shows profile of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "فنان✨";
             if (lvpoints <=  2) { var role = "🏳مواطن"; } 
	else if (lvpoints <=  4) { var role = "👼طبيب اطفال"; } 
	else if (lvpoints <=  6) { var role = "🧙‍♀️ساحر";  } 
	else if (lvpoints <=  8) { var role = "🧙‍♂️معالج روحاني"; }
	else if (lvpoints <= 10) { var role = "🧚🏻طفل ملاك";  } 
	else if (lvpoints <= 12) { var role = "🧜ملاك"; } 
	else if (lvpoints <= 14) { var role = "🧜‍♂️سيد الملاك";} 
	else if (lvpoints <= 16) { var role = "🌬طفل نوبل"; } 
	else if (lvpoints <= 18) { var role = "❄نوبل"; }
	else if (lvpoints <= 20) { var role = "⚡سريع النخبه"; } 
	else if (lvpoints <= 22) { var role = "🎭نخبه"; } 
	else if (lvpoints <= 24) { var role = "🥇بارع I"; }
	else if (lvpoints <= 26) { var role = "🥈بارع II"; } 
	else if (lvpoints <= 28) { var role = "🥉متفوق بارع"; }
	else if (lvpoints <= 30) { var role = "🎖متفوق مسيطر";} 
	else if (lvpoints <= 32) { var role = "🏅متفوق النخبه"; }
	else if (lvpoints <= 34) { var role = "🏆فائق";}
	else if (lvpoints <= 36) { var role = "💍فائق I";}
	else if (lvpoints <= 38) { var role = "💎فائق Ii";} 
	else if (lvpoints <= 40) { var role = "🔮سيد اللعبه";} 
	else if (lvpoints <= 42) { var role = "🛡اسطوره III";} 
	else if (lvpoints <= 44) { var role = "🏹اسطوره II";} 
	else if (lvpoints <= 46) { var role = "⚔اسطوره"; } 
	else if (lvpoints <= 55) { var role = "🐉ابدي"; }
	
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Africa/Lagos')
                .locale('id')
            try {
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
*↫ صوره قمر زي صاحبها 🥺♥.!*
*⌁︙اسمڪ🪪↫ ${citel.pushName}*
*⌁︙تفاعلـڪ💥↫ سايق مخده 😹*
*⌁︙مستواڪ💎↫ ${userq.level}*
*⌁︙دورڪ🏅↫ ${role}*
*⌁︙نقاطـڪ♦️↫ ${userq.xp}*
*⌁︙رسائلـڪ🧩↫ ${ttms}*
*⌁︙البـايـــو⚡↫ ${bioo}*
`;
            let buttonMessage = {
                image: {
                    url: pfp,
                },
                caption: profile,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "rank",
            alias: ["رانك"],
            desc: "Sends rank card of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "فنان✨";
            if (lvpoints <= 2) {
                var role = "🏳مواطن";
            } else if (lvpoints <= 4) {
                var role = "👼طبيب اطفال";
            } else if (lvpoints <= 6) {
                var role = "🧙‍♀️ساحر";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️معالج";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻طفل ملاك";
            } else if (lvpoints <= 12) {
                var role = "🧜ملاك";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️سيد الملاك";
            } else if (lvpoints <= 16) {
                var role = "🌬طفل نوبل";
            } else if (lvpoints <= 18) {
                var role = "❄نوبل";
            } else if (lvpoints <= 20) {
                var role = "⚡سرعه النخبه";
            } else if (lvpoints <= 22) {
                var role = "🎭النخبه";
            } else if (lvpoints <= 24) {
                var role = "🥇بارع I";
            } else if (lvpoints <= 26) {
                var role = "🥈بارع II";
            } else if (lvpoints <= 28) {
                var role = "🥉متفوق بارع";
            } else if (lvpoints <= 30) {
                var role = "🎖متفوق مسيطر";
            } else if (lvpoints <= 32) {
                var role = "🏅متفوق النخبه";
            } else if (lvpoints <= 34) {
                var role = "🏆فائق";
            } else if (lvpoints <= 36) {
                var role = "💍فائق I";
            } else if (lvpoints <= 38) {
                var role = "💎فائق Ii";
            } else if (lvpoints <= 40) {
                var role = "🔮سيد اللعبه";
            } else if (lvpoints <= 42) {
                var role = "🛡اسطوره III";
            } else if (lvpoints <= 44) {
                var role = "🏹اسطوره II";
            } else if (lvpoints <= 46) {
                var role = "⚔اسطوره";
            } else if (lvpoints <= 55) {
                var role = "🐉ابدي";
            }
            let disc = citel.sender.substring(3, 7);
            let textr = '';
            textr += `هـاي↫${citel.pushName}\n\n`;
            let ttms = `${userq.xp}` / 8;
            textr += `*⌁︙دورڪ🏅↫ ${role}*\n*⌁︙نقاطـڪ♦️↫ ${userq.xp}* / ${Levels.xpFor(
    userq.level + 1
  )}\n*⌁︙مستواڪ💎↫ ${userq.level}*\n*⌁︙رسائلـڪ🧩↫ ${ttms}*`;
            try {
                ppuser = await Void.profilePictureUrl(citel.sender, "image");
            } catch {
                ppuser = await botpic();
            }
                    Void.sendMessage(citel.chat, {
                        image: await getBuffer(ppuser),
                        caption: textr,
                    }, {
                        quoted: citel,
                    });
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "المتصدرين",
            alias: ["المتفوقين"],
            desc: "To check leaderboard",
            category: "general",
            filename: __filename,
        },
        async(Void, citel) => {
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = ` 
*❋ ─═══━•┇قـائـمـه الـمـتـصـدريـن┇•━═══─ ❋*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "فنان✨";
                if (lvpoints <= 2) {
                    var role = "🏳مواطن";
                } else if (lvpoints <= 4) {
                    var role = "👼طبيب اطفال";
                } else if (lvpoints <= 6) {
                    var role = "🧙‍♀️ساحر";
                } else if (lvpoints <= 8) {
                    var role = "🧙‍♂️معالج";
                } else if (lvpoints <= 10) {
                    var role = "🧚🏻طفل ملاك";
                } else if (lvpoints <= 12) {
                    var role = "🧜ملاك";
                } else if (lvpoints <= 14) {
                    var role = "🧜‍♂️سيد الملاك";
                } else if (lvpoints <= 16) {
                    var role = "🌬طفل نوبل";
                } else if (lvpoints <= 18) {
                    var role = "❄نوبل";
                } else if (lvpoints <= 20) {
                    var role = "⚡سرعه النخبه";
                } else if (lvpoints <= 22) {
                    var role = "🎭النخبه";
                } else if (lvpoints <= 24) {
                    var role = "🥇بارع I";
                } else if (lvpoints <= 26) {
                    var role = "🥈بارع II";
                } else if (lvpoints <= 28) {
                    var role = "🥉متفوق بارع";
                } else if (lvpoints <= 30) {
                    var role = "🎖متفوق مسيطر";
                } else if (lvpoints <= 32) {
                    var role = "🏅متفوق النخبه";
                } else if (lvpoints <= 34) {
                    var role = "🏆فائق";
                } else if (lvpoints <= 36) {
                    var role = "💍فائق I";
                } else if (lvpoints <= 38) {
                    var role = "💎فائق Ii";
                } else if (lvpoints <= 40) {
                    var role = "🔮سيد اللعبه";
                } else if (lvpoints <= 42) {
                    var role = "🛡اسطوره III";
                } else if (lvpoints <= 44) {
                    var role = "🏹اسطوره II";
                } else if (lvpoints <= 46) {
                    var role = "⚔اسطوره";
                } else if (lvpoints <= 55) {
                    var role = "🐉ابدي";
                }
                let data = await sck1.findOne({ id: fetchlb[i].userID })
                let namew = fetchlb[i].userID
                let ttms = fetchlb[i].xp / 8
                leadtext += `*${i + 1}*⌁︙الاسـم🪪↫ ${data.name}*\n*⌁︙الـمسـتـوي💎↫ ${fetchlb[i].level}*\n*⌁︙الـنـقـاط♦️↫ ${fetchlb[i].xp}*\n*⌁︙الـدور🏅↫ ${role}*\n*⌁︙الـرسـائـل🧩↫ ${ttms}*\n\n`;
            }
            return citel.reply(leadtext)
        }
    )

    //---------------------------------------------------------------------------
cmd({
          pattern: "promote",
          alias: ["رفع","ترقيه","ترقية"],
    filename: __filename,
},
async(Void, citel, text) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

    if (!isAdmins) return citel.reply(tlang().admin);
    if (!isBotAdmins) return citel.reply(tlang().botAdmin);
    
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("*֎╎مـنـشـن احـد او رد عـلـى رسـالـتـه*");
    
    try {
        await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
        citel.reply("*֎╎تـمـت الـتـرقـيـة، نـرجـو عـدم الـتـقـصـيـر 🙏*");
    } catch {
         citel.reply(tlang().botAdmin);
    }
  }
)
    //---------------------------------------------------------------------------
cmd({
    pattern: "طرد",
    alias: ["kick"],
    filename: __filename,
},
async(Void, citel, text) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

    if (!isAdmins) return citel.reply(tlang().admin);
    if (!isBotAdmins) return citel.reply(tlang().botAdmin);
    
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("*֎╎مـنـشـن احـد او رد عـلـى رسـالـتـه*");
    
    try {
        await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
        citel.reply("*֎╎تـم الـطـرد، الـلـه يـوفـقـه*");
    } catch {
         citel.reply(tlang().botAdmin);
    }
  }
 )

    //---------------------------------------------------------------------------
cmd({
            pattern: "group",
            alias: ["جروب"],
            desc: "mute and unmute group.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!citel.isGroup) return citel.reply(tlang().group);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            if (!isAdmins) return citel.reply(tlang().admin);
            if (text.split(" ")[0] === "قفل") {
                await Void.groupSettingUpdate(citel.chat, "announcement")
                    .then((res) => citel.reply("*֎╎تـم قـفـل الـجـروب*"))
                    .catch((err) => console.log(err));
            } else if (text.split(" ")[0] === "فتح") {
                await Void.groupSettingUpdate(citel.chat, "not_announcement")
                    .then((res) => citel.reply("*֎╎تـم فـتـح الـجـروب*"))
                    .catch((err) => console.log(err));
            } else {

                return citel.reply(`〖 حـالـه الـجـروب 〗\n${prefix}جروب فتح\n${prefix}جروب قفل`);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "grouppic",
            alias: ["تغيرالصوره","تغيرالصورة"],
            desc: "Sets a profile pic in Group..",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;


            let mime = citel.quoted.mtype
            if (!citel.isGroup) citel.reply(tlang().group);
            if (!isAdmins) citel.reply(tlang().admin);
            if (!isBotAdmins) citel.reply(tlang().botadmin);
            if (!citel.quoted) return citel.reply(`*֎╎رد عـلـي صـوره لـلـتـغيـر*`);
            if (!/image/.test(mime)) return citel.reply(`*֎╎رد عـلـي صـوره لـلـتـغيـر*`);
            if (/webp/.test(mime)) return citel.reply(`*֎╎رد عـلـي صـوره لـلـتـغيـر*`);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            await Void.updateProfilePicture(citel.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            citel.reply(tlang().success);

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "hidetag",
            alias: ["وهمي","مخفي"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply(tlang().admin);

            if (!isAdmins) citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, {
                text: text ? text : "",
                mentions: participants.map((a) => a.id),
            }, {
                quoted: citel,
            });
        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "add",
            alias: ["اضافه","اضافة"],
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!text) return citel.reply("*֎╎اضـف رقـم لاضـافـتـه*");
            if (!isAdmins) return citel.reply(tlang().admin);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.groupParticipantsUpdate(citel.chat, [users], "add");

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "getjids",
            alias: ["الجروبات","القروبات"],
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `〖 جـمـيـع جـروبـات الـبـوت 〗\n\n`
            citel.reply(`*֎╎جـاري جـلـب ${anu.length} جـروب...*`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `֎╎الاسـم: ${metadata.subject}\n`
                jackhuh += `֎╎الاعـضـاء: ${metadata.participants.length}\n`
                jackhuh += `֎╎الايـدي: ${i}\n\n`

            }
            citel.reply(jackhuh)

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "demote",
        alias: ["تنزيل","تخفيض"],
        desc: "Demotes replied/quoted user from group",
        category: "group",
        filename: __filename,
        use: '<quote|reply|number>',
    },
    async(Void, citel, text) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

    if (!isAdmins) return citel.reply(tlang().admin);
    if (!isBotAdmins) return citel.reply(tlang().botAdmin);
    
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("*֎╎مـنـشـن احـد او رد عـلـى رسـالـتـه*");
    
    try {
        await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        citel.reply("*֎╎تـم إزالـة إشـرافـه*");
    } catch {
         citel.reply(tlang().botAdmin);
    }
  }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "del",
            alias: ["delete","حذف","مسح"],
            desc: "Deletes message of any user",
            category: "group",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('*֎╎هـذا الأمـر خـاص بـالـمـشـرفـيـن*')
                if (!isBotAdmins) return citel.reply('*֎╎حـطـنـي مـشـرف*')
                if (!citel.quoted) return citel.reply(`*֎╎وش تـبـغـى احـذف ${tlang().greet}*`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "الانذارات",
            alias: ["انذارات"],
            desc: "Check warns",
            category: "group",
            filename: __filename,
            use: '<quoted/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply('*֎╎هـذا الامـر خـاص بـالـقـروب*')
            if (!citel.quoted) return citel.reply('*֎╎مـنـشـن عـلـي شـخـص*')
            teskd = `*〖 جـمـيـع الانـذارات 〗*\n\n`
            let h = await warndb.find({ id: citel.quoted.sender.split('@')[0] + 'warn' })
            console.log(h)
            teskd += `*֎╎الـمـجـمـوع ${h.length} انـذار*\n`
            for (let i = 0; i < h.length; i++) {
                teskd += `*${i+1}*\n•°•═════ஓ๑♡๑ஓ═════•°•◆\n│ *الـمـكـان📡* ${h[i].group}\n`
                teskd += `┇ *الـوقـت⏱* ${h[i].date}\n`
                teskd += `┇ *الـمـنـذر⚠️* ${h[i].warnedby}\n`
                teskd += `┇ *الـسـبـب📍* ${h[i].reason}\n•°•═════ஓ๑♡๑ஓ═════•°•\n\n`
            }
            citel.reply(teskd)
        }

    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "block",
            alias: ["بلوك"],
            desc: "blocks that person",
            fromMe: true,
            category: "owner",
            filename: __filename,
            use: '<quote/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply("*֎╎مـنـشـن عـلـي شـخـص*");
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "block")
                .then((res) => console.log(jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));

        }
    )

//--------------------------------------------------------------------------------
          
          
 cmd({
            pattern: "اذاعه",
            alias: ["شير"],
            desc: "blocks that person",
            fromMe: true,
            category: "owner",
            filename: __filename,
            use: '<quote/reply user.>',
        },
        async(Void, citel, text,{ isCreator }) => {
         if(!isCreator) return citel.reply(tlang().owner); 
         if (!text) { 
             citel.reply("*֎╎اكـتـب رسـالـه لـعـمـل اذاعـه*") 
             return; 
         } 
         let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let anu = groups.map(v => v.id) 
         citel.reply(` *֎╎تـم الاذاعـه الـي ${anu.length} جـروب فـي ${anu.length * 1.5} ثـانـيـه*`) 
         for (let i of anu) { 
             let txt = `*❮ 📢┇إذاعــه عــام┇📢 ❯*\n\n*֎╎الـرسـالـه🀄┇* ${text}\n\n*֎╎الـمـطـور🧑‍💻┇* ${citel.pushName}` 
             await Void.sendMessage(i, { 
                 image: { 
                     url: "https://telegra.ph/file/6aada4aec4aa251ff14b3.jpg" 
                 }, 
                 caption: `${txt}` 
             }) 
         } 
         citel.reply(`*֎╎تـم الاذاعـه الـي ${anu.length} جـروب*`) 
    }
)      
          
          
          
//---------------------------------------------------------------------------

if(Config.WORKTYPE!=='private'){
cmd({ on: "text" }, async(Void, citel) => {
    const randomXp = 8;
    let usrname = citel.pushName
    const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
    if (hasLeveledUp) {
        const sck1 = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = sck1.level;
        var role = "فنان";
        if (lvpoints <= 2) {
            var role = "🏳مواطن";
        } else if (lvpoints <= 4) {
            var role = "👼طبيب اطفال";
        } else if (lvpoints <= 6) {
            var role = "🧙‍♀️ساحر";
        } else if (lvpoints <= 8) {
            var role = "🧙‍♂️معالج";
        } else if (lvpoints <= 10) {
            var role = "🧚🏻طفل ملاك";
        } else if (lvpoints <= 12) {
            var role = "🧜ملاك";
        } else if (lvpoints <= 14) {
            var role = "🧜‍♂️سيد الملاك";
        } else if (lvpoints <= 16) {
            var role = "🌬طفل نوبل";
        } else if (lvpoints <= 18) {
            var role = "❄نوبل";
        } else if (lvpoints <= 20) {
            var role = "⚡سرعه النخبه";
        } else if (lvpoints <= 22) {
            var role = "🎭النخبه";
        } else if (lvpoints <= 24) {
            var role = "🥇بارع I";
        } else if (lvpoints <= 26) {
            var role = "🥈بارع II";
        } else if (lvpoints <= 28) {
            var role = "🥉متفوق بارع";
        } else if (lvpoints <= 30) {
            var role = "🎖متفوق مسيطر";
        } else if (lvpoints <= 32) {
            var role = "🏅متفوق النخبه";
        } else if (lvpoints <= 34) {
            var role = "🏆فائق";
        } else if (lvpoints <= 36) {
            var role = "💍فائق I";
        } else if (lvpoints <= 38) {
            var role = "💎فائق Ii";
        } else if (lvpoints <= 40) {
            var role = "🔮سيد اللعبه";
        } else if (lvpoints <= 42) {
            var role = "🛡اسطوره III";
        } else if (lvpoints <= 44) {
            var role = "🏹اسطوره II";
        } else if (lvpoints <= 46) {
            var role = "⚔اسطوره";
        } else if (lvpoints <= 55) {
            var role = "🐉ابدي";
        } else {
            var role = "مختم اللعبه";
        }
        if (Config.levelupmessage !== 'false') {
            await Void.sendMessage(citel.chat, {
                image: {
                    url: await botpic(),
                },
                caption: `
*❋ ─═══━•┇ارتـفـع مـسـتـواك🤴┇•━═══─ ❋*
*⌁︙اسمڪ🪪↫ ${citel.pushName}*
*⌁︙مستواڪ💎↫ ${sck1.level}*
*⌁︙نقاطـڪ♦️↫ ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}*
*⌁︙دورڪ🏅↫ ${role}*
*❋ ─═══━•┇مـبـروك🏂┇•━═══─ ❋*
`,
            }, {
                quoted: citel,
            });
        }
    }

})
}