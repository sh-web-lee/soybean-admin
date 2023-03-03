import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'Blog Admin'
    },
    routes: {
      dashboard: {
        dashboard: 'Dashboard',
        analysis: 'Analysis',
        workbench: 'Work bench'
      },
      about: {
        about: 'About'
      }
    }
  }
};

export default locale;
