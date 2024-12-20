import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension is now active!');
    
    // Example: Register a simple command
    const disposable = vscode.commands.registerCommand('LAB.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from Your Extension!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
