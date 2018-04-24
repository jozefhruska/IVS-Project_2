import { app, BrowserWindow } from 'electron';
const timber = require('electron-timber');
var path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

const initalize = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    minWidth: 280,
    minHeight: 440,
    width: 420,
    height: 660,
    maxWidth: 630,
    maxHeight: 990,
    maximizable: false,
    frame: false,
    titleBarStyle: 'hiddenInset',
    icon: path.join(__dirname, 'icons/png/64x64.png')
  });

  mainWindow.loadURL(`file://${__dirname}/pages/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Dev tools
  mainWindow.webContents.openDevTools()
};
app.on('ready', initalize);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});