class GohoskiExtension {
	getInfo() {
		return {
			"id": "GohoskiExtension",
			"name": "Gohoski's Extension",
			"blocks": [
				{
					"opcode": "screenshot_scene", //This will be the ID code for the block
					"blockType": "command", //This can either be Boolean, reporter, command, or hat
					"text": "save the scene as png", //This is the block text, and how it will display in the Scratch interface
					"arguments": { //Arguments are the input fields in the block. In the block text, place arguments in square brackets with the corresponding ID
					}
				},
				{
					"opcode": "open_link_in_new_tab", 
					"blockType": "command",
					"text": "open url [link] in a new tab",
					"arguments": {
						"url": {
							"type": "string",
							"defaultValue": "scratch.mit.edu"
						}
					}
				},
			],
			"menus": { //we will get back to this in a later tutorial
			}
		};
	}
	screenshot_scene({}) {
		window.open(document.getElementsByTagName("canvas")[0].toDataURL());
	}
}
Scratch.extensions.register(new GohoskiExtension());