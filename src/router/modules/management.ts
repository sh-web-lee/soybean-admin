const management: AuthRoute.Route = {
  name: 'management',
  path: '/management',
  component: 'basic',
  children: [
    {
      name: 'management_auth',
      path: '/management/auth',
      component: 'self',
      meta: {
        title: 'Manage auth',
        requiresAuth: true,
        icon: 'ic:baseline-security'
      }
    },
    {
      name: 'management_role',
      path: '/management/role',
      component: 'self',
      meta: {
        title: 'Manage role',
        requiresAuth: true,
        icon: 'carbon:user-role'
      }
    },
    {
      name: 'management_user',
      path: '/management/user',
      component: 'self',
      meta: {
        title: 'Manage user',
        requiresAuth: true,
        icon: 'ic:round-manage-accounts'
      }
    },
    {
      name: 'management_route',
      path: '/management/route',
      component: 'self',
      meta: {
        title: 'Manage route',
        requiresAuth: true,
        icon: 'material-symbols:route'
      }
    }
  ],
  meta: {
    title: 'System manage',
    icon: 'carbon:cloud-service-management',
    order: 9
  }
};

export default management;
