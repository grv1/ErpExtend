window.onload = () => {
	const selectBtn = document.getElementById('select');
	const courseList = document.getElementById('courseList');

	chrome.storage.sync.get('selectedCourses', (e) => {
		e.selectedCourses.forEach((course) => {
			const li = document.createElement('li');
			li.textContent = course;
			courseList.appendChild(li);
		});
	});

	selectBtn.addEventListener('click', () => {
		chrome.tabs.create({ url: chrome.runtime.getURL('selection.html') });
	});
};
