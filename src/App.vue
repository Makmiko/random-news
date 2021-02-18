<template>
  <v-app>
    <Header />
    <v-main class="secondary">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from './layout/Header';

export default {
  name: 'App',
  components: { Header },
};
</script>
