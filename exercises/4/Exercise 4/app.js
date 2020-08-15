new Vue({
  el: '#exercise',
  data: {
    effects: 'highlight',
    classe: 'red',
    classe2: 'big',
    trueorfalse: 'f'
  },
  methods: {
    startEffect: function () {
      setInterval(() => {
        this.effects != 'shrink' ? this.effects = 'shrink' : this.effects = 'highlight';
      }, 2000);
    }
  }
});
