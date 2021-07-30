/**
 * Helper Strings
 */
const FRAME = 'ptifrmtgtframe';
const SEARCH_BTN = 'CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH';
const SAVE_BTN = '#ICSave';
const MODIFY_SEARCH_BTN = 'CLASS_SRCH_WRK2_SSR_PB_MODIFY';
const ITEM_CLASS = 'PSHYPERLINK';
const COURSES_QUERY = '[id^="win0divSSR_CLSRSLT_WRK_GROUPBOX2GP$"]';
const DEGREE_SELECT = 'SSR_CLSRCH_WRK_ACAD_CAREER$2';

/**
 * Helper Functions
 */
const helperById = (id) => {
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
	e.selectedCourses?.forEach((course) => {
		const temp = course.name.split(' : ')[0].split(' ');
		courses.push(temp[0] + ' ' + temp[1]);
	});
	finalList = e.selectedCourses;
});

const clickRepeat = setInterval(function () {
	helperById(DEGREE_SELECT) && (helperById(DEGREE_SELECT).selectedIndex = 4);
	helperById(SEARCH_BTN) && helperById(SEARCH_BTN).click();
	helperById(SEARCH_BTN) && helperById(SEARCH_BTN).click();
	helperById(SAVE_BTN) && helperById(SAVE_BTN).click();
}, 2500);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === 'stop') {
		clearInterval(clickRepeat);
	}
});

setInterval(function () {
	if (helperById(MODIFY_SEARCH_BTN) != null) {
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
	if (helperById(MODIFY_SEARCH_BTN) != null) helperById(MODIFY_SEARCH_BTN).click();
}, 9000);
