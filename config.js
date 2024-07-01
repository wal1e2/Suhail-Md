const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347010762685";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_04_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgMTYzLFxuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBBdmM3YTdvQVZIT0FPcktnZzdVbFpKeWc1cWFYY2Z4Zkg4TjRLWXJVK3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxMDc2MjY4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzlENzQ4MTcwNzQ0MEQzMDhFM0Q3QkQyQjA4RDk0MDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODM1NDY0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxMDc2MjY4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTczNTQ0MjhDQjk1ODczOTMxRkQ5REU2RTRENkMwOTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODM1NDY0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxMDc2MjY4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUQzRDQ1Qjg5QTlBOEVFNzQ1RDMyMDM5MDNENEFBNDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODM1NDY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxMDc2MjY4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjFGRDU2MDE4OTY3MjU2ODUxMkMwMjQ0Rjc2MEY2NDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODM1NDY3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldQY0J5U2pCUkNpLS0wOWVId1c1UXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjY2ZGNiNmQtNmRiNS00ZTBhLTg0NmEtYzFkMWRiMzNhNDQ4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDE5NixcbiAgICAgIDE0LFxuICAgICAgMjAyLFxuICAgICAgMTE1LFxuICAgICAgMTMwLFxuICAgICAgNTEsXG4gICAgICAyMSxcbiAgICAgIDI1MixcbiAgICAgIDkxLFxuICAgICAgMTEyLFxuICAgICAgMjM5LFxuICAgICAgMzEsXG4gICAgICAxNTIsXG4gICAgICAxNTEsXG4gICAgICAxNjgsXG4gICAgICAyMDAsXG4gICAgICAxMjEsXG4gICAgICAxMDUsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMjE4LFxuICAgICAgMzYsXG4gICAgICA5LFxuICAgICAgOTgsXG4gICAgICAxMzYsXG4gICAgICA1NyxcbiAgICAgIDE5NyxcbiAgICAgIDE4NyxcbiAgICAgIDc0LFxuICAgICAgMzgsXG4gICAgICAxMDgsXG4gICAgICAyNDMsXG4gICAgICA4NCxcbiAgICAgIDI0MCxcbiAgICAgIDY0LFxuICAgICAgMTY4LFxuICAgICAgMyxcbiAgICAgIDcsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTE2TFJWN1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTA3NjI2ODU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNhbnRhclwiLFxuICAgIFwibGlkXCI6IFwiMjI4NjE3Mzg0NjQ0NzYzOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHlNNElRRUVNRzJpclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUL0ZpQ1JOUDJhbUxKYmE0ZzBzS2ZUTG9FbFFyUWRzSmVkMkxoRHJoNzNBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdsclZIemtKSmVxbjJaNmR2SkszNFRKTkRWeWs0N05xYlZWR3paMGh4SkovVUVETVZNVjJKKzhBUDZPVDFNRVU5c05EV2VZRHEwWnc3SXJsQ0h6V0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxLVEhWK0FNOWwxVWRVTVlRa0doSVoxZUY3VmJycCtGL1ZEUURZcVFna1JxTWNHS2NOdkR3N1JNalRHaHlEQTlQZlZmMElsVHRxOFhrcUZlQ2JLUENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTA3NjI2ODU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4MzU0NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFINGpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg0ai5qc29uIjogIntcImtleURhdGFcIjpcIjBmOTh6REpiaWpsOHZRZWl3azNxTjdOSFhKaWttNVp3akZaZ1ZYWHBFcU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA4MzcwNDk1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5ODM1NDYzOTU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
