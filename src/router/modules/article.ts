const article: AuthRoute.Route = {
  name: 'article',
  path: '/article',
  component: 'basic',
  meta: {
    title: 'Article',
    requiresAuth: true,
    icon: 'fluent:book-information-24-regular',
    order: 2
  },
  children: [
    {
      name: 'article_manage',
      path: '/article/manage',
      component: 'self',
      meta: {
        title: 'Article manage',
        requiresAuth: true,
        icon: 'ic:round-construction'
      }
    },
    {
      name: 'article_create',
      path: '/article/create',
      component: 'self',
      meta: {
        title: 'Create article',
        requiresAuth: true,
        icon: 'ic:round-construction'
      }
    }
  ]
};

export default article;
