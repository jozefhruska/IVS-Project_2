import { app, BrowserWindow } from 'electron';
const timber = require('electron-timber');

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
    titleBarStyle: 'hiddenInset'
  });

  mainWindow.loadURL(`file://${__dirname}/pages/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

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