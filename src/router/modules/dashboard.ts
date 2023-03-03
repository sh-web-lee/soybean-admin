const dashboard: AuthRoute.Route = {
  name: 'dashboard',
  path: '/dashboard',
  component: 'basic',
  children: [
    {
      name: 'dashboard_analysis',
      path: '/dashboard/analysis',
      component: 'self',
      meta: {
        title: 'Analysis',
        requiresAuth: true,
        icon: 'icon-park-outline:analysis'
      }
    },
    {
      name: 'dashboard_workbench',
      path: '/dashboard/workbench',
      component: 'self',
      meta: {
        title: 'Work bench',
        requiresAuth: true,
        icon: 'icon-park-outline:workbench'
      }
    }
  ],
  meta: {
    title: 'Dashboard',
    icon: 'mdi:monitor-dashboard',
    order: 1
  }
};

export default dashboard;
