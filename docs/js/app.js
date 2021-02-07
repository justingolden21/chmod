if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js')
		.then(reg => console.log('service worker registered'))
		.catch(err => console.log('service worker not registered', err));
}

window.onload = function() {
	document.getElementById('copy-octal-btn').onclick = function() {
		document.getElementById('octal').select();
		document.execCommand('copy');
		showSnackbar('Copied octal');
	};
	document.getElementById('copy-mode-btn').onclick = function() {
		document.getElementById('mode').select();
		document.execCommand('copy');
		showSnackbar('Copied mode');
	};
	document.getElementById('copy-command-btn').onclick = function() {
		document.getElementById('command').select();
		document.execCommand('copy');
		showSnackbar('Copied command');
	};	
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