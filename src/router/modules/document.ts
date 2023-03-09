const document: AuthRoute.Route = {
  name: 'document',
  path: '/document',
  component: 'basic',
  children: [
    {
      name: 'document_vue',
      path: '/document/vue',
      component: 'self',
      meta: {
        title: 'vue',
        requiresAuth: true,
        icon: 'logos:vue'
      }
    },
    {
      name: 'document_vite',
      path: '/document/vite',
      component: 'self',
      meta: {
        title: 'vite',
        requiresAuth: true,
        icon: 'logos:vitejs'
      }
    },
    {
      name: 'document_naive',
      path: '/document/naive',
      component: 'self',
      meta: {
        title: 'naive',
        requiresAuth: true,
        icon: 'logos:naiveui'
      }
    },
    {
      name: 'document_project',
      path: '/document/project',
      component: 'self',
      meta: {
        title: 'Document',
        requiresAuth: true,
        localIcon: 'logo'
      }
    },
    {
      name: 'document_project-link',
      path: '/document/project-link',
      meta: {
        title: '项目文档(外链)',
        requiresAuth: true,
        localIcon: 'logo',
        href: 'https://docs.soybean.pro/'
      }
    }
  ],
  meta: {
    title: 'Document',
    icon: 'mdi:file-document-multiple-outline',
    order: 2
  }
};

export default document;
