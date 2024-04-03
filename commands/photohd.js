//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const axios = require('axios')
const { cmd } = require('../lib')

     //---------------------------------------------------------------------------

     const images = [
        "https://images.alphacoders.com/605/605592.png",
"https://images5.alphacoders.com/587/587597.jpg",
"https://images2.alphacoders.com/564/564835.jpg",
"https://images6.alphacoders.com/596/596848.jpg",
"https://images7.alphacoders.com/303/303042.png",
"https://images7.alphacoders.com/611/611138.png",
"https://images4.alphacoders.com/474/47438.png",
"https://images.alphacoders.com/598/598846.jpg",
"https://images8.alphacoders.com/545/545909.jpg",
"https://images2.alphacoders.com/516/516664.jpg",
"https://images8.alphacoders.com/533/533007.png",
"https://images4.alphacoders.com/476/47666.png",
"https://images4.alphacoders.com/476/47698.png",
"https://images2.alphacoders.com/727/72732.png",
"https://images4.alphacoders.com/678/678317.jpg",
"https://images3.alphacoders.com/135/135625.jpg",
"https://images7.alphacoders.com/593/593476.png",
"https://images.alphacoders.com/736/736461.png",
"https://images4.alphacoders.com/641/641968.jpg",
"https://images3.alphacoders.com/144/144565.jpg",
"https://images2.alphacoders.com/606/606275.jpg",
"https://images.alphacoders.com/205/205913.jpg",
"https://images5.alphacoders.com/613/613927.jpg",
"https://images.alphacoders.com/846/84631.jpg",
"https://images2.alphacoders.com/718/71840.jpg",
"https://images3.alphacoders.com/726/72695.png",
"https://images7.alphacoders.com/599/599379.jpg",
"https://images3.alphacoders.com/282/282067.jpg",
"https://images5.alphacoders.com/290/290585.png",
"https://images4.alphacoders.com/294/294344.jpg",
"https://images6.alphacoders.com/629/629544.jpg",
"https://images7.alphacoders.com/593/593278.jpg",
"https://images5.alphacoders.com/532/532559.jpg",
"https://images3.alphacoders.com/614/614743.png",
"https://images4.alphacoders.com/126/126438.png",
"https://images4.alphacoders.com/574/57496.png",
"https://images6.alphacoders.com/415/415519.jpg",
"https://images7.alphacoders.com/408/408565.png",
"https://images3.alphacoders.com/820/82029.jpg",
"https://images.alphacoders.com/605/605799.jpg",
"https://images8.alphacoders.com/632/632051.png",
"https://images8.alphacoders.com/598/598786.jpg",
"https://images3.alphacoders.com/648/648583.jpg",
"https://images4.alphacoders.com/128/128706.png",
"https://images3.alphacoders.com/167/16729.jpg",
"https://images2.alphacoders.com/775/77572.png",
"https://images7.alphacoders.com/403/403509.jpg",
"https://images6.alphacoders.com/656/656029.png",
"https://images5.alphacoders.com/613/613925.jpg",
"hhttps://images.alphacoders.com/726/72691.png",
"https://images2.alphacoders.com/742/742320.png",
"https://images4.alphacoders.com/665/665374.jpg",
"https://images5.alphacoders.com/613/613933.jpg",
"https://images6.alphacoders.com/605/605598.jpg",
"https://images.alphacoders.com/754/754512.jpg",
"https://images8.alphacoders.com/758/758828.jpg",
"https://images8.alphacoders.com/100/1004244.jpg",
"https://images2.alphacoders.com/100/1005910.jpg",
"https://images5.alphacoders.com/100/1007601.jpg",
"https://images5.alphacoders.com/102/1023557.jpg",
"https://images6.alphacoders.com/311/311015.jpg",
"https://images5.alphacoders.com/309/309322.png",
"https://images5.alphacoders.com/680/680401.jpg",
"https://images4.alphacoders.com/215/215588.jpg",
"https://images6.alphacoders.com/326/326467.jpg",
"https://images7.alphacoders.com/736/736462.png",
"https://images.alphacoders.com/727/72713.jpg",
"https://images7.alphacoders.com/418/418724.png",
"https://images6.alphacoders.com/403/403475.jpg",
"https://images8.alphacoders.com/403/403477.jpg",
"https://images8.alphacoders.com/403/403478.jpg",
"https://images5.alphacoders.com/403/403480.jpg",
"https://images5.alphacoders.com/415/415366.jpg",
"https://images5.alphacoders.com/415/415969.jpg"
        // Add more image URLs as needed
      ];
      
      cmd({
        pattern: 'خلفيه',
      }, async(Void, citel, text) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
      
        await Void.sendMessage(citel.chat, {
          image: { url: randomImage },
          caption: "*֎╎هـا هـي خـلـفـيـتـك┇*"
        });
      });
      