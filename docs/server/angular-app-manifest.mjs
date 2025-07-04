
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sn-construction',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/sn-construction/home",
    "route": "/sn-construction"
  },
  {
    "renderMode": 2,
    "route": "/sn-construction/home"
  },
  {
    "renderMode": 2,
    "route": "/sn-construction/contact"
  },
  {
    "renderMode": 2,
    "route": "/sn-construction/about"
  },
  {
    "renderMode": 2,
    "route": "/sn-construction/work"
  },
  {
    "renderMode": 2,
    "route": "/sn-construction/service"
  },
  {
    "renderMode": 2,
    "route": "/sn-construction/projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5320, hash: '8327f31eb7c20db7a5a3ff7168abff01f0908a3126725ae263c7cd1dd3288f79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1357, hash: '3a1613cef34f2afd97ea3ac339af1b8b61f2438c0b65e281d575df64b69bb228', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28198, hash: 'e362909e00c8a21c3d82b18fce2354859b5c55435cc3a11ffca19bbe65e8fa10', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 32022, hash: 'a7ae80ede056f62e28d0b144e69f16d1872c5e00471ed701e63db949bdd5a931', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'work/index.html': {size: 28222, hash: 'a53a7c08e144ba85dc9e2c2efc6ab60f258da63c0c592243a647ab546cff6422', text: () => import('./assets-chunks/work_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 34013, hash: 'a2ee13b15d1beba5180994f42830ca663c87ee0f3497ec3705b91dda54c67ef9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 28222, hash: '630923ab47e4ba8f15b91ba9b90f5326f367399189fa72bd98de62563040e866', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 34051, hash: '98f663e5e7373b647d907ac3a6e7b12a9c7f54e8ae6119cce7bc6dcae8d69b13', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'styles-WUI6HHM2.css': {size: 259410, hash: '3QIdG0iOF0o', text: () => import('./assets-chunks/styles-WUI6HHM2_css.mjs').then(m => m.default)}
  },
};
