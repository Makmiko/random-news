<template>
  <v-container
    class="news-page"
    fluid
  >
    <NewsTable :news="news" :news-status="newsStatus" />
  </v-container>
</template>

<script>
  import fetchNews from '../xhr/fetchNews';
  import Header from '../layout/Header';
  import NewsTable from '../layout/NewsTable';

  export default {
    name: 'NewsPage',
    components: { NewsTable, Header },
    data() {
      return {
        news: [],
        newsStatus: '',
      }
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      async fetchNews() {
        this.newsStatus = 'loading';
        try {
          const news = await fetchNews();
          this.newsStatus = 'success';
          this.news = news;
          return news;
        } catch (e) {
          this.newsStatus = 'error';
          return [];
        }
      },
    },
  }
</script>

<style scoped>

</style>
