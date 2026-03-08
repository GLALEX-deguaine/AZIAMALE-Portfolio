
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Aziamale-gloria',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Aziamale-gloria"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5253, hash: '48f5aee4353a6d9f369f51ccf188952af004d8864cf79df02e02b88a2601c082', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1038, hash: '1c134fb1b38aa22b0b9b9216d9fdf46a90147afe1cd5c21b6e276b3b4316b0a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32540, hash: '0a05bf3cd999d36ffd6bbeb40137eda1ac67122ab86a4bf0c04216ecc52caeb4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6JWULBYL.css': {size: 232302, hash: 'i/IsSwPHwoo', text: () => import('./assets-chunks/styles-6JWULBYL_css.mjs').then(m => m.default)}
  },
};
