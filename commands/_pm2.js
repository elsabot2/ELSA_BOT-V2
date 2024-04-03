//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const {cmd,tlang,sleep} = require('../lib')
cmd({
        pattern: "restart",
        alias: ["رستر","ريستارت"],
        desc: "To restart bot",
        category: "tools",
        filename: __filename
    },
    async(Void, citel,text,{ isCreator }) => {
   if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            citel.reply('*֎╎جـاري اعـاده الـتـشـغـيـل...*')
            await sleep(2000)
            exec('pm2 restart all')
    }
);
