window.onload = () => {
	const selectBtn = document.getElementById('select');
	const displayBtn = document.getElementById('display');
	const executeBtn = document.getElementById('execute');
	const stopBtn = document.getElementById('stop');
	const courseList = document.getElementById('courseList');

	chrome.storage.sync.get('selectedCourses', (e) => {
		if (e.selectedCourses) {
			if (e.selectedCourses.length == 0) {
				const div = document.createElement('div');
				div.className = 'px-3 py-2 bg-blue-light shadow-md rounded-md text-white';
				div.textContent = 'No courses selected!';

				courseList.appendChild(div);
			}

			e.selectedCourses.forEach((course) => {
				const div = document.createElement('div');
				div.className = 'px-2 py-1 bg-blue-light shadow-md rounded-md';

				const innerDiv = document.createElement('div');
				innerDiv.className = 'flex items-center';

				const span = document.createElement('span');
				if (course.status) span.className = 'text-green-400 text-xl';
				else span.className = 'text-red-500 text-xl';
				span.textContent = '●';
				innerDiv.appendChild(span);

				const innerP = document.createElement('p');
				innerP.className = 'text-white pt-1 ml-1';
				innerP.textContent = course.name;
				innerDiv.appendChild(innerP);

				div.appendChild(innerDiv);

				if (course.status) {
					const p = document.createElement('p');
					p.className = 'text-white ml-4';
					p.textContent = 'Available: ' + course.sections.join(' ');
					div.appendChild(p);
				}

				courseList.appendChild(div);
			});
		} else {
			const div = document.createElement('div');
			div.className = 'px-3 py-2 bg-blue-light shadow-md rounded-md text-white';
			div.textContent = 'No courses selected!';

			courseList.appendChild(div);
		}
	});

	selectBtn.addEventListener('click', () => {
		chrome.tabs.create({ url: chrome.runtime.getURL('selection.html') });
		window.close();
	});

	displayBtn.addEventListener('click', () => {
		chrome.tabs.create({ url: chrome.runtime.getURL('display.html') });
		window.close();
	});

	chrome.tabs.executeScript(null, { file: 'content.js' });
	executeBtn.addEventListener('click', () => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const activeTab = tabs[0];
			chrome.tabs.sendMessage(activeTab.id, { message: 'start' });
			window.close();
		});
	});

	stopBtn.addEventListener('click', () => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const activeTab = tabs[0];
			chrome.tabs.sendMessage(activeTab.id, { message: 'stop' });
			window.close();
		});
	});
};
