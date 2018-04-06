const Vue = require('vue');
const axios = require('axios');

require('bootstrap/dist/css/bootstrap.min.css');
require('./styles/main.css');

var data = {
  objectives: []
};

var vm = new Vue({
  el: '#app',
  data,
  methods: {},
  mounted: () => {
    axios.get('/objectives')
      .then((response) => {
        vm.objectives = response.data;
      });
  }
});
