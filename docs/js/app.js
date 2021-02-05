if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js')
		.then(reg => console.log('service worker registered'))
		.catch(err => console.log('service worker not registered', err));
}

window.onload = function() {
	document.getElementById('copy-octal-btn').onclick = function() {
		document.getElementById('octal').select();
		document.execCommand('copy');
	};
	document.getElementById('copy-mode-btn').onclick = function() {
		document.getElementById('mode').select();
		document.execCommand('copy');
	};
};