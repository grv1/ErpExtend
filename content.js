/**
 * Helper Strings
 */
const FRAME = 'main_target_win0';
const SEARCH_BTN = 'CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH';
const SAVE_BTN = '#ICSave';
const MODIFY_SEARCH_BTN = 'CLASS_SRCH_WRK2_SSR_PB_MODIFY';
const ITEM_CLASS = 'PSHYPERLINK';
const COURSES_QUERY = '[id^="win0divSSR_CLSRSLT_WRK_GROUPBOX2GP$"]';

/**
 * Helper Functions
 */
const helperById = (id) => {
	return document.getElementById(id);
};

const helperByFrameAndId = (id) => {
	return document.getElementById(FRAME).contentWindow.document.getElementById(id);
};

const helperByClassName = (className) => {
	return document.getElementById(FRAME).contentWindow.document.getElementsByClassName(className);
};

const helperByQuerySelector = (query) => {
	return document.getElementById(FRAME).contentWindow.document.querySelectorAll(query);
};

/**
 * Code
 */
let courses = [];
let finalList = [];
chrome.storage.sync.get('selectedCourses', (e) => {
	console.log(e.selectedCourses);
	e.selectedCourses?.forEach((course) => {
		const temp = course.name.split(' : ')[0].split(' ');
		courses.push(temp[0] + ' ' + temp[1]);
	});
	finalList = e.selectedCourses;
});

const clickRepeat = setInterval(function () {
	helperById(SEARCH_BTN) && helperById(SEARCH_BTN).click();
	helperByFrameAndId(SEARCH_BTN) && helperByFrameAndId(SEARCH_BTN).click();
	helperByFrameAndId(SAVE_BTN) && helperByFrameAndId(SAVE_BTN).click();
}, 2500);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === 'stop') {
		clearInterval(clickRepeat);
	}
});

setInterval(function () {
	if (helperByFrameAndId(MODIFY_SEARCH_BTN) != null) {
		const listSize = helperByQuerySelector(COURSES_QUERY).length;

		for (let i = 0; i < listSize; i++) {
			courses.forEach((course, index) => {
				if (helperByQuerySelector(COURSES_QUERY)[i].innerText.search(course) != -1) {
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
	if (helperByFrameAndId(MODIFY_SEARCH_BTN) != null)
		helperByFrameAndId(MODIFY_SEARCH_BTN).click();
}, 9000);
