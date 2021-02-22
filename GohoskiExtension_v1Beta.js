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
		xhr.open('GET', '/article/xmlhttprequest/example/load');
		xhr.send();
		xhr.onload = function() {
		  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
			console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
		  } else { // если всё прошло гладко, выводим результат
			return xhr.response;
		  }
		};
		xhr.onerror = function() {
		  console.log("Запрос не удался");
		};
	}
}
Scratch.extensions.register(new GohoskiExtension());