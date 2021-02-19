<template>
  <v-container
    class="user-page"
    fluid
  >
    <UserTable :users="users" :users-status="usersStatus" />
  </v-container>
</template>

<script>
  import fetchUsers from '../xhr/fetchUsers';
  import Header from '../layout/Header';
  import UserTable from '../layout/UserTable';

  export default {
    name: 'UserPage',
    components: { UserTable, Header },
    data() {
      return {
        users: [],
        usersStatus: '',
      }
    },
    async mounted() {
      await this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        this.usersStatus = 'loading';
        try {
          const users = await fetchUsers();
          this.usersStatus = 'success';
          this.users = users;
          return users;
        } catch (e) {
          this.usersStatus = 'error';
          return [];
        }
      },
    }
  }
</script>

<style scoped>

</style>
