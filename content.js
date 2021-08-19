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

let clickRepeat, checkCourses, modifySearch;

chrome.runtime.onMessage.addListener((request) => {
	if (request.message === 'start') {
		clickRepeat = setInterval(() => {
			helperById(DEGREE_SELECT) && (helperById(DEGREE_SELECT).selectedIndex = 4);
			helperById(SEARCH_BTN) && helperById(SEARCH_BTN).click();
			helperById(SEARCH_BTN) && helperById(SEARCH_BTN).click();
			helperById(SAVE_BTN) && helperById(SAVE_BTN).click();
		}, 2500);

		checkCourses = setInterval(() => {
			let courses = [];
			let finalList = [];

			if (helperById(MODIFY_SEARCH_BTN) != null) {
				chrome.storage.sync.get('selectedCourses', (e) => {
					e.selectedCourses?.forEach((course) => {
						const temp = course.name.split(' : ')[0].split(' ');
						courses.push(temp[0] + ' ' + temp[1]);
					});
					finalList = [...e.selectedCourses];

					const listSize = helperByQuerySelector(COURSES_QUERY).length;

					for (let i = 0; i < listSize; i++) {
						courses.forEach((course, index) => {
							const courseDiv = helperByQuerySelector(COURSES_QUERY)[i];
							if (courseDiv.innerText.search(course) != -1) {
								finalList[index].status = true;
								finalList[index].sections = [];

								const secList =
									courseDiv.parentNode.parentNode.parentNode.children[1].getElementsByTagName(
										'a'
									);

								for (let j = 8; j < secList.length; j += 9) {
									finalList[index].sections.push(secList[j].text.split('-')[0]);
								}
							}
						});
					}

					chrome.storage.sync.set({
						selectedCourses: finalList
					});

					courses.forEach((_, index) => {
						finalList[index].status = false;
						finalList[index].sections = [];
					});

					chrome.runtime.sendMessage({ todo: 'showCoursesNotif' });
				});
			}
		}, 5000);

		modifySearch = setInterval(() => {
			if (helperById(MODIFY_SEARCH_BTN) != null) helperById(MODIFY_SEARCH_BTN).click();
		}, 9000);
	}
	if (request.message === 'stop') {
		clearInterval(clickRepeat);
		clearInterval(checkCourses);
		clearInterval(modifySearch);
	}
});
