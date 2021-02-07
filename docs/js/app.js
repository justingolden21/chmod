if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js')
		.then(reg => console.log('service worker registered'))
		.catch(err => console.log('service worker not registered', err));
}

window.onload = function() {
	for(let item of ['octal', 'mode', 'command']) {
		document.getElementById(`copy-${item}-btn`).onclick = function() {
			document.getElementById(item).select();
			document.execCommand('copy');
			showSnackbar(`Copied ${item}`);
		};		
	}
	document.getElementById('link-btn').onclick = function() {
		copyText(window.location.href);
		showSnackbar('Copied link');
	}
};

function copyText(text) {
	let input = document.body.appendChild(document.createElement('input'));
	input.value = text;
	input.select();
	document.execCommand('copy');
	input.parentNode.removeChild(input);
}