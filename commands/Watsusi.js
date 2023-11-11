const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");
const { tlang } = require('../lib');
const Config = require('../config');

cmd({
  pattern: "save",
  fromMe: true,
  desc: "Forward replied message to yourself",
  category: "watsusi",
}, async (Void, citel) => {
  if (!citel.hasQuoted) return await citel.reply("_Reply to a message_");

  const quotedMessage = await citel.loadMessage(citel.getQuotedMsgId());

  if (quotedMessage) {
    await Void.forwardMessage(Void.user.jid, quotedMessage);
    return await citel.reply("*Message saved successfully*");
  } else {
    await citel.reply("*Unable to retrieve the message*");
  }
});


cmd({
  pattern: "sv",
  desc: "Save WhatsApp status",
  category: "watsusi",
  filename: __filename
},
async (Secktor, msg, text, { cmdName, isCreator }) => {
  if (!msg.quoted) return await msg.send("*Uhh Please, reply to a WhatsApp status*");
  let izuku_num = await Secktor.bot.decodeJid(msg.user);
  return await forwardMessage(izuku_num, Secktor, msg, cmdName);
});

cmd({
  pattern: "save",
  desc: "Save Message to log number",
  category: "watsusi",
  filename: __filename
},
async (Secktor, msg, text, { cmdName, isCreator }) => {
  if (!isCreator) return await msg.send(tlang().owner);
  if (!msg.quoted) return await msg.send("*Uhh Please, reply to a Message*");
  let izuku_num = await Secktor.bot.decodeJid(msg.user);
  return await forwardMessage(izuku_num, Secktor, msg, cmdName);
});

cmd({
  on: "text"
},
async (Secktor, msg, text) => {
  if (msg.quoted && msg.text.toLowerCase().includes("send")) {
    let izuku_num = await Secktor.bot.decodeJid(msg.user);
    if (msg.quoted.sender === izuku_num && msg.quoted.chat === 'status@broadcast') {
      return await forwardMessage(msg.chat, Secktor.bot, msg, 'send');
    }
  }
});

cmd({
  pattern: "pp",
  desc: "Set profile picture",
  category: "watsusi",
  use: '<reply to image>',
  filename: __filename
},
async (Secktor, msg, text, { cmdName, isCreator }) => {
  if (!isCreator) return await msg.send(tlang().owner);
  if (!msg.quoted) return await msg.reply("*Reply to an image, dear*");
  if (msg.quoted.mtype != 'imageMessage') return await msg.reply("*_Uhh please, Reply to an image._*");
  const izuku_num = await Secktor.bot.decodeJid(msg.user);
  return await updateProfilePicture(Secktor, izuku_num, msg, cmdName);
});

cmd({
  pattern: "gjid",
  fromMe: true,
  desc: "Get the JID of the current group",
  type: "watsusi",
}, async (Void, citel) => {
  if (!citel.isGroup) {
    await citel.reply("This command can only be used in a group.");
    return;
  }

  const groupJID = citel.chat;
  await citel.reply(`The JID of this group is: ${groupJID}`);
});

cmd({
  pattern: "groupbroad",
  fromMe: true,
  desc: "Send a broadcast message to the group",
  type: "excel",
}, async (Void, citel, text) => {
  if (!text) return await citel.reply("_Please provide a message to broadcast_");

  const groupJid = "120363193106986276@g.us"; // Replace with the JID of your group

  await Void.sendMessage(groupJid, text);

  return await citel.reply("_Broadcast sent successfully_");
});
