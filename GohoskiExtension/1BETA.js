/*eslint-env browser*/
class GohoskiExtension {
	getInfo() {
		return {
			"id": "GohoskiExtension",
			"name": "Gohoski's Extension",
			"blocks": [
				{
					"opcode": "screenshot", //This will be the ID code for the block
					"blockType": "command", //This can either be Boolean, reporter, command, or hat
					"text": "screenshot the scene and save it", //This is the block text, and how it will display in the Scratch interface
					"arguments": { //Arguments are the input fields in the block. In the block text, place arguments in square brackets with the corresponding ID 
					}
				},
				/* {
					"opcode": "playSoundFromUrl", 
					"blockType": "command",
					"text": "play sound [url] from url", 
					"arguments": {
						"url": { 
							"type": "string",
							"defaultValue": "scene"
						}
					}
				}, */
			],
			"menus": {
				
			}
		};
	}
	screenshot({}) {
		var canvas = document.querySelector('canvas[style="height: 306px; width: 408px;"]');
        window.open(canvas.toDataURL("image/png"));
	}
}
Scratch.extensions.register(new GohoskiExtension());
