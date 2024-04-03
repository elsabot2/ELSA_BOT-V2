//تم تطوير هذا الملف بواسطه الجزار وايتاتشي


 const flagPairs = [
   { flag: "🇺🇸", country: "الولايات المتحده" },
   { flag: "🇬🇧", country: "المملكه المتحده" },
   { flag: "🇫🇷", country: "فرنسا" },
   { flag: "🇩🇪", country: "المانيا" },
   { flag: "🇨🇦", country: "كندا" },
   { flag: "🇦🇺", country: "استراليا" },
   { flag: "🇯🇵", country: "اليابان" },
   { flag: "🇮🇳", country: "الهند" },
   { flag: "🇮🇹", country: "اطاليا" },
   { flag: "🇪🇸", country: "اسبانيا" },
   { flag: "🇷🇺", country: "روسيا" },
   { flag: "🇧🇷", country: "البرازيل" },
   { flag: "🇨🇳", country: "الصين" },
   { flag: "🇲🇽", country: "المكسيك" },
   { flag: "🇿🇦", country: "جنوب افريقيا" },
   { flag: "🇰🇷", country: "كوريا" },
   { flag: "🇸🇦", country: "السعوديه" },
   { flag: "🇸🇬", country: "سنغافوره" },
   { flag: "🇸🇪", country: "السويد" },
   { flag: "🇨🇭", country: "سويسرا" },
   { flag: "🇦🇷", country: "الارجنتين" },
   { flag: "🇦🇹", country: "النمسا" },
   { flag: "🇧🇪", country: "بلجيكا" },
   { flag: "🇨🇱", country: "تشيلي" },
   { flag: "🇨🇴", country: "كولومبيا" },
   { flag: "🇨🇿", country: "تشيكيا" },
   { flag: "🇩🇰", country: "الدنمارك" },
   { flag: "🇪🇬", country: "مصر" },
   { flag: "🇫🇮", country: "فنلندا" },
   { flag: "🇬🇷", country: "اليونان" },
   { flag: "🇭🇺", country: "المجر" },
   { flag: "🇮🇩", country: "اندونيسيا" },
   { flag: "🇮🇪", country: "ايرلندا" },
   { flag: "🇵🇸", country: "فلسطين" },
   { flag: "🇮🇱", country: "اخرائيل" },
   { flag: "🇯🇴", country: "الاردن" },
   { flag: "🇰🇿", country: "كازاخستان" },
   { flag: "🇱🇧", country: "لبنان" },
   { flag: "🇲🇾", country: "ماليزيا" },
   { flag: "🇲🇻", country: "مالديفز" },
   { flag: "🇳🇱", country: "هولندا" },
   { flag: "🇳🇿", country: "نيوزيلندا" },
   { flag: "🇳🇴", country: "النرويج" },
   { flag: "🇵🇰", country: "باكستان" },
   { flag: "🇵🇱", country: "بولندا" },
   { flag: "🇵🇹", country: "البرتغال" },
   { flag: "🇶🇦", country: "قطر" },
   { flag: "🇷🇴", country: "رومانيا" },
   { flag: "🇷🇸", country: "صربيا" },
   { flag: "🇮🇶", country: "العراق" },
   { flag: "🇮🇷", country: "ايران" },
   { flag: "🇰🇼", country: "الكويت" },
   { flag: "🇱🇾", country: "ليبيا" },
   { flag: "🇲🇦", country: "المغرب" },
   { flag: "🇹🇷", country: "تركيا" },
   { flag: "🇸🇩", country: "السودان" },
   { flag: "🇸🇾", country: "سوريا" },
   { flag: "🇹🇳", country: "تونس" },
   { flag: "🇦🇪", country: "الامارات" },
   { flag: "🇾🇪", country: "اليمن" },
   { flag: "🇪🇭", country: "الجمهوريه العربيه" },
   { flag: "🇱🇻", country: "لاتفيا" },
 ];

 let currentFlagIndex = 0;
 let score = 0;

 cmd(
   {
     pattern: "علم",
     desc: "Display the next flag.",
     category: "game",
   },
   (Void, citel) => {
     if (currentFlagIndex >= flagPairs.length) {
       currentFlagIndex = 0;
     }

     const flagPair = flagPairs[currentFlagIndex];
     const flagWithBorder = addFancyBorder(flagPair.flag);
     citel.reply(`*֎╎لاي دولـه هـذا الـعـلـم┇ ${flagWithBorder}*`);
     currentFlagIndex++;
   }
 );

 cmd(
   {
     pattern: "الاجابه",
     desc: "Check your answer for the flag guessing game.",
     category: "game",
   },
   (Void, citel, text) => {
     if (currentFlagIndex === 0) {
       return citel.reply("*֎╎لا تـوجـد لـعـبـه تـخـمـيـن الـعـلـم تـعـمـل حـالـيًـا*");
     }

     const userAnswer = text.trim().toLowerCase();
     const flagPair = flagPairs[currentFlagIndex - 1];
     const correctAnswer = flagPair.country.toLowerCase();

     if (userAnswer === correctAnswer) {
       citel.reply(`*֎╎مـبـروك اجـابـتـك "${text}" صـحـيـحـه🎉*`);
       score++;
     } else {
       citel.reply(`*֎╎الاجـابـه "${text}" خـطـأ حـاول مـره اخـري*`);
     }

     citel.reply("*֎╎الانـتـقـال الـي الـعـلـم الـتـالـي...*");
     if (currentFlagIndex >= flagPairs.length) {
       currentFlagIndex = 0;
       citel.reply(`*֎╎انـتـهـت اللـعـبـه،درجـاتـك الـنـهـائـيـه* ${score}/${flagPairs.length}.`);
       score = 0;
       return;
     }

     const nextFlagPair = flagPairs[currentFlagIndex];
     const nextFlagWithBorder = addFancyBorder(nextFlagPair.flag);
     citel.reply(`*֎╎لاي دولـه هـذا الـعـلـم┇ ${nextFlagWithBorder}*`);
     currentFlagIndex++;
   }
 );

 // Function to add a fancy border around the flag
 function addFancyBorder(flag) {
   const border = "•";
   return `${border}${flag}${border}`;
 }