/**
 * Helper Strings
 */
const FRAME = 'ptifrmtgtframe';
const SEARCH_BTN = 'CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH';
const SAVE_BTN = 'ICSave';
const NEW_SEARCH_BTN = 'CLASS_SRCH_WRK2_SSR_PB_NEW_SEARCH';
const ITEM_CLASS = 'SSSHYPERLINKBOLD';
const ERP_BS = '&nbsp;&nbsp;&nbsp;&nbsp; ';

/**
 * Helper Functions
 */
const helperById = (id) => {
	return document
		.getElementById(FRAME)
		.contentWindow.document.getElementById(id);
};

const helperByClassName = (className) => {
	return document
		.getElementById(FRAME)
		.contentWindow.document.getElementsByClassName(className);
};

/**
 * Code
 */
let courses = [];
let finalList = [];
chrome.storage.sync.get('selectedCourses', (e) => {
	e.selectedCourses.forEach((course) => {
		const temp = course.name.split(' : ')[0].split(' ');
		courses.push(temp[0] + ERP_BS + temp[1]);
	});
	finalList = e.selectedCourses;
});

setInterval(function () {
	helperById(SEARCH_BTN) && helperById(SEARCH_BTN).click();
	helperById(SAVE_BTN) && helperById(SAVE_BTN).click();
}, 2500);

setInterval(function () {
	if (helperById(NEW_SEARCH_BTN) != null) {
		const listSize = helperByClassName(ITEM_CLASS).length;

		for (let i = 0; i < listSize; i++) {
			courses.forEach((course, index) => {
				if (
					helperByClassName(ITEM_CLASS)[i].innerHTML.search(course) !=
					-1
				) {
					finalList[index].status = true;
				}
			});
		}

		chrome.storage.sync.set({
			selectedCourses: finalList
		});

		courses.forEach((_, index) => {
			finalList[index].status = false;
		});

		chrome.runtime.sendMessage({ todo: 'showCoursesNotif' });
	}
}, 5000);

setInterval(function () {
	if (helperById(NEW_SEARCH_BTN) != null) helperById(NEW_SEARCH_BTN).click();
}, 9000);
