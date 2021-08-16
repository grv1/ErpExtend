window.onload = () => {
	const selectBtn = document.getElementById('select');
	const displayBtn = document.getElementById('display');
	const executeBtn = document.getElementById('execute');
	const stopBtn = document.getElementById('stop');
	const courseList = document.getElementById('courseList');

	chrome.storage.sync.get('selectedCourses', (e) => {
		if (e.selectedCourses) {
			console.log(e.selectedCourses);
			e.selectedCourses.forEach((course) => {
				const li = document.createElement('li');
				li.textContent =
					course.name +
					'       ' +
					course.status +
					' ' +
					(course.sections.length > 0 ? course.sections[0] : '');
				li.className = 'text-white';
				courseList.appendChild(li);
			});
		}
	});

	selectBtn.addEventListener('click', () => {
		chrome.tabs.create({ url: chrome.runtime.getURL('selection.html') });
	});

	displayBtn.addEventListener('click', () => {
		chrome.tabs.create({ url: chrome.runtime.getURL('display.html') });
	});

	executeBtn.addEventListener('click', () => {
		chrome.tabs.executeScript(null, { file: 'content.js' });
	});

	stopBtn.addEventListener('click', () => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const activeTab = tabs[0];
			chrome.tabs.sendMessage(activeTab.id, { message: 'stop' });
		});
	});
};
