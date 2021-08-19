const COLORS = [
	'#7B71DC',
	'#CF6679',
	'#2DAE6D',
	'#F2853C',
	'#5597DF',
	'#9D81B5',
	'#2B9DD3',
	'#F06D65',
	'#7E7E7E'
];

window.onload = () => {
	const ttList = document.getElementById('tts');
	const colorMap = new Map();

	const addTT = (tt, index) => {
		const singleTT = [
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}],
			[{}, {}, {}, {}, {}, {}]
		];

		tt.forEach((course) => {
			if (!colorMap.has(course.courseId)) {
				colorMap.set(course.courseId, COLORS[colorMap.size]);
			}
			course.days.forEach((day, i) => {
				day.forEach((hour) => {
					singleTT[+hour][i] = {
						id: course.courseId,
						name: course.courseTitle,
						lec: course.lecType + course.section,
						prof: course.instructor
					};
				});
			});
		});

		const div1 = document.createElement('div');
		div1.className = 'w-11/12 mx-auto';

		const div2 = document.createElement('div');
		div2.className = 'flex flex-col mt-5';
		div1.appendChild(div2);

		const div3 = document.createElement('div');
		div3.className = '-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8';
		div2.appendChild(div3);

		const div4 = document.createElement('div');
		div4.className = 'py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8';
		div3.appendChild(div4);

		const div5 = document.createElement('div');
		div5.className = 'shadow overflow-hidden';
		div4.appendChild(div5);

		const pn = document.createElement('p');
		pn.textContent = '#' + index;
		pn.className = 'text-white text-center text-3xl';
		div5.appendChild(pn);

		const table = document.createElement('table');
		table.className = 'min-w-full';
		div5.appendChild(table);

		const thead = document.createElement('thead');
		thead.className = 'bg-gray-200 text-center';
		table.appendChild(thead);

		const tr1 = document.createElement('tr');
		tr1.className = 'border border-tt-bdr border-opacity-10';
		tr1.style.borderWidth = 0.5;
		table.appendChild(tr1);

		const th1 = document.createElement('th');
		th1.className = 'px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider';
		tr1.appendChild(th1);

		['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].forEach((day) => {
			const th = document.createElement('th');
			th.scope = 'col';
			th.className = 'w-1/6 py-3 text-xs font-medium text-white uppercase tracking-wider';
			th.style.maxWidth = '30px';
			th.textContent = day;
			tr1.appendChild(th);
		});

		const tbody = document.createElement('tbody');
		tbody.className = 'bg-tt-cellbg text-center';
		table.appendChild(tbody);

		for (let i = 0; i < singleTT.length; i++) {
			const tr = document.createElement('tr');
			tbody.appendChild(tr);

			const td1 = document.createElement('td');
			td1.className = 'px-2 py-4 border border-tt-bdr border-opacity-10 whitespace-nowrap';
			td1.style.borderWidth = 0.5;
			tr.appendChild(td1);

			const timeDiv = document.createElement('div');
			timeDiv.className = 'text-xs text-white';
			timeDiv.textContent = i + 8 + ':00 - ' + (i + 9) + ': 00';
			td1.appendChild(timeDiv);

			singleTT[i].forEach((cell) => {
				const td = document.createElement('td');
				td.className =
					'w-1/12 whitespace-nowrap border border-tt-bdr border-opacity-10 font-bold';
				td.style.borderWidth = 0.5;
				tr.appendChild(td);

				const innerDiv = document.createElement('div');
				innerDiv.className = 'text-xs text-white py-2';
				innerDiv.style.fontSize = '10px';

				if (cell.name) {
					innerDiv.style.background = colorMap.get(cell.id);
					let p1;

					p1 = document.createElement('p');
					p1.textContent = cell.id;
					p1.style.fontSize = '12px';
					innerDiv.appendChild(p1);

					p1 = document.createElement('p');
					p1.textContent = cell.name;
					p1.className = 'w-32 overflow-ellipsis overflow-hidden mx-auto';
					innerDiv.appendChild(p1);

					p1 = document.createElement('p');
					p1.textContent = cell.lec;
					innerDiv.appendChild(p1);

					p1 = document.createElement('p');
					p1.textContent = cell.prof;
					p1.className = 'w-32 overflow-ellipsis overflow-hidden mx-auto';
					innerDiv.appendChild(p1);
				} else {
					innerDiv.textContent = '';
				}
				td.appendChild(innerDiv);
			});
		}

		ttList.appendChild(div1);
	};

	const noTT = () => {
		const p = document.createElement('p');
		p.className = 'text-white text-3xl text-center w-full mt-64';
		p.textContent = 'No Possible Timetables!';

		ttList.appendChild(p);
	};

	chrome.storage.sync.get('selectedCourses', (e) => {
		if (e.selectedCourses) {
			const finalList = e.selectedCourses
				.filter((course) => course.status)
				.map((course) => ({
					course: course.name.split(' : ')[0],
					section: course.sections
				}));

			if (finalList.length === 0) noTT();
			else
				fetch('http://localhost:5000/api/tt/generatett', {
					method: 'POST',
					body: JSON.stringify({ courseIdArr: finalList }),
					headers: { 'Content-type': 'application/json; charset=UTF-8' }
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.totalTTs === 0) noTT();
						else data.list.map((tt, index) => addTT(tt, index + 1));
					})
					.catch((err) => console.log(err));
		}
	});
};
