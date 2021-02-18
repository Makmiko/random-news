<template>
  <v-container
    class="user-page"
    fluid
  >
    User list
  </v-container>
</template>

<script>
  import Header from '../layout/Header';
  export default {
    name: 'UserPage',
    components: { Header },
    data() {
      return {}
    },
    mounted() {
      console.log(this.$vuetify.theme);
    },
  }
</script>

<style scoped>

</style>
