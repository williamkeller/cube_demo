const { app, BrowserWindow } = require('electron')

function createWindow() {
  const window = new BrowserWindow({width: 800, height: 600, useContentSize: true, resizable: false})

  // window.webContents.openDevTools({ mode: 'detach' })

  window.loadFile('src/index.html')
}

app.whenReady().then(createWindow)
