const _0x151c31=_0x2ecd;(function(_0x283d4d,_0x3488c3){const _0x62bc8b=_0x2ecd,_0x105909=_0x283d4d();while(!![]){try{const _0x1fbbd3=parseInt(_0x62bc8b(0x234))/0x1*(parseInt(_0x62bc8b(0x235))/0x2)+parseInt(_0x62bc8b(0x208))/0x3+-parseInt(_0x62bc8b(0x1f5))/0x4+parseInt(_0x62bc8b(0x1cf))/0x5*(parseInt(_0x62bc8b(0x207))/0x6)+parseInt(_0x62bc8b(0x1b9))/0x7+-parseInt(_0x62bc8b(0x20d))/0x8*(-parseInt(_0x62bc8b(0x221))/0x9)+-parseInt(_0x62bc8b(0x1e4))/0xa;if(_0x1fbbd3===_0x3488c3)break;else _0x105909['push'](_0x105909['shift']());}catch(_0x436563){_0x105909['push'](_0x105909['shift']());}}}(_0x2b0a,0xcd53e));const config=require(_0x151c31(0x1f4)),axios=require(_0x151c31(0x1c2)),cheerio=require('cheerio'),fetch=require(_0x151c31(0x214)),{search,ytmp3,ytmp4,ytdlv2,channel}=require(_0x151c31(0x21a)),fs=require('fs'),{getBuffer,getGroupAdmins,getRandom,getsize,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x151c31(0x22c)),{cmd,commands}=require('../command');var sizetoo=_0x151c31(0x201);const yts=require(_0x151c31(0x1ff));let wm=config[_0x151c31(0x1de)],newsize=config['MAX_SIZE']*0x400*0x400;function ytreg(_0x3ac92b){const _0x16b7b5=_0x151c31,_0x11b6f3=/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;return _0x11b6f3[_0x16b7b5(0x239)](_0x3ac92b);}function _0x2ecd(_0x471ba7,_0x58bc91){const _0x2b0afb=_0x2b0a();return _0x2ecd=function(_0x2ecdf6,_0x14fc73){_0x2ecdf6=_0x2ecdf6-0x1b8;let _0x246e1c=_0x2b0afb[_0x2ecdf6];return _0x246e1c;},_0x2ecd(_0x471ba7,_0x58bc91);}cmd({'pattern':'yts','alias':[_0x151c31(0x1c0)],'use':_0x151c31(0x210),'react':'🔎','desc':_0x151c31(0x211),'category':_0x151c31(0x1f2),'filename':__filename},async(_0x3693ec,_0x5075b4,_0x18a6fb,{from:_0xfb78bf,l:_0x13ab67,quoted:_0x2d2c0e,body:_0x650b4c,isCmd:_0x52aa1c,command:_0x1b24ca,args:_0x1c5f40,q:_0x233913,isGroup:_0x3de412,sender:_0x4a93a0,senderNumber:_0x1ceff4,botNumber2:_0x5d9f2e,botNumber:_0x319f52,pushname:_0xfc6e33,isMe:_0x346aab,isOwner:_0x2b2e78,groupMetadata:_0x1bbe65,groupName:_0x454164,participants:_0x5b11c0,groupAdmins:_0x56abec,isBotAdmins:_0x5434d2,isAdmins:_0x537d08,reply:_0x13efed})=>{const _0x423373=_0x151c31;try{if(!_0x233913)return await _0x13efed(imgmsg);if(isUrl(_0x233913)&&!ytreg(_0x233913))return await _0x13efed(imgmsg);try{let _0x34b054=require(_0x423373(0x1ff));var _0x40f0f0=await _0x34b054(_0x233913);}catch(_0x420987){return _0x13ab67(_0x420987),await _0x3693ec[_0x423373(0x225)](_0xfb78bf,{'text':_0x423373(0x1d1)},{'quoted':_0x5075b4});}var _0x92587d='';_0x40f0f0[_0x423373(0x237)]['map'](_0x83fd2=>{const _0x1f9dd8=_0x423373;_0x92587d+=_0x1f9dd8(0x1cc)+_0x83fd2[_0x1f9dd8(0x1fd)]+_0x1f9dd8(0x1ca)+_0x83fd2[_0x1f9dd8(0x202)]+'\x0a\x0a';}),await _0x3693ec[_0x423373(0x225)](_0xfb78bf,{'text':_0x92587d},{'quoted':_0x5075b4});}catch(_0x477ec3){_0x13ab67(_0x477ec3),_0x13efed('*Error\x20!!*');}}),cmd({'pattern':_0x151c31(0x1d9),'alias':[_0x151c31(0x22f)],'use':_0x151c31(0x204),'react':'🎶','desc':_0x151c31(0x230),'category':_0x151c31(0x1bd),'filename':__filename},async(_0x1681d9,_0x3baab7,_0x590fea,{from:_0x16be84,prefix:_0x1cfa78,l:_0xc70a55,quoted:_0x9eb5dc,body:_0x15a2ee,isCmd:_0xdff822,command:_0x4be3c4,args:_0x12164b,q:_0x385e98,isGroup:_0x2cce45,sender:_0x4ab536,senderNumber:_0x1437d6,botNumber2:_0x272a39,botNumber:_0x216f5f,pushname:_0x5808da,isMe:_0x58e864,isOwner:_0x155dcd,groupMetadata:_0x115408,groupName:_0x2e7f1d,participants:_0x1f54fe,groupAdmins:_0x193f9e,isBotAdmins:_0x19547f,isAdmins:_0x54f29b,reply:_0x3d0daa})=>{const _0xe9926d=_0x151c31;try{if(!_0x385e98)return await _0x3d0daa(_0xe9926d(0x218));const _0x2b9fd4=_0x385e98[_0xe9926d(0x1ba)](/\?si=[^&]*/,'');var _0x13b5df=await yts(_0x2b9fd4);let _0x46eb8f=config[_0xe9926d(0x1de)];var _0x548a52=_0x13b5df[_0xe9926d(0x1cd)][0x0];let _0x3f6d4e=_0xe9926d(0x1da)+_0x548a52[_0xe9926d(0x1fd)]+'\x0a*│❑\x20👀\x20ᴠɪᴇᴡꜱ:*\x20'+_0x548a52[_0xe9926d(0x1fc)]+_0xe9926d(0x205)+_0x548a52['ago']+_0xe9926d(0x1f6)+_0x548a52['duration']+'\x0a*│▪\x20🔗\x20ᴜʀʟ:*\x20'+_0x548a52['url'];const _0x96995e=[{'buttonId':_0x1cfa78+_0xe9926d(0x228)+_0x548a52[_0xe9926d(0x202)],'buttonText':{'displayText':_0xe9926d(0x212)},'type':0x1},{'buttonId':_0x1cfa78+_0xe9926d(0x21c)+_0x548a52['url']+'±'+_0x548a52[_0xe9926d(0x1fd)],'buttonText':{'displayText':_0xe9926d(0x22b)},'type':0x1}],_0x27f279={'image':{'url':_0x548a52[_0xe9926d(0x1f0)]},'caption':_0x3f6d4e,'footer':_0x46eb8f,'buttons':_0x96995e,'headerType':0x4};await _0x1681d9[_0xe9926d(0x1f7)](_0x16be84,_0x27f279,_0x3baab7);}catch(_0x5cdd15){_0x3d0daa(N_FOUND),console[_0xe9926d(0x1c6)](_0x5cdd15);}});function _0x2b0a(){const _0x3ea622=['message','push','download','ago','❌\x20Error:\x20Unable\x20to\x20fetch\x20audio!','ytsearch','\x0a\x0a*│❉\x20⏱️\x20ᴅᴜʀᴀᴛɪᴏɴ:*\x20','axios','xnxxdl\x20','video','https://www.xnxx.com','log','p.metadata','480pv\x20','duration','*\x0a🔗\x20','find','\x20*🖲️','videos','*Please\x20give\x20me\x20a\x20youtube\x20url!*','135tOlJnm','🚩\x20*Please\x20give\x20me\x20words\x20to\x20search*','*Error\x20!!*','html5player.setThumbSlide\x5c(\x27(.*?)\x27\x5c);','meta[property=\x22og:duration\x22]','html5player.setThumbSlideBig\x5c(\x27(.*?)\x27\x5c);','buffer','video/mp4','xnxxdown','catch','song','*╭─「ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ」*\x0a*│╭───────────────╮*\x0a*│♘𝚂𝙾𝙽𝙶\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁🎵\x20▎*\x0a*├────────────────╯*\x0a*│❑\x20📄\x20ᴛɪᴛɪʟᴇ:*\x20','html','\x0a\x0a*│❉\x20👀\x20ᴠɪᴇᴡꜱ:*\x20','720P\x20VIDEO','FOOTER','xnxx','.mp3','content','high','get','28503070etvxns','key','files','html5player.setVideoUrlLow\x5c(\x27(.*?)\x27\x5c);','480P\x20VIDEO','div.mozaique','meta[property=\x22og:image\x22]','html5player.setVideoUrlHigh\x5c(\x27(.*?)\x27\x5c);','1080','🫣\x20*X\x20N\x20X\x20X\x20-\x20S\x20E\x20A\x20R\x20C\x20H*\x20🥶','meta[property=\x22og:video:type\x22]','text','thumbnail','xnxxdl','search','128','../config','1744296sICGWq','\x0a*│❑\x20⏱️\x20ᴅᴜʀᴀᴛɪᴏɴ:*\x20','buttonMessage','😎\x0a','https://1000logos.net/wp-content/uploads/2021/04/XNXX-logo.png','360','html5player.setThumbUrl169\x5c(\x27(.*?)\x27\x5c);','views','title','360P\x20VIDEO','ytsearch-venom','span.metadata','_This\x20file\x20size\x20is\x20too\x20big_','url','720pv\x20','.song\x20yimmy','\x0a*│❑\x20⏰\x20ᴀɢᴏ:*\x20','Download\x20videos','64452mfvLvh','5022990wARNsA','random','attr','1080pv\x20','❌\x20Error:\x20','2056pUcLZv','meta[property=\x22og:video:width\x22]','360pv\x20','.yts\x20lelena','Search\x20songs','ᴀᴜᴅɪᴏ\x20ꜱᴏɴɢ\x20🎶','/hqdefault.jpg','node-fetch','load','error','image','*Please\x20enter\x20a\x20query\x20or\x20a\x20url!*','data','@vreden/youtube_scraper','.xnxx\x20<query>','ytad\x20','480pv','.mp4','360pv','result','3195nDNeCQ','\x0a\x0a*│❉\x20⏰\x20ᴀɢᴏ:*\x20','each','/THUMBNUM/','sendMessage','floor','.video\x20yimmy','ytaa\x20','#video-player-bg\x20>\x20script:nth-child(6)','ytad','ᴅᴏᴄᴜᴍᴇɴᴛ\x20ꜱᴏɴɢ\x20📁','../lib/functions','then','href','ytsong','Download\x20songs','map','split','link','113YOWKGe','7070zzQlKa','xnxxs','all','ytaa','test','Search\x20and\x20DOWNLOAD\x20VIDEOS\x20from\x20xnxx.','match','11706443tpyCBj','replace'];_0x2b0a=function(){return _0x3ea622;};return _0x2b0a();}function tolow(_0x5a771a){const _0x2ad1c8=_0x151c31,_0x52c6fe=/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,_0x2f4a6c=_0x5a771a['match'](_0x52c6fe);if(_0x2f4a6c&&_0x2f4a6c[0x1]){const _0x9188e7=_0x2f4a6c[0x1],_0x4addac='https://i.ytimg.com/vi/'+_0x9188e7+_0x2ad1c8(0x213);return _0x4addac;}else console[_0x2ad1c8(0x1c6)]('Invalid\x20YouTube\x20URL');}cmd({'pattern':_0x151c31(0x238),'react':'⬇️','dontAddCommandList':!![],'filename':__filename},async(_0x453bcc,_0x4c8cc0,_0x533e85,{from:_0x465b0c,q:_0xb10645,reply:_0x2b0816})=>{const _0x1e6149=_0x151c31;try{if(!_0xb10645)return _0x2b0816(_0x1e6149(0x1ce));const _0x5982c2=await ytmp3(_0xb10645,_0x1e6149(0x1f3));if(!_0x5982c2[_0x1e6149(0x1bd)][_0x1e6149(0x202)])return _0x2b0816(_0x1e6149(0x1bf));await _0x453bcc[_0x1e6149(0x225)](_0x465b0c,{'react':{'text':'⬆️','key':_0x4c8cc0[_0x1e6149(0x1e5)]}}),await _0x453bcc[_0x1e6149(0x225)](_0x465b0c,{'react':{'text':'✔️','key':_0x4c8cc0[_0x1e6149(0x1e5)]}}),await _0x453bcc['sendMessage'](_0x465b0c,{'audio':{'url':_0x5982c2[_0x1e6149(0x1bd)][_0x1e6149(0x202)]},'mimetype':'audio/mpeg'},{'quoted':_0x4c8cc0});}catch(_0x460bef){console[_0x1e6149(0x216)](_0x460bef),_0x2b0816(_0x1e6149(0x20c)+_0x460bef['message']);}}),cmd({'pattern':_0x151c31(0x22a),'react':'⬇️','dontAddCommandList':!![],'filename':__filename},async(_0x3f13a0,_0x5b79d1,_0x8277d5,{from:_0xa5ed2c,q:_0x43374c,reply:_0x4815b8})=>{const _0x54dc16=_0x151c31;try{if(!_0x43374c)return await _0x4815b8(_0x54dc16(0x1ce));const _0x202145=_0x43374c[_0x54dc16(0x232)]('±')[0x0],_0xc7784=_0x43374c[_0x54dc16(0x232)]('±')[0x1];let _0x57d670=await tolow(_0x202145);await _0x3f13a0[_0x54dc16(0x225)](_0xa5ed2c,{'react':{'text':'⬆️','key':_0x5b79d1[_0x54dc16(0x1e5)]}});const _0x4d5f20=await ytmp3(_0x202145,_0x54dc16(0x1f3));if(!_0x4d5f20[_0x54dc16(0x1bd)][_0x54dc16(0x202)])return _0x4815b8(_0x54dc16(0x1bf));const _0x2b3c2b={'document':{'url':_0x4d5f20[_0x54dc16(0x219)]['download']},'mimetype':'audio/mpeg','caption':config[_0x54dc16(0x1de)],'jpegThumbnail':await(await fetch(_0x57d670))[_0x54dc16(0x1d5)](),'fileName':_0xc7784+_0x54dc16(0x1e0)};await _0x3f13a0[_0x54dc16(0x225)](_0xa5ed2c,_0x2b3c2b,{'quoted':_0x5b79d1}),await _0x3f13a0[_0x54dc16(0x225)](_0xa5ed2c,{'react':{'text':'✔️','key':_0x5b79d1[_0x54dc16(0x1e5)]}});}catch(_0x18d380){console[_0x54dc16(0x1c6)](_0x18d380);}}),cmd({'pattern':_0x151c31(0x1c4),'alias':['ytvideo'],'use':_0x151c31(0x227),'react':'📽️','desc':_0x151c31(0x206),'category':_0x151c31(0x1bd),'filename':__filename},async(_0xc2ee6d,_0x8ea11b,_0x30abff,{from:_0x48a110,prefix:_0x3a66f0,l:_0x149b58,quoted:_0x551e33,body:_0x1e9f88,isCmd:_0x456f25,command:_0x464002,args:_0x17872d,q:_0x612d70,isGroup:_0x1bc387,sender:_0x18df01,senderNumber:_0x216b0b,botNumber2:_0x2aaaf9,botNumber:_0x57e3f4,pushname:_0x16c702,isMe:_0x4af3a3,isOwner:_0xee38a4,groupMetadata:_0x3b78da,groupName:_0x7b9cb,participants:_0xbdf3cc,groupAdmins:_0x506edc,isBotAdmins:_0x181cca,isAdmins:_0x2d86ad,reply:_0x313bc1})=>{const _0x21a703=_0x151c31;try{if(!_0x612d70)return await _0x313bc1(_0x21a703(0x218));const _0xb3db6b=_0x612d70['replace'](/\?si=[^&]*/,'');var _0x517cce=await yts(_0xb3db6b);let _0x1e3d8c=config[_0x21a703(0x1de)];var _0xe7ef54=_0x517cce[_0x21a703(0x1cd)][0x0];let _0x30723a='*╭─「ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ」*\x0a*│╭───────────────╮*\x0a*│\x20𝚅𝙸𝙳𝙴𝙾\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁🎥\x20▎*\x0a*├────────────────╯*\x0a*│❉\x20📄\x20ᴛɪᴛɪʟᴇ:*\x20'+_0xe7ef54['title']+_0x21a703(0x1dc)+_0xe7ef54[_0x21a703(0x1fc)]+_0x21a703(0x222)+_0xe7ef54[_0x21a703(0x1be)]+_0x21a703(0x1c1)+_0xe7ef54[_0x21a703(0x1c9)]+'\x0a\x0a*│❉\x20🔗\x20ᴜʀʟ:*\x20'+_0xe7ef54[_0x21a703(0x202)];const _0x3455e2=[{'buttonId':_0x3a66f0+_0x21a703(0x20f)+_0xe7ef54[_0x21a703(0x202)],'buttonText':{'displayText':_0x21a703(0x1fe)},'type':0x1},{'buttonId':_0x3a66f0+_0x21a703(0x1c8)+_0xe7ef54['url'],'buttonText':{'displayText':_0x21a703(0x1e8)},'type':0x1},{'buttonId':_0x3a66f0+_0x21a703(0x203)+_0xe7ef54[_0x21a703(0x202)],'buttonText':{'displayText':_0x21a703(0x1dd)},'type':0x1},{'buttonId':_0x3a66f0+_0x21a703(0x20b)+_0xe7ef54[_0x21a703(0x202)],'buttonText':{'displayText':'1080P\x20VIDEO'},'type':0x1}],_0x11651c={'image':{'url':_0xe7ef54[_0x21a703(0x1f0)]},'caption':_0x30723a,'footer':_0x1e3d8c,'buttons':_0x3455e2,'headerType':0x4};await _0xc2ee6d['buttonMessage'](_0x48a110,_0x11651c,_0x8ea11b);}catch(_0x3d582c){_0x313bc1(N_FOUND),console[_0x21a703(0x1c6)](_0x3d582c);}}),cmd({'pattern':_0x151c31(0x21f),'react':'⬇️','dontAddCommandList':!![],'filename':__filename},async(_0x4eb008,_0x4f4303,_0xbb960a,{from:_0x109732,q:_0x55d492,reply:_0x1096fd})=>{const _0x3cf8a3=_0x151c31;try{if(!_0x55d492)return _0x1096fd('*Please\x20give\x20me\x20a\x20youtube\x20url!*');const _0x54b1e3=await ytmp4(_0x55d492,_0x3cf8a3(0x1fa));if(!_0x54b1e3[_0x3cf8a3(0x1bd)][_0x3cf8a3(0x202)])return _0x1096fd(_0x3cf8a3(0x1bf));await _0x4eb008[_0x3cf8a3(0x225)](_0x109732,{'react':{'text':'⬆️','key':_0x4f4303[_0x3cf8a3(0x1e5)]}}),await _0x4eb008['sendMessage'](_0x109732,{'react':{'text':'✔️','key':_0x4f4303[_0x3cf8a3(0x1e5)]}}),await _0x4eb008[_0x3cf8a3(0x225)](_0x109732,{'audio':{'url':_0x54b1e3[_0x3cf8a3(0x1bd)][_0x3cf8a3(0x202)]},'mimetype':_0x3cf8a3(0x1d6)},{'quoted':_0x4f4303});}catch(_0x150c13){console[_0x3cf8a3(0x216)](_0x150c13),_0x1096fd(_0x3cf8a3(0x20c)+_0x150c13['message']);}}),cmd({'pattern':_0x151c31(0x21d),'react':'⬇️','dontAddCommandList':!![],'filename':__filename},async(_0x4a3689,_0x458539,_0x252914,{from:_0x20506f,q:_0x202320,reply:_0x2d1a8b})=>{const _0x174016=_0x151c31;try{if(!_0x202320)return _0x2d1a8b(_0x174016(0x1ce));const _0x25012f=await ytmp4(_0x202320,'480');if(!_0x25012f[_0x174016(0x1bd)]['url'])return _0x2d1a8b(_0x174016(0x1bf));await _0x4a3689[_0x174016(0x225)](_0x20506f,{'react':{'text':'⬆️','key':_0x458539[_0x174016(0x1e5)]}}),await _0x4a3689[_0x174016(0x225)](_0x20506f,{'react':{'text':'✔️','key':_0x458539[_0x174016(0x1e5)]}}),await _0x4a3689[_0x174016(0x225)](_0x20506f,{'audio':{'url':_0x25012f[_0x174016(0x1bd)][_0x174016(0x202)]},'mimetype':_0x174016(0x1d6)},{'quoted':_0x458539});}catch(_0x130cc7){console[_0x174016(0x216)](_0x130cc7),_0x2d1a8b(_0x174016(0x20c)+_0x130cc7[_0x174016(0x1bb)]);}}),cmd({'pattern':'720pv','react':'⬇️','dontAddCommandList':!![],'filename':__filename},async(_0x5881ab,_0x474de1,_0x58a4e7,{from:_0x4bf1e0,q:_0x410e53,reply:_0x43c58c})=>{const _0x50e52c=_0x151c31;try{if(!_0x410e53)return _0x43c58c('*Please\x20give\x20me\x20a\x20youtube\x20url!*');const _0x43ff83=await ytmp4(_0x410e53,'720');if(!_0x43ff83[_0x50e52c(0x1bd)][_0x50e52c(0x202)])return _0x43c58c('❌\x20Error:\x20Unable\x20to\x20fetch\x20audio!');await _0x5881ab['sendMessage'](_0x4bf1e0,{'react':{'text':'⬆️','key':_0x474de1[_0x50e52c(0x1e5)]}}),await _0x5881ab[_0x50e52c(0x225)](_0x4bf1e0,{'react':{'text':'✔️','key':_0x474de1[_0x50e52c(0x1e5)]}}),await _0x5881ab[_0x50e52c(0x225)](_0x4bf1e0,{'audio':{'url':_0x43ff83['download'][_0x50e52c(0x202)]},'mimetype':'video/mp4'},{'quoted':_0x474de1});}catch(_0x1f4adf){console[_0x50e52c(0x216)](_0x1f4adf),_0x43c58c(_0x50e52c(0x20c)+_0x1f4adf[_0x50e52c(0x1bb)]);}}),cmd({'pattern':'1080pv','react':'⬇️','dontAddCommandList':!![],'filename':__filename},async(_0x2802c6,_0x15e111,_0x65097a,{from:_0x4284ad,q:_0x594309,reply:_0x1f2f15})=>{const _0x52c6cf=_0x151c31;try{if(!_0x594309)return _0x1f2f15(_0x52c6cf(0x1ce));const _0x3e4c9d=await ytmp4(_0x594309,_0x52c6cf(0x1ec));if(!_0x3e4c9d['download']['url'])return _0x1f2f15(_0x52c6cf(0x1bf));await _0x2802c6[_0x52c6cf(0x225)](_0x4284ad,{'react':{'text':'⬆️','key':_0x15e111[_0x52c6cf(0x1e5)]}}),await _0x2802c6[_0x52c6cf(0x225)](_0x4284ad,{'react':{'text':'✔️','key':_0x15e111['key']}}),await _0x2802c6['sendMessage'](_0x4284ad,{'audio':{'url':_0x3e4c9d[_0x52c6cf(0x1bd)]['url']},'mimetype':_0x52c6cf(0x1d6)},{'quoted':_0x15e111});}catch(_0x234439){console[_0x52c6cf(0x216)](_0x234439),_0x1f2f15('❌\x20Error:\x20'+_0x234439[_0x52c6cf(0x1bb)]);}});async function xnxxs(_0x4dd1ec){return new Promise((_0x26eaec,_0x4310ac)=>{const _0x899a0d=_0x2ecd,_0x2f2cb6=_0x899a0d(0x1c5);fetch(_0x2f2cb6+'/search/'+_0x4dd1ec+'/'+(Math[_0x899a0d(0x226)](Math[_0x899a0d(0x209)]()*0x3)+0x1),{'method':_0x899a0d(0x1e3)})[_0x899a0d(0x22d)](_0x48c468=>_0x48c468[_0x899a0d(0x1ef)]())[_0x899a0d(0x22d)](_0x412780=>{const _0x2a654d=_0x899a0d,_0x35cafb=cheerio[_0x2a654d(0x215)](_0x412780,{'xmlMode':![]}),_0x322f6a=[],_0x2a7a06=[],_0x49af38=[],_0x2169eb=[];_0x35cafb(_0x2a654d(0x1e9))['each'](function(_0x334cc2,_0xf0179f){const _0x4e5149=_0x2a654d;_0x35cafb(_0xf0179f)[_0x4e5149(0x1cb)]('div.thumb')[_0x4e5149(0x223)](function(_0x1d1148,_0x196f36){const _0x403007=_0x4e5149;_0x2a7a06['push'](_0x2f2cb6+_0x35cafb(_0x196f36)[_0x403007(0x1cb)]('a')[_0x403007(0x20a)](_0x403007(0x22e))[_0x403007(0x1ba)](_0x403007(0x224),'/'));});}),_0x35cafb(_0x2a654d(0x1e9))[_0x2a654d(0x223)](function(_0x5957be,_0x37d7b7){const _0xcb6582=_0x2a654d;_0x35cafb(_0x37d7b7)['find']('div.thumb-under')[_0xcb6582(0x223)](function(_0xf439e5,_0x4bb667){const _0x562906=_0xcb6582;_0x49af38[_0x562906(0x1bc)](_0x35cafb(_0x4bb667)[_0x562906(0x1cb)](_0x562906(0x1c7))[_0x562906(0x1ef)]()),_0x35cafb(_0x4bb667)['find']('a')[_0x562906(0x223)](function(_0x479814,_0x4ad275){const _0x15c6e3=_0x562906;_0x322f6a[_0x15c6e3(0x1bc)](_0x35cafb(_0x4ad275)[_0x15c6e3(0x20a)](_0x15c6e3(0x1fd)));});});});for(let _0x5b1ef2=0x0;_0x5b1ef2<_0x322f6a['length'];_0x5b1ef2++){_0x2169eb[_0x2a654d(0x1bc)]({'title':_0x322f6a[_0x5b1ef2],'info':_0x49af38[_0x5b1ef2],'link':_0x2a7a06[_0x5b1ef2]});}_0x26eaec({'status':!![],'result':_0x2169eb});})[_0x899a0d(0x1d8)](_0x205153=>_0x4310ac({'status':![],'result':_0x205153}));});}cmd({'pattern':_0x151c31(0x1df),'alias':[_0x151c31(0x236)],'react':'🤫','use':_0x151c31(0x21b),'desc':_0x151c31(0x23a),'category':_0x151c31(0x1bd),'filename':__filename},async(_0x339c4d,_0x54f2a4,_0x49e6b2,{from:_0x1cc255,prefix:_0x5443f3,l:_0x36ec02,quoted:_0x443774,body:_0x2162d4,isCmd:_0x90d70f,command:_0x1642a0,args:_0x15f4fd,q:_0x559696,isGroup:_0x36f327,sender:_0x34298d,senderNumber:_0x31fffa,botNumber2:_0x451875,botNumber:_0x3e992e,pushname:_0x87a425,isMe:_0x4017b1,isOwner:_0x340cb4,isPreUser:_0x1813c0,groupMetadata:_0x3644a1,groupName:_0x359ae9,participants:_0x4a083b,groupAdmins:_0x5ac5a9,isBotAdmins:_0x132ccd,isAdmins:_0x5a89a6,reply:_0x2cb22e})=>{const _0x43d121=_0x151c31;try{if(!_0x559696)return _0x2cb22e(_0x43d121(0x1d0));let _0x1c54d1=await xnxxs(_0x559696),_0x2198ee=_0x1c54d1[_0x43d121(0x220)];if(_0x2198ee['length']<0x1)return await _0x339c4d[_0x43d121(0x225)](_0x1cc255,{'text':N_FOUND},{'quoted':_0x54f2a4});var _0xf57e62=[];_0x1c54d1[_0x43d121(0x220)][_0x43d121(0x231)](_0x20cc0f=>{const _0x15627e=_0x43d121;_0xf57e62[_0x15627e(0x1bc)]({'buttonId':_0x5443f3+(_0x15627e(0x1c3)+_0x20cc0f[_0x15627e(0x233)]),'buttonText':{'displayText':''+_0x20cc0f[_0x15627e(0x1fd)]},'type':0x1});});const _0x1afaa5={'image':{'url':_0x43d121(0x1f9)},'caption':_0x43d121(0x1ed),'footer':config[_0x43d121(0x1de)],'buttons':_0xf57e62,'headerType':0x4};return await _0x339c4d[_0x43d121(0x1f7)](_0x1cc255,_0x1afaa5,_0x54f2a4);}catch(_0x35e348){_0x2cb22e(_0x43d121(0x1d1)),console[_0x43d121(0x1c6)](_0x35e348);}});async function xdl(_0x1affb1){return new Promise((_0x4e9e51,_0x35c7c3)=>{const _0x6d87c9=_0x2ecd;fetch(''+_0x1affb1,{'method':_0x6d87c9(0x1e3)})[_0x6d87c9(0x22d)](_0x386051=>_0x386051[_0x6d87c9(0x1ef)]())[_0x6d87c9(0x22d)](_0x29a651=>{const _0x277476=_0x6d87c9,_0x5a53ad=cheerio[_0x277476(0x215)](_0x29a651,{'xmlMode':![]}),_0x1fc97e=_0x5a53ad('meta[property=\x22og:title\x22]')[_0x277476(0x20a)](_0x277476(0x1e1)),_0x33abfa=_0x5a53ad(_0x277476(0x1d3))['attr']('content'),_0xaf3c58=_0x5a53ad(_0x277476(0x1ea))['attr'](_0x277476(0x1e1)),_0x353f10=_0x5a53ad(_0x277476(0x1ee))['attr'](_0x277476(0x1e1)),_0x357fd8=_0x5a53ad(_0x277476(0x20e))['attr']('content'),_0x29701c=_0x5a53ad('meta[property=\x22og:video:height\x22]')[_0x277476(0x20a)](_0x277476(0x1e1)),_0x547b73=_0x5a53ad(_0x277476(0x200))[_0x277476(0x1ef)](),_0x844b43=_0x5a53ad(_0x277476(0x229))[_0x277476(0x1db)](),_0x453a6b={'low':(_0x844b43[_0x277476(0x1b8)](_0x277476(0x1e7))||[])[0x1],'high':_0x844b43[_0x277476(0x1b8)](_0x277476(0x1eb)||[])[0x1],'HLS':_0x844b43['match']('html5player.setVideoHLS\x5c(\x27(.*?)\x27\x5c);'||[])[0x1],'thumb':_0x844b43['match']('html5player.setThumbUrl\x5c(\x27(.*?)\x27\x5c);'||[])[0x1],'thumb69':_0x844b43['match'](_0x277476(0x1fb)||[])[0x1],'thumbSlide':_0x844b43[_0x277476(0x1b8)](_0x277476(0x1d2)||[])[0x1],'thumbSlideBig':_0x844b43[_0x277476(0x1b8)](_0x277476(0x1d4)||[])[0x1]};_0x4e9e51({'status':!![],'result':{'title':_0x1fc97e,'URL':_0x1affb1,'duration':_0x33abfa,'image':_0xaf3c58,'videoType':_0x353f10,'videoWidth':_0x357fd8,'videoHeight':_0x29701c,'info':_0x547b73,'files':_0x453a6b}});})[_0x6d87c9(0x1d8)](_0x19a737=>_0x35c7c3({'status':![],'result':_0x19a737}));});}cmd({'pattern':_0x151c31(0x1d7),'react':'⬇️','alias':['dlxnxx',_0x151c31(0x1f1)],'dontAddCommandList':!![],'filename':__filename},async(_0x1d9d2f,_0x144b5c,_0x5a26a6,{from:_0x3ad0c2,l:_0x2df627,quoted:_0x2772f8,body:_0x25b37f,isCmd:_0x385164,command:_0x29d849,args:_0x25ff86,q:_0x28028b,isGroup:_0x264beb,sender:_0x51714e,senderNumber:_0x4e10ba,botNumber2:_0x496871,botNumber:_0x4dad4d,pushname:_0x12c662,isMe:_0x55d060,isOwner:_0x19355b,isPreUser:_0x4f93ea,groupMetadata:_0x2e2818,groupName:_0x10bdd3,participants:_0x5ca4bb,groupAdmins:_0xfc7dd0,isBotAdmins:_0x3657e6,isAdmins:_0x42e3cf,reply:_0x1e972e})=>{const _0x258c6e=_0x151c31;try{if(!_0x28028b)return _0x1e972e('*Please\x20give\x20me\x20xnxx\x20url\x20!!*');let _0x2cc194=await xdl(_0x28028b),_0x548de4=_0x258c6e(0x1f8);_0x548de4+=''+config[_0x258c6e(0x1de)];let _0xd61af0=_0x2cc194[_0x258c6e(0x220)][_0x258c6e(0x1fd)],_0xa3fff7=_0x2cc194[_0x258c6e(0x220)][_0x258c6e(0x217)];await _0x1d9d2f[_0x258c6e(0x225)](_0x3ad0c2,{'document':{'url':_0x2cc194[_0x258c6e(0x220)][_0x258c6e(0x1e6)][_0x258c6e(0x1e2)]},'jpegThumbnail':await(await fetch(_0xa3fff7))[_0x258c6e(0x1d5)](),'mimetype':_0x258c6e(0x1d6),'fileName':_0xd61af0+_0x258c6e(0x21e),'caption':_0x548de4},{'quoted':_0x144b5c}),await _0x1d9d2f['sendMessage'](_0x3ad0c2,{'react':{'text':'✔️','key':_0x144b5c['key']}});}catch(_0x2e967b){_0x1e972e('*Error\x20!!*'),console[_0x258c6e(0x1c6)](_0x2e967b);}});
