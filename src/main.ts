import './assets/less/main.less';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { Skapi } from 'skapi-js';

const app = createApp(App);

// const skapi = new Skapi(
//     'ap21wxnmwYZ0je7aiifn',
//     '62f7c0be-31f5-45a7-8e6c-dd0bf99c874e',
//     { autoLogin: true },
//     { hostDomain: 'skapi.app', target_cdn: 'd1wrj5ymxrt2ir' }
// ); // 개발환경 alsdk9879+test1 계정 > test_GW 서비스

app.use(router);
app.mount('#app');

// export { skapi };
