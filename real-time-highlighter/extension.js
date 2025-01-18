const vscode = require('vscode');
const WebSocket = require('ws');

let socket;

function activate(context) {
	console.log('Real-Time Highlighter is now active!');

	// Register the command
	var disposable = vscode.commands.registerCommand('real-time-highlighter.highlight', function () {
		if (!socket || socket.readyState !== WebSocket.OPEN) {
			socket = new WebSocket('ws://localhost:8080');

			socket.onopen = function () {
				vscode.window.showInformationMessage('Connected to WebSocket server!');
			};

			socket.onerror = function (err) {
				vscode.window.showErrorMessage('WebSocket error: ' + err.message);
			};
		}

		vscode.window.showInformationMessage('Real-Time Highlighter started!');
	});

	// Listen for text selection changes
	vscode.window.onDidChangeTextEditorSelection(function (event) {
		if (!socket || socket.readyState !== WebSocket.OPEN) {
			return;
		}

		var editor = event.textEditor;
		var selection = editor.selection;

		if (!selection.isEmpty) {
			var selectedText = editor.document.getText(selection);
			socket.send(selectedText); // Send the selected text to the WebSocket server
			vscode.window.showInformationMessage('Sent: ' + selectedText);
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() {
	if (socket) {
		socket.close();
	}
}

module.exports = {
	activate: activate,
	deactivate: deactivate,
};
