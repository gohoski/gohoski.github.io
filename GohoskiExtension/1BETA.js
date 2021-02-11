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
							"defaultValue": "scene"
						}
					}
				},
			],
			"menus": {
				
			}
		};
	}
	playSoundFromUrl({url}) {
		// 1. Создаём новый XMLHttpRequest-объект
		let xhr = new XMLHttpRequest();

		// 2. Настраиваем его: GET-запрос по URL /article/.../load
		xhr.open('GET', url);

		// 3. Отсылаем запрос
		xhr.send();

		// 4. Этот код сработает после того, как мы получим ответ сервера
		xhr.onload = function() {
		  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
		    	alert(`Error: xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
		  } else { // если всё прошло гладко, выводим результат
		    	var audio = new Audio(xhr.response);
			audio.play();
		  }
		};

		xhr.onerror = function() {
		  	alert("Request failed");
		};
	}
}
Scratch.extensions.register(new GohoskiExtension());
