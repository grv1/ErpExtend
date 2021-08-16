module.exports = {
	purge: ['./selection.html', './popup.html', './display.html'],
	darkMode: false,
	theme: {
		fontFamily: {
			sans: 'Raleway'
		},
		extend: {
			colors: {
				blue: {
					dark: '#1c1c1c',
					light: '#141B2C'
				},
				white: '#D3D3D3',
				pink: '#fe2a70',
				tt: {
					bg: '#121212',
					cellbg: '#181818',
					bdr: '#E0E0E0'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
