const remote =require('electron').remote
// window.ipcRenderer = require('electron').ipcRenderer;
const { ipcRenderer } = require('electron');
module.exports.log= function(){
  window.Electron.sendMessage()
  alert('normal');
}
  