
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'sn-construction',
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
    'index.csr.html': {size: 5319, hash: 'f2119e9e39d0b6011404e4833c68334b1a2d0caa43777f4177f2eecb89b7e35b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1356, hash: 'ec6b8b03b00d4d4631033cf2497132a9ef8ddd7607a2ecee432919ff2192340c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 28131, hash: '9593ed0a8a5eb240a59e1f715fa3d5ece45ab0b53de7a9b706b2da051189bffc', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28131, hash: '9593ed0a8a5eb240a59e1f715fa3d5ece45ab0b53de7a9b706b2da051189bffc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28131, hash: '9593ed0a8a5eb240a59e1f715fa3d5ece45ab0b53de7a9b706b2da051189bffc', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'work/index.html': {size: 28131, hash: '9593ed0a8a5eb240a59e1f715fa3d5ece45ab0b53de7a9b706b2da051189bffc', text: () => import('./assets-chunks/work_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 28131, hash: '9593ed0a8a5eb240a59e1f715fa3d5ece45ab0b53de7a9b706b2da051189bffc', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 28131, hash: '9593ed0a8a5eb240a59e1f715fa3d5ece45ab0b53de7a9b706b2da051189bffc', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'styles-WUI6HHM2.css': {size: 259410, hash: '3QIdG0iOF0o', text: () => import('./assets-chunks/styles-WUI6HHM2_css.mjs').then(m => m.default)}
  },
};
