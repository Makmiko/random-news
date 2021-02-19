<template>
  <v-data-table
    :headers="userHeaders"
    :items="vuetifyUserRows"
    item-key="id"
    :loading="usersStatus === 'loading'"
    loading-text="Загружаем данные о пользователях..."
    class="elevation-1 textColor--text"
  >
    <template v-slot:item.actions="{ item }">
      <v-container fluid>
        <v-row dense>
          <v-col class="d-flex align-content-center" cols="2">
            <v-icon
              :color="$vuetify.theme.themes.light.textColor"
              class="mr-2"
              @click="editUser(item)"
            >
              mdi-pencil
            </v-icon>
          </v-col>
          <v-col class="d-flex align-content-center" cols="2">
            <v-icon
              :color="$vuetify.theme.themes.light.textColor"
              @click="deleteUser(item)"
            >
              mdi-delete
            </v-icon>
          </v-col>
          <v-col cols="8">
            <v-switch
              :color="$vuetify.theme.themes.light.textColor"
              class="my-0" dense @change="toggleVisibility"
              hide-details
            >
              <template v-slot:label>
                <span class="textColor--text">
                  Изменить видимость
                </span>
              </template>
            </v-switch>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-data-table>
</template>

<script>
  import dateConverterMixin from '../mixins/dateConverterMixin';

  export default {
    name: 'UserTable',
    mixins: [dateConverterMixin],
    props: {
      users: {
        type: Array,
        default: () => [],
      },
      usersStatus: {
        type: String,
      }
    },
    data() {
      return {
        userHeaders: [
          {
            text: 'ID', align: 'center',
            value: 'id', class: 'textColor--text',
          },
          {
            text: 'E-mail', value: 'email',
            class: 'textColor--text', align: 'center',
          },
          {
            text: 'ФИО', value: 'name',
            class: 'textColor--text', align: 'center',
          },
          {
            text: 'Дата регистрации', value: 'registerDate',
            class: 'textColor--text', align: 'center',
            sort: (date1, date2) => {
              date1 = this.unformatDate(date1);
              date2 = this.unformatDate(date2);
              return (date2 - date1);
            },
          },
          {
            text: 'Управление', value: 'actions',
            class: 'textColor--text', sortable: false,
            align: 'center',
          },
        ],
      }
    },
    computed: {
      vuetifyUserRows() {
        return this.users.map((user) => {
          user.registerDate = this.formatDate(user.regDate);
          return user;
        });
      }
    },
    methods: {
      toggleVisibility(value) {
        this.$emit('toggleVisibility', value)
      },
      deleteUser() {
        this.$emit('deleteUser')
      },
      editUser() {
        this.$emit('editUser')
      },
    },
  }
</script>

<style>

</style>
