chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.todo == 'showCoursesNotif') {
		const notifOptions = {
			type: 'basic',
			iconUrl: 'icon.png',
			title: 'Courses Available!',
			message: 'Some courses are now available! Check extension for more details.',
			priority: 1
		};

		chrome.notifications.create(`my-notification-${Date.now()}`, notifOptions, function (id) {
			console.log('Last error:', chrome.runtime.lastError);
		});

		// chrome.notifications.clear('courseNotif');
	}
});
