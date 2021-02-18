import axios from 'axios';
import mock from '../plugins/mockAdapter';
import faker from '../plugins/faker';

function getUsers(n = 20) {
  const users = [];
  for (let i = 0; i < n; i++) {
    users.push({
        id: faker.random.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        regDate: faker.date.recent(),
      });
  }
  return users;
}

mock.onGet('/users').reply(() => {
  return [200, { users: getUsers() }];
});

export default async function fetchUsers() {
  try {
    const { data } = await axios.get('/users');
    return data.users;
  } catch (e) {
    console.error('user request error: ', e);
    return Promise.reject(e.response);
  }
}
