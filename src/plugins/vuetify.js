import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.deepPurple.darken1,
        secondary: colors.purple.lighten5,
        accent: colors.indigo.base,
        textColor: colors.indigo.darken4
      },
    },
    options: { customProperties: true },
  }
});
