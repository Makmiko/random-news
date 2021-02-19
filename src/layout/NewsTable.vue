<template>
  <v-data-table
    :headers="newsHeaders"
    :items="vuetifyNewsRows"
    item-key="id"
    item-class="py-0"
    :loading="newsStatus === 'loading'"
    loading-text="Загружаем новости..."
    class="elevation-1 textColor--text"
  >
    <template v-slot:item.header="{ item }">
      <h3 class="text-center ">{{ item.header }}</h3>
    </template>
    <template v-slot:item.image="{ item }">
      <v-container fluid>
        <v-img
          :lazy-src="item.image"
          max-width="150"
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
      <v-container class="d-flex flex-wrap align-content-space-between" fluid>
        <v-row>
          <v-col class="text-center" cols="6">
            <v-icon
              :color="$vuetify.theme.themes.light.textColor"
              class="mr-2"
              @click="editNewsPiece(item)"
            >
              mdi-pencil
            </v-icon>
          </v-col>
          <v-col class="text-center" cols="6">
            <v-icon
              :color="$vuetify.theme.themes.light.textColor"
              @click="deleteNewsPiece(item)"
            >
              mdi-delete
            </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-switch
              :color="$vuetify.theme.themes.light.textColor"
              class="my-0" hide-details @change="toggleMailing"
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
            align: 'center',
            value: 'header',
            class: 'news__table__header__news-piece_header textColor--text',
          },
          {
            text: 'Статья', value: 'shortText',
            class: 'textColor--text',
          },
          {
            text: 'Изображение', value: 'image',
            sortable: false,
            align: 'center',
            class: 'news__table__news-piece_image textColor--text'
          },
          {
            text: 'Опубликовано', value: 'created',
            align: 'center',
            class: 'news__table__header__news-piece_date textColor--text',
            sort: (date1, date2) => {
              date1 = this.unformatDate(date1);
              date2 = this.unformatDate(date2);
              return (date2 - date1);
            },
          },
          {
            text: 'Управление', value: 'actions',
            class: 'textColor--text',
            align: 'center',
            sortable: false },
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
.news__table__header__news-piece_header {
  min-width: 200px;
}
.news__table__header__news-piece_date {
  min-width: 150px;
}
</style>
