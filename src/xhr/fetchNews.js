import axios from 'axios';
import mock from '../plugins/mockAdapter';
import faker from '../plugins/faker';

function getNews(n = 20) {
  const news = [];
  for (let i = 0; i < n; i++) {
    news.push({
      id: faker.random.uuid(),
      header: faker.lorem.words(),
      text: faker.lorem.paragraphs(),
      image: faker.image.animals(0, 0, true),
      crDate: faker.date.past(),
    });
  }
  return news;
}

mock.onGet('/news').reply(() => {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve([200, { news: getNews(200) }]);
    }, 800);
  }));
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
