
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Pais', component: () => import('pages/Pais.vue') },
      { path: '/Genero', component: () => import('pages/Genero.vue') },
      { path: '/Edad', component: () => import('pages/Edad.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
