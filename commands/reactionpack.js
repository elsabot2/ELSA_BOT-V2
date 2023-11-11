/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 
 cmd({
            pattern: "reaction-pack",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
 **/

        const axios = require('axios')
        const { fetchJson,cmd, GIFBufferToVideoBuffer} = require('../lib')
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "عض",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bite`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} يـعـض @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} يـعـض نـفـسـه `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "blush",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/blush`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} blushed to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} blushed to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "اضرب",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kick`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} يـضـرب @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} يـضـرب نـفـسـه `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        
        cmd({
                    pattern: "قبل",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kiss`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} يـقـبـل @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} يـقـبـل نـفـسـه `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "اقتل",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kill`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} يـقـتـل @${users.split("@")[0]}. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} يـقـتـل نـفـسـه `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "ارقص",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/dance`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} يـرقـص مـع @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} يـرقـص مـع نـفـسـه `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        
        
        cmd({
                    pattern: "حب",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/wink`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} يـحـب @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} يـحـب نـفـسـه `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "كف",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/slap`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} يـعـطـي @${users.split("@")[0]} كـف `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} يـعـطـي نـفـسـه كـف `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "كسر",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bonk`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} يـكـسـر عـظـام @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} يـكـسـر عـظـام نـفـسـه `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "تنمر",
                    category: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bully`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} يـتـنـمـر عـلـي @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} يـتـنـمـر عـلـي نـفـسـه `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        
        cmd({
                pattern: "ضم",
                category: "reaction",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
        
                var bite = await fetchJson(`https://api.waifu.pics/sfw/cuddle`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} يـضـم @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} يـضـم نـفـسـه `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )