import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdiSvg'
	},
	theme: {
		themes: {
			dark: {
				primary: '#14202B',
				accent: '#3F51B5',
				secondary: '#FFCDD2'
			},
		},
	},
});
