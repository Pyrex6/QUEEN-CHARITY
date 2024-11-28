//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dillentony622@gmail.com";
global.location = "kisii, Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6xuv7u.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "254745 621641";
global.owner = process.env.OWNER_NUMBER || "254115578085";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kwe3i5.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUNuNVUwdlJlTmVLRnE3bGJ1Tml5dEdZTGllS21yZUhwMmZVbG9zNG8xUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblNNTnVWaitsbndnOVkzaDBSWWRnS2NHVGN0R25rUms1dDkvTXpuL3VoST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrS3BUTEVqcGxwa08rMVFJOHJoYXBuTERnU2JvZ3JPWm41Z1NQcDA0V1VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGTWdWcUlKQU95aXpjUjFwZ1puMEQ3K2k0eHBHMStlTmZIOTBEUFFZa2t3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDd0VLNHNLaFdMdDBuNm1RZlQxc09OcncrWUtwdkIydmVUZHh0OUhRRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind2dCtpSks5QlZkVFVOWlJ6MGp6V0pOcTd2aTQzM3o2eWFEZCtSU2gyQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVEMDFOQzJzWTh0MllmNTFaR1I4TENCTnRvS3ltWmwyeDMzNThaejdFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEQ3YWFPclFodXhvck1vWng4a3ZzMWVYM0lRNm5ZcXdsaWNReW96dkF5bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJIUmNKK0NTWjFQQ2h6cDI0RERiZHVvOXhNNE5meTc1ZUtUdm9IQVdLSzA4a2xFLzV6OFBmZXRoN3RlRHo5Ukt2ZFZMV2lGNmxYSE9BdTFlbUZnYWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJPZlVrbitOL29qc0x2ZVhwM1ZuQlI3R3ZwSkJDTnh6ZDlpYnRNY09SamlrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCbVRQbGZ3RFMzRzZQcHRNMXpJQ2FRIiwicGhvbmVJZCI6IjcwZmQ3NWQyLTQ1MWUtNDY2Zi1iZDVjLWEzZGQ1N2Q0MDU5ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTmFLcWMwVzQ5Rk9ienlpNVNNWHhCbC9rZWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjdqTy9kR1NwY0ZFQTN2SFZoRWV5ZG1jZFdFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRIRk1HMkJMIiwibWUiOnsiaWQiOiIyNTQxMTU1NzgwODU6NjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p2VmlPWUhFTXZybzdvR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRxUzZZNFNqUHNqSHo5SFVueUZ3QUJENEtUeUh6em83TnJsbTJ6d3dmbk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFzaUY0U2t5NG40V1lxdnA0cmpWOGE1bHpzYzBaYk9SWktqRUc1Y1NBNWNzVDlNOUR5WStITnpodEtXVVU0ZWQ3UktOMUt1MHFKeW9EWGxsVlBnakJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmR2FvYTkyeVh6cXVzSlZFdG5pRmhWajRIbHgrcW9YS1QvL0VCbEwzV1dtM1k5YUhrZkpLUlRlWUtmQUljeTdiQ2w3UG5XQzUrZXVKeHQrNk11U0dodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExNTU3ODA4NTo2M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRNmt1bU9Fb3o3SXg4L1IxSjhoY0FBUStDazhoODg2T3phNVp0czhNSDV6In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyODM0Nzc4fQ==
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY090Y3YwNDhYWFovcWRxVzhFRjM5M2I0OXBBRDBnVUFkSHcxSGduRGkwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3I5QXR3alNyQThtdU13RWpwVkIwNGVORmYyR1FHajFuUlJEbmliWTBoYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQ3RiN3czdVVzcGhnMU13Mno5S3ZnVTJoMThrYVNUZkQ5cXp1UHV3a0ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsUmx3a29RN1I0eWZwazlnRFdLNWpXZ1NiZGJBSTRacjZkUXhJWDRkK2pzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HelBFUWt6LzVQUVRTOUlLRFVrbzgvbWtka0xoUllPL3dpYWpvWHN6VlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVobngvMlRCK3hvbkg3cWNndk9tMHJ1Q0hkTVl4ZHduSjdWaDFDa1FJRzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVJVXBzTEc0T1FKZ2VCVXpCSHRObzVLdVFmWWUzTmFncUVPY0hlQ3BIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDVHaXZWcW5pWGcyc3pKWHVDZ3BSSStMeWlxVUR3WW5mSnpGRUQvOWtEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkttZ0xtSHRBRkc4YUV5QzdYTnBhQXZlN1I2MUEvb3RpdktETzdqQWNvV055aEx3amVubXg2b25TSTgvTGdnOVdLUzJHYmpZS2xFL09xaXl3YXpaVUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6ImFpd1kxYnpqWVdYQ3dUSmlRSHg5QXA2UHBBbTJoSHh5VDFreEpwU0wweGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRmTFpJVkYyVE5lQlFXaTBUUWJ0dkEiLCJwaG9uZUlkIjoiMDg2NTA4ZTItMmZmYi00YzExLTgxMmYtNGZjMzAxMmU3ZTgwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJpc2tXUVNhZ2xrbXVyT3J5WHRDd0hGUTQ5VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1RWJMSEZzU0d6eVRFZW1ReXdheFpEa3lSTnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWEFGRkE5UzYiLCJtZSI6eyJpZCI6IjI1NDExMjE5MjExOTo3NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2U4MW1ZUTZPL2h1UVlZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibDk0V1U3S1R4M2hzQVZVMjlMdGlLdVJhbGRObFVEMzJGa0hRU3VOcVMxcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiREt1QUFCY1lrK1NhVEI5cUtwZ2hQVDRSblE5dlZNRHk3RWYvRDNNWW5WUkZHVGZaRmdoa3dlYVV0NWRQWjB1aTNJa3V6S3FDYWNENEFGZndEZkJ2Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6Imc4M3N3S3V3NUt4Nmlpd05vdkwraHpCMmNqNnZxVVppVTdRN2ZRS1ZZdzdsNjc3ODV2RjlTQ1ZYTEd2L1BtM0dWRjFibkdPR0p5THI4b0VqQVh5RkFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyMTkyMTE5Ojc0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpmZUZsT3lrOGQ0YkFGVk52UzdZaXJrV3BYVFpWQTk5aFpCMEVyamFrdGIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE3NTM5NzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT29hIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "`ĐȺɍꝁ MȺłɨꝁ-_ łøɍđ mᵾƶȺn_",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
