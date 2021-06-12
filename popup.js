window.onload = () => {
	const selectBtn = document.getElementById('select');
	const executeBtn = document.getElementById('execute');
	const courseList = document.getElementById('courseList');

	chrome.storage.sync.get('selectedCourses', (e) => {
		if (e.selectedCourses) {
			e.selectedCourses.forEach((course) => {
				const li = document.createElement('li');
				li.textContent = course.name + '       ' + course.status;
				courseList.appendChild(li);
			});
		}
	});

	selectBtn.addEventListener('click', () => {
		chrome.tabs.create({ url: chrome.runtime.getURL('selection.html') });
	});

	executeBtn.addEventListener('click', () => {
		chrome.tabs.executeScript(null, { file: 'content.js' });
	});
};
