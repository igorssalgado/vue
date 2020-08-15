new Vue({
  el: '#exercise',
  data: {
    effects: 'highlight'
  },
  methods: {
    startEffect: function () {
      setInterval(() => {
        this.effects != 'shrink' ? this.effects = 'shrink' : this.effects = 'highlight';
      }, 2000);
    }
  }
});
