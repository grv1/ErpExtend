window.onload = () => {
	const container = document.getElementById('container');
	const addBtn = document.getElementById('addBtn');

	const arr = [];

	addBtn.addEventListener('click', () => {
		const inputElement = document.createElement('input');

		inputElement.setAttribute('list', 'browsers');
		inputElement.id = arr.length;
		inputElement.style.display = 'block';
		inputElement.className =
			'py-2 px-4 rounded-lg text-blue-dark font-bold text-lg';

		console.log(inputElement.list);

		arr.push('');

		inputElement.onchange = function (e) {
			arr[inputElement.id] = e.target.value;
			console.log(arr);
		};

		container.appendChild(inputElement);
	});
};
