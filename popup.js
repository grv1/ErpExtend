window.onload = () => {
	const selectBtn = document.getElementById('select');

	selectBtn.addEventListener('click', () => {
		chrome.tabs.create({ url: chrome.runtime.getURL('selection.html') });
	});
};
