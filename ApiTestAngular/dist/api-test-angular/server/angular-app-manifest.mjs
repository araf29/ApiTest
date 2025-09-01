
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMLH3COM.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMLH3COM.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E62N7VD3.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMLH3COM.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMLH3COM.js"
    ],
    "route": "/**/signup"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 818, hash: 'ee2126ea2b849f15f8448fa00a03f45c7b321fa99462dc5ae53948fbcc719fc3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: 'ada19f471110e9b7be3d94f43ca4d7de198cbc0f847418fe6843393a6887d643', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 1137, hash: '6e7e376ba6505a245bfc9a27e8a258c3ae047b5bc7cec0e0d7e0c5f167d1ba5f', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 12197, hash: 'a148635b15a148ab97afd72121171146342acaa6749e768061fbd6ae0566427c', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6969, hash: 'c60eee82c6e05e6c381dd0c01a4aa83f92205b7a7b820d0d7fe5efdc1e1d846b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 7729, hash: '64083a31b0f0cd38c4660ca3680bb44b0339fe09d9ade6d2572fa16ae5b29152', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-BBURD7AU.css': {size: 5382, hash: 'mSnsT39/vQA', text: () => import('./assets-chunks/styles-BBURD7AU_css.mjs').then(m => m.default)}
  },
};
