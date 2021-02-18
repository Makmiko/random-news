<template>
  <v-app-bar
    app
    :color="$vuetify.theme.themes.light.primary"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <v-btn
        to="/news"
        class="mr-2"
        text
      >
        <span class="mr-2">Новости</span>
        <v-icon>mdi-newspaper-variant</v-icon>
      </v-btn>
      <v-btn
        to="/users"
        text
      >
        <span class="mr-2">Пользователи</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

</style>
