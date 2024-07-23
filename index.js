const TelegramBot = require('node-telegram-bot-api');
const server=require('express')
const app=server()
app.get('/',(req,res)=>{
  res.send("boot is alive")
})
app.listen(3000,()=>{
  console.log("localhost:300 is runing")
})
//const token = '5799631195:AAHs42HTP22Q83qq5Yd98fEWpmJffnTv9Mk'; // Replace with your own bot token
const token =process.env.BOT
const bot = new TelegramBot(token, { polling: true });
const webappurl="https://fanoshomecaretreatment.com/";
const elian="https://elianaturings.000webhostapp.com/";
const jku="https://jkucomputersience.blogspot.com/";
const nnow="https://youtu.be/_FBQfRV0F2Q";
const tlm="https://tlmapp-c09eb.web.app/";
const slesh="https://ethiopiantribalexpeditions.com/";
bot.on('message',async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
const user =msg.chat.username
  if (messageText === '/start') {
   await  bot.sendMessage(chatId, 'Welcome to web maker bot ,in this boot you will get the latest information about ethsoft comapny and abount its product ',{ "reply_markup" : {
    "keyboard":[["previus work","about us"],["price","award"],["service","Suporters"],["contacts","terms"]]

  }

});
  }
  if (messageText === 'award') {
    await bot.sendMessage(chatId,"this is few of award that we have got  for our ownsome service")
    await bot.sendPhoto(chatId,"img/ward.jpg")
    await bot.sendPhoto(chatId,"img/ward1.jpg")
    
  }
  if (messageText === 'previus work') {
    await bot.sendMessage(chatId,"bellow there is list of our prevous work exploare it for more information about us",{
      reply_markup: {
        inline_keyboard: [
            [{ text: 'fanos health care', web_app: { url: webappurl } },{ text: 'personal blog', web_app: { url: jku } }],[{ text: 'eliana turing ', web_app: { url: elian } },{ text: 'Helen shoping', web_app: { url: nnow } }],[{ text: 'Teachr load minimizer for highschool teachers', web_app: { url: tlm } }],[{ text: 'Ethio Turing', web_app: { url: slesh } }],[{ text: 'This is sample of our previus work if its interesting do not hasitet to work with us',web_app: {url:"https://t.me/EtDjangoBot"  }  }]
        ]
    }
    });
    await bot.sendPhoto(chatId,"img/oln.jpg")
    await bot.sendPhoto(chatId,"img/tlm.png")
    
   }if (messageText === 'price') {
    await bot.sendMessage(chatId, 'This is the ways of how we cost our costumers for each project please select one and get cost information for each and we cost our costumer based on their requiremnt  ',{
      "reply_markup":{
        "keyboard":[["cms","telegram bot"],["shoping website","seo optimazation"],["deployment","maintanance"],["large project","personal blog"]]
      }
    })
   }
   if(messageText==='service'){
    await bot.sendMessage(chatId,'web development \n android app development,software maintanance,\n seo optimazation \n telegram bot development etc')
   }
  if(messageText==='Suporters'){
    await bot.sendMessage(chatId,'We are working with Acia Technology plc')
  }
  if(messageText=="about us"){
    await bot.sendMessage(chatId,'this is lists of our key person',{
      "reply_markup":{
        "keyboard":[["elias galcho","tariku alemu"],["hermela solomon","meskerem bishaw"],["eliana ","mekibeb hadona"],["Robel Matias","/start"]]
      }
    })
  }
  if(messageText==='/help'){
   await bot.sendMessage(chatId, 'iam ai please contact my boss for more information',{ "reply_markup" : {
      "keyboard":[["@egalcho","@egalcho1"],["@Nf_shady"],["@enat_1_tinur"]]

    }
  
  })
  } if(messageText==="elias galcho"){
    await bot.sendMessage(chatId,'The Roles of Elias Glacho In This organization is the coding ,testing deploying and api integrations he is one of founders of this organizations')
   await bot.sendPhoto(chatId,'img/elias.jpg')
   await bot.sendPhoto(chatId,'img/eg.jpg')
  }
  
  if(messageText==="tariku alemu"){
    await bot.sendMessage(chatId,'The Roles of Tariku Alemu In This organization is the Requirement analiyst ,testing, and project manager he is one of founders of this organizations')
    await bot.sendPhoto(chatId,'img/tariku.jpg')
   //await bot.sendPhoto(chatId,'img/eg.jpg')
  }
  
  if(messageText==="hermela solomon"){
    await bot.sendMessage(chatId,'The Roles of hermela solomon In This organization is the cyber security enginerer ,and cyber analiyst,  she is one of founders of this organizations')
   await bot.sendPhoto(chatId,'img/hermela.jpg')
  }
  if(messageText==="meskerem bishaw"){
    await bot.sendMessage(chatId,'The Roles of meskerem bishaw In This organization is the finance manager,  she is one of founders of this organizations')
   await bot.sendPhoto(chatId,'img/mesk.jpg')
   await bot.sendPhoto(chatId,'img/mesk.png')
  }
  if(messageText==="eliana"){
    await bot.sendMessage(chatId,'The Roles of eliana In This organization is the Comunication manager,and vise president of campany  he is one of founders of this organizations')
   await bot.sendPhoto(chatId,'img/eliana.jpg')
  }
  if(messageText==="mekibeb hadona"){
    await bot.sendMessage(chatId,'The Roles of mekibeb hadona In This organization is the external afairs manager  he is one of founders of this organizations')
   await bot.sendPhoto(chatId,'img/meka.jpg')
  }
  if(messageText==="Robel Matias"){
    await bot.sendMessage(chatId,'The Roles of Robel Matias In This organization is the graphic designer and ui designer of this organization  he is one of founders of this organizations')
   await bot.sendPhoto(chatId,'img/robel.jpg')
  }
  /*if(messageText==="/help"){
   await bot.sendMessage(chatId,"loading web",{
      reply_markup: {
        inline_keyboard: [
            [{ text: 'Open web app', web_app: { url: webappurl } }]
        ]
    }
    })
  }*/
 /*else{
  await bot.sendMessage(chatId,messageText+" iam sorry i do not understand what you want to say dear "+user+" please contact my owner @egalcho for more information")
 }*/
});
