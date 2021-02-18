import axios from 'axios';
import mock from '../plugins/mockAdapter';
import faker from '../plugins/faker';

function getNews(n = 20) {
  const news = [];
  for (let i = 0; i < n; i++) {
    news.push({
      header: faker.lorem.sentence(),
      text: faker.lorem.text(),
      image: faker.image.image(),
      crDate: faker.date.recent(),
    });
  }
  return news;
}

mock.onGet('/news').reply(200, {
  news: getNews(),
});

export default async function fetchNews() {
  try {
    const { data } = await axios.get('/news');
    return data.news;
  } catch (e) {
    console.error('user request error: ', e);
    return Promise.reject(e.response);
  }
}
