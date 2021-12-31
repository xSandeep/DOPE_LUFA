const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/Y2mXdR5/ajuser.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `ＡＪＵＳＥＲ ＢＯＴ

*Our Group Link* : _https://chat.whatsapp.com/GbKrqN1WpsX9Ujt8WEpehq_

*owner id instagram* :https://instagram.com/mr.sandeep_203?utm_medium=copy_link.

*github* : _https://github.com/xSandeep_.

■□■□■□■□■□■□■□■□■□■□
       _DOPE_LUFA👽_
  ▣▣ created by Lufa ▣▣

`}) 

}));
