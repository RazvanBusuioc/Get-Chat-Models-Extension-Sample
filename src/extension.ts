import * as vscode from 'vscode';

export function deactivate() { }

export function activate(context: vscode.ExtensionContext) {
	// select the 4o chat model
	vscode.commands.registerCommand('chat.models.get', () => {
		vscode.window.showInformationMessage(`[${Date.now()}] Getting Copilot Chat Models`);
		vscode.lm.selectChatModels({
			vendor: 'copilot'
		}).then(resp => {
			vscode.window.showInformationMessage(`[${Date.now()}] Done Getting Copilot Chat Models. Got ${resp.length} models`);
		});
	});
}