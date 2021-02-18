<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import fetchUsers from './xhr/getUsers';
import fetchNews from './xhr/getNews';
import Header from './layout/Header';

export default {
  name: 'App',
  components: { Header },
  async mounted() {
    const users = await fetchUsers();
    console.log(users);
    const news = await fetchNews();
    console.log(news);
  },
};
</script>
