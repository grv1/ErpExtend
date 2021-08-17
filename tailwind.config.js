module.exports = {
	purge: {
		enabled: true,
		content: [
			'./selection.html',
			'./popup.html',
			'./display.html',
			'./selection.js',
			'./popup.js',
			'./display.js'
		]
	},
	darkMode: false,
	theme: {
		fontFamily: {
			sans: 'Lexend'
		},
		extend: {
			colors: {
				blue: {
					dark: '#1c1c1c',
					light: '#252525'
				},
				white: '#D3D3D3',
				pink: '#fe2a70',
				tt: {
					bg: '#121212',
					cellbg: '#181818',
					bdr: '#E0E0E0'
				},
				input: {
					bg: '#2E2E2E'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
