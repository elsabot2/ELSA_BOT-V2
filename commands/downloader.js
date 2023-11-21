const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 36000 // 300 min
var dlsize = 1000 // 1000mb
    //---------------------------------------------------------------------------
cmd({
            pattern: "tgs",
            desc: "Downloads telegram stickers.",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>'
        },
        async(Void, citel, text) => {
		if (!text) return await citel.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
		if (!text.includes("addstickers"))  return await citel.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
		let tgUrl = text.split("|")[0];
		let find = tgUrl.split("/addstickers/")[1];
		let { result } = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(find)} `);
		let check = text.split("|")[1] || "";
		let res = `Total stickers: ${result.stickers.length}\n*Estimated complete in:* ${result.stickers.length * 1.5} seconds\nKeep in mind that there is a chance of a ban if used frequently`.trim()
		if (result.is_animated) return await citel.reply("Animated stickers are not supported");
  		else if (check.startsWith("info")) return await citel.reply(res);
		let limit = parseInt(check.split(",")[0]) || 10;
		let count =  parseInt(check.split(",")[1]) ||  0;
	 	let isCheckText = check.split(";")[1] ||  "Sticker"
		let isSticker = true ;
	        if (isCheckText.includes("photo") ){isSticker = false ;	isCheckText = "Photo"}
		if(limit > result.stickers.length ) {  limit = result.stickers.length  }
	        if(count > result.stickers.length ) {  count = result.stickers.length - 5  }
		if(count > limit ){let temp = limit ;   limit = count;	count = temp ;}
		await citel.reply(`${res}\n\n_Downloading as ${isCheckText} From index *${count}* to *${limit}*._\nIf you wants more to download then use Like \n\n .tgs ${tgUrl} |  10 ,  20 ; photo`)
		for ( count ; count < limit ; count++) 
		{
		 // if (count >= limit) break;
		  let file_path = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${result.stickers[count].file_id}`);
		  let sticUrl = `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`;
		  if(isSticker) { let a = await getBuffer(sticUrl); await citel.reply(a, { packname: Config.packname, author: "Suhail-Md"  }, "sticker");} 
		  else { await Void.sendMessage(citel.chat,{image : {url : sticUrl } , caption : `*_Telegram Sticker At Index ${count+1} Downloaded_*`}) } 
		  //count++;
		}


 
//function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return citel[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return citel['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');citel[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Void[__lobC(0x1bf)+__lobC(0x197)](citel[__lobC(0x1cf)],__lobb,citel,{'packname':Config['packname'],'author':citel[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        
	
 
 })

    //---------------------------------------------------------------------------
cmd({
            pattern: "tts",
            alias :["قول","انطق"],
            react: "📼",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Secktor>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*֎╎اكـتـب اي شـي وسـوف انـطـقـه*')
            let texttts = text
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "ar",
                slow: false,
                host: "https://translate.google.com",
            });
            return Void.sendMessage(citel.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsCitelVoid.m4a`,
            }, {
                quoted: citel,
            });
        }

    )
    
     //---------------------------------------------------------------------------
     
cmd({

            pattern: "فيزات",           
            alias :['هيروكو','فيزه','فيزا'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
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
                    url: await botpic(),
                },

                caption: `
*فـيـزات لـتـفـعـيـل هـيـروكـو*


FIRST NAME : ABDALLAH

SECOND NAME : MOHAMED

COUNTRY : US

ADDRESS 1 : heroku cc 2023 bin

CITY : NEW YORK

STATE : NEW YORK

ZIP CODE : 10080

5148121009026432|08|2025|833

5148121009088184|08|2025|166

5148121009340221|08|2025|334

5148121009672763|08|2025|808

5148121009537453|08|2025|248

5148121009726403|08|2025|818

5148121009768132|08|2025|676

5148121009870383|08|2025|511

5148121009806742|08|2025|766

5148121009557634|08|2025|641

5148121009825403|08|2025|346

5148121009806072|08|2025|546

5148121009143336|08|2025|413

5148121009800604|08|2025|144

5148121009586328|08|2025|516

5148121009670403|08|2025|687

5148121009661006|08|2025|571

5148121009183266|08|2025|730

5148121009106580|08|2025|043

5148121009337276|08|2025|645

5148121009734563|08|2025|438

5148121009721883|08|2025|342

5148121009585817|08|2025|011

5148121009200714|08|2025|563

5148121009355542|08|2025|431

5148121009510872|08|2025|100

5148121009071040|08|2025|550

5148121009465366|08|2025|272

5148121009700630|08|2025|232

5148121009748415|08|2025|245

*BY: ELSA BOT ❄️*
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
     cmd({
        pattern: "yts",
        alias :["يوتيوب","بحث"],
        react: "🔎",
        desc: "Gives descriptive info of query from youtube..",
        category: "downloader",
        filename: __filename,
        use: '<yt search text>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");
        if (!text) return citel.reply(`*֎╎اكـتـب عـنـوان للـبـحـث مـثـال┇.يوتيوب طـريـقـه صـنـع بـوت*`);
        let search = await yts(text);
        let textt = " ╼━━━━━➢━━━━━━╾\n🔎𝛯𝐿𝑆𝛥 𝑌𝛩𝑈𝑇𝑈𝐵𝛯 𝑆𝛯𝛥𝑅𝐶𝛨🔎\n╼━━━━━➢━━━━━━╾\n\n *֎╎عـنـوان الـبـحـث🗒️┇*" + text + "\n\n*❋ ─═══━•┇❄️┇•━═══─ ❋*\n";
        let no = 1;
        for (let i of search.all) {
            textt += `*֎╎الـطـريـقـه⚡┇* ${no++}\n *֎╎الـعـنـوان❤┇* ${i.title}\n*֎╎الـنـوع🌿┇* ${
      i.type
    }\n*֎╎الـمـشـاهـدات🙈┇* ${i.views}\n*֎╎الـمـده⌛┇* ${
      i.timestamp
    }\n*֎╎وقـت الـنـشـر🌟┇* ${i.ago}\n*֎╎الـقـنـاه👑┇* ${i.author.name}\n*֎╎الـرابـط🔗┇* ${
      i.url
    }\n\n*❋ ─═══━•┇❄️┇•━═══─ ❋*\n\n`;
        }
        return Void.sendMessage(citel.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: textt,
        }, {
            quoted: citel,
        });
    }
)
    //---------------------------------------------------------------------------

cmd({
            pattern: "pint",
            alias :["بينت","بينترست"],
            react: "📥",
            desc: "Downloads image from pinterest.",
            category: "downloader",
            filename: __filename,
            use: '<text|image name>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("*֎╎اكـتـب عـنـوان للـبـحـث*") && Void.sendMessage(citel.chat, {
                react: {
                    text: '❌',
                    key: citel.key
                }
            })
            try {
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttonMessage = {
                    image: {
                        url: result
                    },
                    caption: ` `,
                    footer: tlang().footer,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: `*بـوتـه الـسـا بـالـخـدمـه✨*`,
                            body: `${Config.ownername}`,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: ``,
                            sourceUrl: ``
                        }
                    }
                }
                return Void.sendMessage(citel.chat, buttonMessage, {
                    quoted: citel
                })
            } catch (e) {
                console.log(e)
            }
        })
    //---------------------------------------------------------------------------
cmd({
            pattern: "mediafire",
            alias :['ميديا','ميديافاير'],
            desc: "Downloads media from Mediafire.",
            category: "downloader",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*֎╎ارسـل الـرابـط*`);
            
            if (!text.includes("mediafire.com")) return citel.reply(`*֎╎الـرابـط غـيـر صـحـيـح*`);
            let isUrl=text;
            const baby1 = await mediafire(isUrl);
	
	if(!baby1.length) return citel.reply(`*֎╎الـرابـط غـيـر صـحـيـح*`);
	const apkSize = parseInt(baby1[0].size);
	if(apkSize > 100) return citel.reply(`*֎╎الـمـلـف ك بـيـر جـدا*`);
	
let result4 = ` *📥𝛯𝐿𝑆𝛥 𝛭𝛯𝐷𝛪𝛥𝐹𝛪𝑅𝛯📥*
*❄️⃝🧚‍♀️الاسـم👤┇ ${baby1[0].nama}*
*❄️⃝🧚‍♀️لـحـجـم⭕┇ ${baby1[0].size}*
*❄️⃝🧚‍♀️مـلـكـي🔰┇ ${baby1[0].mime}*

`;
	result4 +=Config.caption ; 
	
            //citel.reply(`${result4}`);
            
            let buttonMessaged = {
                    document: { url: baby1[0].link, },
                    caption: result4,
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                    
                }; 
                
 return await Void.sendMessage(citel.chat, buttonMessaged)
                //.catch((err) => citel.reply(`could not found anything`));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "song",
            react: "🎧",
            alias :["play","شغل"],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack"); 
let textYt;        
if (text.startsWith("https://youtube.com/shorts/")) {
  const svid = text.replace("https://youtube.com/shorts/", "https://youtube.com/v=");
  const s2vid = svid.split("?feature")[0];
  textYt = s2vid;
} else {
  textYt = text;
}
            let search = await yts(textYt);
            let anu = search.videos[0];
                       let buttonMessaged ={
             image: {
                    url: anu.thumbnail,
               },
                caption: `
 ╼━━━━━━➢━━━━━━━━╾
      🎧𝛯𝐿𝑆𝛥 𝑌𝛩𝑈𝑇𝑈𝐵𝛯⃤🎧
 ╼━━━━━━➢━━━━━━━━╾

*❄️⃝🧚‍♀️الـعـنـوان🗒️┇* ${anu.title}
*❄️⃝🧚‍♀️لـمـده⏳┇* ${anu.timestamp}
*❄️⃝🧚‍♀️الـمـشـاهـدات👀┇* ${anu.views}
*❄️⃝🧚‍♀️الـنـشـر📤┇* ${anu.ago}
*❄️⃝🧚‍♀️الـقـنـاه🧑‍🎤┇* ${anu.author.name}
*❄️⃝🧚‍♀️الـفـيديـو⬇️┇*
*❄️⃝🧚‍♀️الـرابـط🔗┇* ${anu.url}

───────➢────────
*❄️⃝🧚‍♀️اخـتـر نـوع الـتـحـمـيـل┇*
 ◍┈─┈──┈─◈❁◈─┈─┈─┈─◍

*❄️⃝🧚‍♀️اكـتـب .1 ╏ لـلـتـحـمـيـل صوت* 🎧
*❄️⃝🧚‍♀️اكـتـب .2 ╏ لـلـتـحـمـيـل مـلـف* 📂

◍┈─┈──┈─◈❁◈─┈─┈─┈─◍

*❄️❬ 𝑩𝒀 : 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻 ❭❄️* 
`,
                footer: tlang().footer,
                headerType: 4,
            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,
            });

            

            


        }
    )
cmd({
            pattern: "1",
            react: "",
            alias :[],
            desc: "",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
		try{
var msg = citel	
if(!msg.quoted) return 
if (!msg.quoted.isBaileys ) return 
if(!msg.quoted.caption) return console.log('ew')
text = msg.quoted.caption
if (!text.includes('🎧 𝛯𝐿𝑆𝛥 𝐵𝛩𝑇 𝛥𝑈𝐷𝛪𝛩 🎧'))  return 
text = text.split('╏📡 *الـرابـط* : ')[1].split('\n')[0]		
if(!text) return 
await Void.sendMessage(citel.chat, { react: {  text: "🎧", key: msg.key } } )			
		        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply(`*֎╎ارسـل رابـط فـيـديـو يـوتـيـوب*`);
            return;
        }
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`*֎╎ارسـل رابـط فـيـديـو يـوتـيـوب*`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                citel.reply(`*֎╎حـجـم المـقـطـع كـبـيـر جـدا*`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                
             
             let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                   
                }
             
             
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
		
		} }catch(e){
			citel.reply('' + e)
		}})


cmd({
            pattern: "2",
            react: "",
            alias :[],
            desc: "",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
		try{
var msg = citel	
if(!msg.quoted) return 
if (!msg.quoted.isBaileys ) return 
if(!msg.quoted.caption) return console.log('ew')
text = msg.quoted.caption
if (!text.includes('🎧 𝛯𝐿𝑆𝛥 𝐵𝛩𝑇 𝛥𝑈𝐷𝛪𝛩 🎧'))  return 
text = text.split('╏📡 *الـرابـط* : ')[1].split('\n')[0]		
if(!text) return 
await Void.sendMessage(citel.chat, { react: {  text: "⬇️", key: msg.key } } )			
		        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply(`*֎╎ارسـل رابـط فـيـديـو يـوتـيـوب*`);
            return;
        }
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`*֎╎ارسـل رابـط فـيـديـو يـوتـيـوب*`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                citel.reply(`*֎╎حـجـم المـقـطـع كـبـيـر جـدا*`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                
             
             let buttonMessage = {
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
		    caption: `*❄️❬ 𝑩𝒀 : 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻 ❭❄️*`,       
                    headerType: 4,
                   
                }
             
             
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
		
		} }catch(e){
			citel.reply('' + e)
		}})

cmd({
            pattern: "video",
            react: "🎞️",
            alias :["vid","فيديو","mp4"],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack"); 
let textYt;        
if (text.startsWith("https://youtube.com/shorts/")) {
  const svid = text.replace("https://youtube.com/shorts/", "https://youtube.com/v=");
  const s2vid = svid.split("?feature")[0];
  textYt = s2vid;
} else {
  textYt = text;
}
            let search = await yts(textYt);
            let anu = search.videos[0];
                       let buttonMessaged ={
             image: {
                    url: anu.thumbnail,
               },
                caption: `
 ╼━━━━━━➢━━━━━━━━╾
      🎧𝛯𝐿𝑆𝛥 𝑌𝛩𝑈𝑇𝑈𝐵𝛯⃤🎧
 ╼━━━━━━➢━━━━━━━━╾

*❄️⃝🧚‍♀️الـعـنـوان🗒️┇* ${anu.title}
*❄️⃝🧚‍♀️لـمـده⏳┇* ${anu.timestamp}
*❄️⃝🧚‍♀️الـمـشـاهـدات👀┇* ${anu.views}
*❄️⃝🧚‍♀️الـنـشـر📤┇* ${anu.ago}
*❄️⃝🧚‍♀️الـقـنـاه🧑‍🎤┇* ${anu.author.name}
*❄️⃝🧚‍♀️الـفـيديـو⬇️┇*
*❄️⃝🧚‍♀️الـرابـط🔗┇* ${anu.url}

───────➢────────
*❄️⃝🧚‍♀️اخـتـر نـوع الـتـحـمـيـل┇*
 ◍┈─┈──┈─◈❁◈─┈─┈─┈─◍

*❄️⃝🧚‍♀️اكـتـب .3 ╏ لـلـتـحـمـيـل فـيـديـو* 📽️
*❄️⃝🧚‍♀️اكـتـب .4 ╏ لـلـتـحـمـيـل مـلـف* 📂

◍┈─┈──┈─◈❁◈─┈─┈─┈─◍

*❄️❬ 𝑩𝒀 : 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻 ❭❄️* 
`,
                footer: tlang().footer,
                headerType: 4,
            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,
            });

            

            


        }
    )
cmd({
            pattern: "3",
            react: "",
            alias :[],
            desc: "",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
  var msg = citel
	
if(!msg.quoted) return 
if (!msg.quoted.isBaileys ) return 
if(!msg.quoted.caption) return console.log('ew')
text = msg.quoted.caption
if (!text.includes('🎧 𝛯𝐿𝑆𝛥 𝐵𝛩𝑇 𝛻𝛪𝐷𝛯𝛩 🎧'))  return 
text = text.split('╏📡 *الـرابـط* : ')[1].split('\n')[0]		
if(!text) return 
await Void.sendMessage(citel.chat, { react: {  text: "⬇️", key: msg.key } } )		// denna one react eka
 const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(text);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*֎╎حـجـم الـفـيـديـو كـبـيـر جـدا*`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
             //   citel.reply('*Downloadig:* '+titleYt)
                const stream = ytdl(text, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        mimetype: 'video/mp4',
                        caption:`*❄️❬ 𝑩𝒀 : 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻 ❭❄️*`,   
		    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`*֎╎حـجـم الـفـيـديـو كـبـيـر جـدا*`);
                }
                return fs.unlinkSync(`./${randomName}`);      

            
		
 })


cmd({
            pattern: "4",
            react: "",
            alias :[],
            desc: "",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
  var msg = citel
	
if(!msg.quoted) return 
if (!msg.quoted.isBaileys ) return 
if(!msg.quoted.caption) return console.log('ew')
text = msg.quoted.caption
if (!text.includes('🎧 𝛯𝐿𝑆𝛥 𝐵𝛩𝑇 𝛻𝛪𝐷𝛯𝛩 🎧'))  return 
text = text.split('╏📡 *الـرابـط* : ')[1].split('\n')[0]		
if(!text) return 
await Void.sendMessage(citel.chat, { react: {  text: "⬇️", key: msg.key } } )		// denna one react eka
 const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(text);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*֎╎حـجـم الـفـيـديـو كـبـيـر جـدا*`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
             //   citel.reply('*Downloadig:* '+titleYt)
                const stream = ytdl(text, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                         document: fs.readFileSync(`./${randomName}`),
                        mimetype: 'document/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `*❄️❬ 𝑩𝒀 : 𝑬𝑳𝑺𝑨 𝑩𝑶𝑻 ❭❄️*`,  
		    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`*֎╎حـجـم الـفـيـديـو كـبـيـر جـدا*`);
                }
                return fs.unlinkSync(`./${randomName}`);      

            
		
 })
