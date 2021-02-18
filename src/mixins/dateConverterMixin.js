export default {
  methods: {
    formatDate(date) {
      const dateObject = new Date(date);
      let month = dateObject.getMonth() + 1;
      let day = dateObject.getDate();
      const year = dateObject.getFullYear();
      if (month.toString().length === 1) month = `0${month}`;
      if (day.toString().length === 1) day = `0${day}`;
      return `${day}.${month}.${year}`;
    },
    unformatDate(dateStr) {
      const [day, month, year] = dateStr.split('.');
      return (new Date(year, (month - 1), day));
    },
  },
};
