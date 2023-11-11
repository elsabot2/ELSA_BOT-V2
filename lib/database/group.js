const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "❃━═━═✦•〘❄️〙•✦═━═━❃\n*♥︎•⇓﷽ رســـالة ترحـــيب⇓•♥︎*\n*~ يـــا أهـــلا وســـهلا بك في نقابة  يــشــرفـــنـا بـــمـن هـو ممـــيز ، تقبلـــ/ـي تحـــياتـــنا وتقـــديرنـا ومرحـــبا بڪ ضمـــن عائلـــتنا المتــواضـــعــہ♥︎*\n*~ نتـــمنى مشـــارڪـــتڪ °وتفـــاعـــلڪ وابداعـــڪ༺.*\n❃━═━═✦•〘❄️〙•✦═━═━❃\n*⊢❉ المـــنـشـن╎❯〖@منشن〗*\n*⊢❉ نقـــابة╎❯〖@اسم〗*\n❃━═━═✦•〘❄️〙•✦═━═━❃\n*⊢❉ الـــوصف╎❯〖@وصف〗*\n @صوره" },
goodbye:{ type: String, default: "❃━═━═✦•〘❄️〙•✦═━═━❃\n*♥︎•⇓﷽ رســـالة مـغـادره⇓•♥︎*\n❃━═━═✦•〘❄️〙•✦═━═━❃\n*⊢❉ المـــنـشـن╎❯〖@منشن〗*\n*⊢❉ نقـــابة╎❯〖@اسم〗*\n\n*~نـتـمني ان تـكـون اسـتـمـتعت مـعـنـا في نقابتنا المتــواضـــعــہ♥*\n❃━═━═✦•〘❄️〙•✦═━═━❃\n @صوره" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "true" },
economy: { type: String, default: "false" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
