const axios = require('axios');
const path = require('path');

module.exports.config = {
  name: "add",
  version: "11.9.7",
  permission: 0,
  credits: "Islamick Cyber Chat",
  prefix: true,
  description: "random love story video",
  category: "video",
  usages: "random",
  cooldowns: 30,
};
module.exports.run = async ({ api, event, args }) => {
  try { 
    const api = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json')
  const imgur = api.data.api
    const imageUrl = event.messageReply.attachments[0].url;
    const response = await axios.get(`${imgur}/imgurv2?link=${encodeURIComponent(imageUrl)}`);
        const imgurLink = response.data.uploaded.image;
        const fileExtension = path.extname(imgurLink);
        
    const videoName = args.join(" ").trim();
    const apis = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json')
  const Shaon = apis.data.api

    if (!videoName) {
      return api.sendMessage("Please provide a name for the video.", event.threadID, event.messageID);
    }

    const Shaon1 = await axios.get(`${Shaon}/video/random?name=${encodeURIComponent(videoName)}&url=${encodeURIComponent(imgurLink)}`);
    api.sendMessage(`💌MASSAGE: URL ADDED SUCCESSFUL\n🟡NAME: ${Shaon1.data.name}\n🖇️URL: ${Shaon1.data.url}`, event.threadID, event.messageID);

  } catch (e) {
    console.log(e);
    api.sendMessage(`An error occurred: ${e.message}`, event.threadID, event.messageID);
  }
};
