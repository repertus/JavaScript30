document.onkeydown = function keyTapDown(event) {
	event = event || window.event;

	var id = '';

	switch (event.keyCode) {
		case 65:
			id = 'clap';
			playDrum(id);
			break;
		case 83:
			id = 'hiHat';
			playDrum(id);
			break;
		case 68:
			id = 'kick';
			playDrum(id);
			break;
		case 70:
			id = 'openHat';
			playDrum(id);
			break;
		case 71:
			id = 'boom';
			playDrum(id);
			break;
		case 72:
			id = 'ride';
			playDrum(id);
			break;
		case 74:
			id = 'snare';
			playDrum(id);
			break;
		case 75:
			id = 'tom';
			playDrum(id);
			break;
		case 76:
			id = 'tink';
			playDrum(id);
	}
}

document.onkeyup = function keyTapUp(event) {
	event = event || window.event;

	var id = '';

	switch (event.keyCode) {
		case 65:
			id = 'clap';
			endDrum(id);
			break;
		case 83:
			id = 'hiHat';
			endDrum(id);
			break;
		case 68:
			id = 'kick';
			endDrum(id);
			break;
		case 70:
			id = 'openHat';
			endDrum(id);
			break;
		case 71:
			id = 'boom';
			endDrum(id);
			break;
		case 72:
			id = 'ride';
			endDrum(id);
		case 74:
			id = 'snare';
			endDrum(id);
			break;
		case 75:
			id = 'tom';
			endDrum(id);
			break;
		case 76:
			id = 'tink';
			endDrum(id);
	}
}

function playDrum (id) {
	document.getElementById(id).className = 'keyPlayed';
	document.getElementById(id + 'Audio').pause();
	document.getElementById(id + 'Audio').currentTime = 0;
	document.getElementById(id + 'Audio').play();
}

function endDrum (id) {
	document.getElementById(id).className = 'key';
}
