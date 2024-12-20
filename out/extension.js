"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension is now active!');
    // Example: Register a simple command
    const disposable = vscode.commands.registerCommand('LAB.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from Your Extension!');
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
