class GohoskiExtension {
	getInfo() {
		return {
			"id": "GohoskiExtension",
			"name": "Gohoski's Extension",
			"blocks": [
				{
					"opcode": "data_http", //This will be the ID code for the block
					"blockType": "reporter", //This can either be Boolean, reporter, command, or hat
					"text": "data from url: [url]", //This is the block text, and how it will display in the Scratch interface
					"arguments": {
						"url": {
							"type": "string",
							"defaultValue": "scratch.mit.edu"
						}
					}
				}
			],
			"menus": { //we will get back to this in a later tutorial
			}
		};
	}
	data_http({url}) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.onload = function() {
			if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
			return `Error ${xhr.status}: ${xhr.statusText}`;
		} else {
			return xhr.response;
		}
		};
		xhr.onerror = function() {
			return "Request failed";
		};
	}
}
Scratch.extensions.register(new GohoskiExtension());