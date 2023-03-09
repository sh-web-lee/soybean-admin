const authDemo: AuthRoute.Route = {
  name: 'auth-demo',
  path: '/auth-demo',
  component: 'basic',
  children: [
    {
      name: 'auth-demo_permission',
      path: '/auth-demo/permission',
      component: 'self',
      meta: {
        title: 'Permission switch',
        requiresAuth: true,
        icon: 'ic:round-construction'
      }
    },
    {
      name: 'auth-demo_super',
      path: '/auth-demo/super',
      component: 'self',
      meta: {
        title: 'Super administrators',
        requiresAuth: true,
        permissions: ['super'],
        icon: 'ic:round-supervisor-account'
      }
    }
  ],
  meta: {
    title: 'Auth',
    icon: 'ic:baseline-security',
    order: 5
  }
};

export default authDemo;
