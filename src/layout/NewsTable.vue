<template>
  <v-data-table
    :headers="newsHeaders"
    :items="vuetifyNewsRows"
    item-key="id"
    :loading="newsStatus === 'loading'"
    class="elevation-1 textColor--text"
  >
    <template v-slot:item.header="{ item }">
      <h4 class="text-center">{{ item.header }}</h4>
    </template>
    <template v-slot:item.image="{ item }">
      <v-container fluid>
        <v-img
          :lazy-src="item.image"
          max-width="250"
          :src="item.image"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="black lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-container>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-container fluid>
        <v-row class="my-2" dense>
          <v-col cols="6">
            <v-icon
              :color="$vuetify.theme.themes.light.textColor"
              class="mr-2"
              @click="editNewsPiece(item)"
            >
              mdi-pencil
            </v-icon>
          </v-col>
          <v-col cols="6">
            <v-icon
              :color="$vuetify.theme.themes.light.textColor"
              @click="deleteNewsPiece(item)"
            >
              mdi-delete
            </v-icon>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <v-switch
              :color="$vuetify.theme.themes.light.textColor"
              class="my-0" dense @change="toggleMailing"
            >
              <template v-slot:label>
                <span class="textColor--text">
                  Рассылка
                </span>
              </template>
            </v-switch>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-slot:expanded-item="{ item }">
      <v-container fluid>
        <v-row class="my-2" dense>
          <v-col cols="9">
            <v-icon
              class="mr-2"
              @click="editNewsPiece(item)"
            >
              mdi-pencil
            </v-icon>
          </v-col>
          <v-col cols="3">
            <v-icon
              @click="deleteNewsPiece(item)"
            >
              mdi-delete
            </v-icon>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-data-table>
</template>

<script>
  import dateConverterMixin from '../mixins/dateConverterMixin';

  export default {
    name: 'NewsTable',
    mixins: [dateConverterMixin],
    props: {
      news: {
        type: Array,
        default: () => [],
      },
      newsStatus: {
        type: String,
      }
    },
    data () {
      return {
        newsHeaders: [
          {
            text: 'Заголовок',
            align: 'start',
            value: 'header',
            class: 'textColor--text',
          },
          { text: 'Статья', value: 'shortText', class: 'textColor--text' },
          { text: 'Изображение', value: 'image', class: 'news__table__news-piece__image textColor--text', sortable: false },
          {
            text: 'Опубликовано', value: 'created', class: 'news__table__news-piece__date textColor--text',
            sort: (date1, date2) => {
              date1 = this.unformatDate(date1);
              date2 = this.unformatDate(date2);
              return (date2 - date1);
            },
          },
          { text: 'Управление', value: 'actions', class: 'textColor--text', sortable: false },
        ],
      }
    },
    computed: {
      vuetifyNewsRows() {
        return this.news.map((newsPiece) => {
          newsPiece.shortText = `${newsPiece.text.slice(0, 200)}...`;
          newsPiece.created = this.formatDate(newsPiece.crDate);
          return newsPiece;
        });
      },
    },
    methods: {
      toggleMailing(value) {
        this.$emit('toggleMailing', value)
      },
      deleteNewsPiece() {
        this.$emit('deleteNewsPiece')
      },
      editNewsPiece() {
        this.$emit('editNewsPiece')
      },
    },
  }
</script>

<style>
.news__table__news-piece__image {
  max-width: 306px;
}
.news__table__news-piece__date {
  min-width: 150px;
}
</style>
