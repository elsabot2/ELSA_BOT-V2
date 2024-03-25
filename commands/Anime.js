const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1, cmd, GIFBufferToVideoBuffer } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');
// let gis = '' // require("g-i-s")
const { Anime, Manga } = require("@shineiichijo/marika");
const {  fetchJson, getBuffer} = require('../lib/')

//----------------------------------------------------------------------

cmd({
        pattern: "وايفو",
        desc: "To get Waifu Random Pics",
        category: "Anime Pics",
        filename: __filename
    },

  async(Void, citel, text) => {
        
         let name1 = text.split("|")[0] || ''
        let name2 = text.split("|")[1] || `1`
        let cap = text.split("|")[1] ? '': '*֎╎تـم اخـتـيـار صـوره وايـفـو لـك┇*'
         
for (let i = 0; i < name2; i++)
{
        let response;
        if(name1 == 'nsfw'){ response = await fetch("https://api.waifu.pics/nsfw/waifu");    }
        else  { response = await fetch("https://api.waifu.pics/sfw/waifu");  }
    
    const nekodds = await response.json();
    let buttonMessages = {
        image: { url: nekodds.url, },
        caption: cap,
        headerType: 1,
    };
     await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}

})
//-----------------------------------------------------------------------
cmd({
        pattern: "ناروتو",
        desc: "To get Naruto Random Videos",
        category: "Anime Pics",
        filename: __filename
    },
async(Void, citel,text) =>
{
        let res=await axios.get("https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Naruto.json")
        let url =  res.data.result[Math.floor(Math.random() * res.data.result.length)];
        return await Void.sendMessage(citel.chat,{video :{url : url } , caption: Config.caption }, { quoted: citel })
})
//-----------------------------------------------------------------------
cmd({
    pattern: "نيكو",
    category: "Anime Pics",
    desc: "Sends a Neko Image in chat",
    filename: __filename
},
async(Void, citel, text) => {
        let name1 = text.split("|")[0] || ''
        let name2 = text.split("|")[1] || `1`
        let cap = text.split("|")[1] ? '': "*֎╎تـم اخـتـيـار صـوره لـك┇*"
         
for (let i = 0; i < name2; i++)
{
        let response;
        if(name1 == 'nsfw'){ response = await fetch("https://waifu.pics/api/nsfw/neko");    }
        else  { response = await fetch("https://waifu.pics/api/sfw/neko");  }
    
    const nekodds = await response.json();
    let buttonMessages = {
        image: { url: nekodds.url, },
        caption: cap,
        headerType: 1,
    };
     await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}
        
})

//-----------------------------------------------------------------------

cmd({
    pattern: "لولي",
    category: "Anime Pics",
        filename: __filename,
    desc: "Sends image of loli in current chat."
},
async(Void, citel, text) => {
    waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
   /* var wbutss = [{
        buttonId: `${prefix}loli`,
        buttonText: { displayText: `Next Loli✨` },
        type: 1,
    }, ];*/

    await Void.sendMessage(citel.chat, {image: { url: waifud.data.url }}, {quoted: citel})
}
)

//-----------------------------------------------------------------------

cmd({
    pattern: "انمي",
    category: "Anime Pics",
    desc: "Searches Info about Anime and Provides result."
},
async(Void, citel, text) => {
    const client = new Anime();
    if (!text) return citel.reply(`*֎╎اكـتـب اسـم الانمـي اللـذي تبـحـث عـنـه بـالانـقـلـش*`);
    let anime = await client.searchAnime(text);
    let result = anime.data[0];
    //console.log(result);
    let details = `*֎╎العنوان🎀┇* ${result.title}\n`;
    details += `*֎╎الـشـكـل🎋┇* ${result.type}\n`;
    details += `*֎╎الـحـالـه📈┇* ${result.status
    .toUpperCase()
    .replace(/\_/g, " ")}\n`;
    details += `*֎╎مجـمـوع الحـلـقـات🍥┇* ${result.episodes}\n`;
    details += `*֎╎الـمـده🎈┇* ${result.duration}\n`;
    details += `*֎╎الأنواع🧧┇*\n`;
    for (let i = 0; i < result.genres.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `*֎╎مـرتـكـز عـلـى✨┇* ${result.source.toUpperCase()}\n`;
    details += `*֎╎الاسـتـوديـو📍┇*\n`;
    for (let i = 0; i < result.studios.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `*֎╎المـنتـجـيـن🎴┇*\n`;
    for (let i = 0; i < result.producers.length; i++) {
        details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `*֎╎العـرض الاول💫┇* ${result.aired.from}\n`;
    details += `*֎╎العـرض الاخـيـر🎗┇* ${result.aired.to}\n`;
    details += `*֎╎الـشـعبـيـه🎐┇* ${result.popularity}\n`;
    details += `*֎╎الــمفـضـلـه🎏┇* ${result.favorites}\n`;
    details += `*֎╎الـتقـيـيم🎇┇* ${result.rating}\n`;
    details += `*֎╎الـرانـك🏅┇* ${result.rank}\n\n`;
    if (result.trailer.url !== null)
        details += `*֎╎عـنـوان الـرابـط♦┇* ${result.trailer.url}\n\n`;
    details += `*֎╎الـرابـط🌐┇* ${result.url}\n\n`;
    if (result.background !== null)
        details += `*֎╎الـخلـفـيـه🎆┇* ${result.background}*\n\n`;
    details += `*֎╎الـوصـف❄┇* ${result.synopsis}`;

 Void.sendMessage( citel.chat, { image: {  url: result.images.jpg.large_image_url, }, caption: details, }, { quoted: citel,});
}
   )
//---------------------------------------------------------------------------

cmd({
        pattern: "ويلبر",
        desc: "To get Random Pics",
       category: "Anime Pics",
        filename: __filename
    },

    async(Void, citel, text) => {


const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: '*֎╎تـم اخـتـيـار ويلبر لـك┇*',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged , {quoted : citel});


}
   )
