//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

//---------------------------------------------------------------------------
const Secktor = require('../lib');
Secktor.cmd({
    pattern: "ping",
    alias: ["السرعة","السرعه","بينغ","بينج"],
    desc: "To check ping",
    category: "general",
    filename: __filename,
},
async (Void, citel) => {
    var initial = new Date().getTime();
    const { key } = await Void.sendMessage(citel.chat, { text: '*֎╎جـاري قـيـاس الـسـرعـه...*' });
    var final = new Date().getTime();

    // Calculate the ping value in milliseconds
    const pingValue = final - initial;

    // Create a loading bar
    const loadingBarLength = 20;
    const loadedBlocks = loadingBarLength;
    const loadingBar = '█'.repeat(loadedBlocks);

    // Send the loading bar first
    await Void.sendMessage(citel.chat, { text: `*֎╎قـيـاس الـسـرعـه┇*\n*֎╎جـاري الـتـحـمـيـل* [${loadingBar}] 100%`, edit: key });

    // Wait for a brief moment (you can customize this delay)
    await Secktor.sleep(1000);

    // Send the final ping message
    return await Void.sendMessage(citel.chat, { text: `*֎╎الـسـرعـه┇ ${pingValue} مـلـلـي ثـانـيـه*` });
});
