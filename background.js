chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.todo == 'showCoursesNotif') {
		const notifOptions = {
			type: 'basic',
			iconUrl: 'icon48.png',
			title: 'Courses Available!',
			message:
				'Some courses are now available! Check extension for more details.'
		};

		chrome.notifications.create('courseNotif', notifOptions);
		chrome.notifications.clear('courseNotif');
	}
});
