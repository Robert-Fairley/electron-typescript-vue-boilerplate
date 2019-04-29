import { BrowserWindow, app } from "electron";
import { resolve as resolvePath } from "path";

let mainWindow: BrowserWindow | null;

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile(resolvePath(__dirname, "index.html"));

    mainWindow.webContents.openDevTools();

    (app as any).on("closed", () => {
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform === "darwin")
        app.quit();
});

app.on("activate", () => {
    if (mainWindow === null)
        createWindow();
});

