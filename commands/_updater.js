//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const DB = require('../lib/scraper');
const { execSync } = require('child_process');
const { tlang, Config, prefix, cmd, sleep } = require('../lib');

let updating = false;

cmd({
    pattern: "update",
    alias: ["تحديث"],
    desc: "Shows repo's refreshed commits.",
    category: "misc",
    filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply('*֎╎هـذا الامـر للـمـطـور فـقـط*');

    if (updating) {
        citel.reply("*֎╎جـاري الـتـحـديـث انـتـظـر*");
        return;
    }

    updating = true;
    let asciiBorder = '*❋ ─═══━•┇❄️┇•━═══─ ❋*\n';
    asciiBorder += '┇    *֎╎جـاري تـحـديـث ELSA_BOT*     ┇\n';
    asciiBorder += '*❋ ─═══━•┇❄️┇•━═══─ ❋*\n';

    // Create a loading bar
    const loadingBarLength = 20;
    const loadingMessage = {
        text: `${asciiBorder}*֎╎جـاري الـتـحـديـث┇*  [${' '.repeat(loadingBarLength)}] 0%`,
        footer: 'UPDATER',
        headerType: 4
    };
    const { key } = await Void.sendMessage(citel.chat, loadingMessage);

    // Simulate an update process (you can replace this with your actual update logic)
    for (let i = 1; i <= loadingBarLength; i++) {
        await sleep(1000); // Simulate a step in the update process
        const progress = (i / loadingBarLength) * 100;
        const updatedMessage = {
            text: `${asciiBorder}*֎╎جـاري الـتـحـديـث┇* [${'█'.repeat(i)}${' '.repeat(loadingBarLength - i)}] ${progress.toFixed(0)}%`,
            footer: 'UPDATER',
            headerType: 4
        };
        await Void.sendMessage(citel.chat, updatedMessage, { edit: key });
    }

    // After the update process, send the final message
    const finalMessage = {
        text: `${asciiBorder}*֎╎انـتـهـي الـتـحـديـث*`,
        footer: 'UPDATER',
        headerType: 4
    };
    await Void.sendMessage(citel.chat, finalMessage, { edit: key });
    updating = false;
});

  
