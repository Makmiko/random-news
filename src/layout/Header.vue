<template>
  <v-app-bar
    app
    :color="$vuetify.theme.themes.light.primary"
    dark
  >
    <div class="logo-container">
      <v-img
        alt="Dogo-logo"
        class="mr-2"
        contain
        src="../assets/no-poster.jpg"
        transition="scale-transition"
        height="64"
        width="59"
      />

      <v-img
        alt="Webmasters"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="../assets/webmasters.png"
        width="400"
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
.logo-container {
  display: flex;
  align-items: center;
  overflow-y: hidden;
  height: 64px;
}
</style>
