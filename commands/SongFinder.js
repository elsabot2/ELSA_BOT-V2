//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const { tlang,shazam,prefix,cmd } = require('../lib')
let yts = require("secktor-pack");
cmd({
        pattern: "اكشف",
        category: "misc",
        desc: "Finds info about song"
    },
    async(Void, citel, args) => {
        let mime = citel.quoted.mtype
        if (!citel.quoted) return citel.reply(`*֎╎رد عـلـي مـقـطـع صـوتـي*`);
        if (!/audio/.test(mime)) return citel.reply(`*֎╎رد عـلـي مـقـطـع صـوتـي*`);
        let buff = await citel.quoted.download();
        let data = await shazam(buff);
        if (!data.status) return citel.reply(data);
	let search = await yts(data.title);
let anu = search.videos[0];
          let h =  `*❄️⃝🧚‍♀️الـعـنـوان🗒️┇*_${data.title}_           
*❄️⃝🧚‍♀️الـفـنـان┇* _${data.artists}_            
*❄️⃝🧚‍♀️الالـبـوم┇* _${data.album}_                   
*❄️⃝🧚‍♀️تـاريخ الـنشر┇* _${data.release_date}

*֎╎لـتـحمـيل الاغـنـيه*
${prefix}صوتي ${anu.url}
`

let buttonMessaged = {
				image: {
                                      url: anu.thumbnail,
                                       },
				caption: h,
				footer: tlang().footer,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: data.artists,
						body: data.album,
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
    }
 )
