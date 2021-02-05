let timeout;

function showSnackbar(txt) {
	let s = document.getElementById('snackbar');

	s.innerText = txt;
	s.classList.add('show');

	clearTimeout(timeout);
	timeout = setTimeout(()=> s.classList.remove('show'), 2000);
}