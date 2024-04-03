//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const { dare, truth, kt, hal } = require('../lib/truth-dare.js')
 const axios = require('axios')
 const { cmd } = require('../lib')
     //---------------------------------------------------------------------------
 cmd({
             pattern: "كت",
             filename: __filename,
         },
         async(Void, citel, text) => {
             return await citel.reply(`${kt()}`);
         }
     )
 
 //---------------------------------------------------------------------------

 cmd({
    pattern: "هل",
    filename: __filename,
},
async(Void, citel, text) => {
    return await citel.reply(`${hal()}`);
}
)
//---------------------------------------------------------------------------
 cmd({
             pattern: "سؤال",
             filename: __filename,
         },
         async(Void, citel, text) => {
             return await citel.reply(`${truth()}`);
         }
     )
     //---------------------------------------------------------------------------
 
     //---------------------------------------------------------------------------
 cmd({
             pattern: "ه",
             filename: __filename,
         },
         async(Void, citel, text) => {
             return await citel.reply(`${dare()}`);
         }
     )
     //---------------------------------------------------------------------------
 
