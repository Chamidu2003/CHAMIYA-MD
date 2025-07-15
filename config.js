const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JJxi0RCb#N2UXs-qk_10mddqonp-m4CuZ3E_DtGecJ5B_3WpdTXw",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Chamidu2003/CHAMIYA-MD/blob/main/images/POWERFULl.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 CHAMIYA-MD Is Alive Now😍*",
BOT_OWNER: '94763669691',  // Replace with the owner's phone number



};
