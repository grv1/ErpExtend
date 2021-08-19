chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
	console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
	if (request.todo == 'showCoursesNotif') {
		console.log('He');
		const notifOptions = {
			type: 'basic',
			iconUrl: 'icon.png',
			title: 'Courses Available!',
			message: 'Some courses are now available! Check extension for more details.',
			priority: 2
		};

		chrome.notifications.create('courseNotif', notifOptions);
		// chrome.notifications.clear('courseNotif');
	}
});
