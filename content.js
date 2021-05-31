//flux

// For "SEARCH" && "OK" button

setInterval(function () {
	if (
		document
			.getElementById('ptifrmtgtframe')
			.contentWindow.document.getElementById(
				'CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH'
			) != null
	)
		document
			.getElementById('ptifrmtgtframe')
			.contentWindow.document.getElementById(
				'CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH'
			)
			.click();

	if (
		document
			.getElementById('ptifrmtgtframe')
			.contentWindow.document.getElementById('#ICSave') != null
	)
		document
			.getElementById('ptifrmtgtframe')
			.contentWindow.document.getElementById('#ICSave')
			.click();
}, 2500);

// For results in console + audio

setInterval(function () {
	if (
		document
			.getElementById('ptifrmtgtframe')
			.contentWindow.document.getElementById(
				'CLASS_SRCH_WRK2_SSR_PB_NEW_SEARCH'
			) != null
	) {
		// fetches length of total subjects with seats available
		t = document
			.getElementById('ptifrmtgtframe')
			.contentWindow.document.getElementsByClassName(
				'SSSHYPERLINKBOLD'
			).length;
		// prints in console
		for (var i = 0; i < t; i++) {
			// HSS and GS courses are being looked for - loop is maximum possible
			if (
				document
					.getElementById('ptifrmtgtframe')
					.contentWindow.document.getElementsByClassName(
						'SSSHYPERLINKBOLD'
					)
					[i].innerHTML.search('HSS') != -1 ||
				document
					.getElementById('ptifrmtgtframe')
					.contentWindow.document.getElementsByClassName(
						'SSSHYPERLINKBOLD'
					)
					[i].innerHTML.search('GS') != -1
			) {
				// prints log on console
				console.log(
					document
						.getElementById('ptifrmtgtframe')
						.contentWindow.document.getElementsByClassName(
							'SSSHYPERLINKBOLD'
						)[i].innerHTML
				);
				// sound
				var audio = new Audio(
					'http://soundbible.com/grab.php?id=1789&type=wav'
				);
				audio.play();
			}
		}
	}
}, 5000);

// For "START A NEW SEARCH" button

setInterval(function () {
	if (
		document
			.getElementById('ptifrmtgtframe')
			.contentWindow.document.getElementById(
				'CLASS_SRCH_WRK2_SSR_PB_NEW_SEARCH'
			) != null
	)
		document
			.getElementById('ptifrmtgtframe')
			.contentWindow.document.getElementById(
				'CLASS_SRCH_WRK2_SSR_PB_NEW_SEARCH'
			)
			.click();
}, 10000);

//flux
