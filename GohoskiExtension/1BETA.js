class GohoskiExtension {
	getInfo() {
		return {
			"id": "GohoskiExtension",
			"name": "Gohoski's Extension",
			"blocks": [
				{
					"opcode": "playSoundFromUrl", 
					"blockType": "command",
					"text": "play sound [url] from url", 
					"arguments": {
						"url": { 
							"type": "string",
							"defaultValue": "https://raw.githubusercontent.com/gohoski/gohoski.github.io/master/GohoskiExtension/sample.mp3"
						}
					}
				},
			],
			"menus": {
				
			}
		};
	}
	playSoundFromUrl({url}) {
		var audio = new Audio(url);
		audio.play();
	}
}
Scratch.extensions.register(new GohoskiExtension());
