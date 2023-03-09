const plugin: AuthRoute.Route = {
  name: 'plugin',
  path: '/plugin',
  component: 'basic',
  children: [
    {
      name: 'plugin_charts',
      path: '/plugin/charts',
      component: 'multi',
      children: [
        {
          name: 'plugin_charts_echarts',
          path: '/plugin/charts/echarts',
          component: 'self',
          meta: {
            title: 'ECharts',
            requiresAuth: true,
            icon: 'simple-icons:apacheecharts'
          }
        },
        {
          name: 'plugin_charts_antv',
          path: '/plugin/charts/antv',
          component: 'self',
          meta: {
            title: 'AntV',
            requiresAuth: true,
            icon: 'simple-icons:antdesign'
          }
        }
      ],
      meta: {
        title: 'Chatrs',
        icon: 'mdi:chart-areaspline'
      }
    },
    {
      name: 'plugin_map',
      path: '/plugin/map',
      component: 'self',
      meta: {
        title: 'Map',
        requiresAuth: true,
        icon: 'mdi:map'
      }
    },
    {
      name: 'plugin_video',
      path: '/plugin/video',
      component: 'self',
      meta: {
        title: 'Video',
        requiresAuth: true,
        icon: 'mdi:video'
      }
    },
    {
      name: 'plugin_editor',
      path: '/plugin/editor',
      component: 'multi',
      children: [
        {
          name: 'plugin_editor_quill',
          path: '/plugin/editor/quill',
          component: 'self',
          meta: {
            title: 'Rich text',
            requiresAuth: true,
            icon: 'mdi:file-document-edit-outline'
          }
        },
        {
          name: 'plugin_editor_markdown',
          path: '/plugin/editor/markdown',
          component: 'self',
          meta: {
            title: 'markdown',
            requiresAuth: true,
            icon: 'ri:markdown-line'
          }
        }
      ],
      meta: {
        title: 'Editor',
        icon: 'icon-park-outline:editor'
      }
    },
    {
      name: 'plugin_swiper',
      path: '/plugin/swiper',
      component: 'self',
      meta: {
        title: 'Swiper',
        requiresAuth: true,
        icon: 'simple-icons:swiper'
      }
    },
    {
      name: 'plugin_copy',
      path: '/plugin/copy',
      component: 'self',
      meta: {
        title: 'Clipboard',
        requiresAuth: true,
        icon: 'mdi:clipboard-outline'
      }
    },
    {
      name: 'plugin_icon',
      path: '/plugin/icon',
      component: 'self',
      meta: {
        title: 'Icon',
        requiresAuth: true,
        localIcon: 'custom-icon'
      }
    },
    {
      name: 'plugin_print',
      path: '/plugin/print',
      component: 'self',
      meta: {
        title: 'Print',
        requiresAuth: true,
        icon: 'mdi:printer'
      }
    }
  ],
  meta: {
    title: 'Plugins',
    icon: 'clarity:plugin-line',
    order: 4
  }
};

export default plugin;
