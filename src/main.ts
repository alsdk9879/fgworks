import './assets/less/main.less';

import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import { Skapi } from 'skapi-js';
import { user } from './assets/ts/user';

import Button from '@/components/ui/button.vue';
import Select from '@/components/ui/select.vue';

const app = createApp(App);

export const loaded = ref(false);

const skapi = new Skapi('ap22zm71ydorjy2moun2', 'e9de5107-4f07-4541-901d-eab5cda49a56', {
	autoLogin: window.localStorage.getItem('remember') === 'true',
	eventListener: {
		onLogin: (profile: any) => {
			for (const key in user) {
				delete user[key];
			}

			if (profile) {
				Object.assign(user, profile);
				console.log('User profile:', profile);
			} else {
				console.log('No user is logged in.');
			}

			if (!loaded.value) {
				app.use(router);
				app.mount('#app');
			}

			loaded.value = true;
		}
	}
});

skapi.version();

// app.use(router);
// app.component('Button', Button);
// app.component('Select', Select);
// app.mount('#app');

export { skapi };
