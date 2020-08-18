new Vue({
  el: '#exercise',
  data: {
    effects: 'highlight',
    classe: 'red',
    classe2: '',
    boolean: true,
    estilo: 'color: purple; font-size: 20px;',
    width: 0,
    progressBarColor: 'green'
  },
  methods: {
    startEffect: function () {
      setInterval(() => {
        this.effects != 'shrink' ? this.effects = 'shrink' : this.effects = 'highlight';
      }, 2000);
    },
    progressBar: function () {
      let vm = this;
      interval = setInterval(function () {
        vm.width = vm.width + 10;
        if (vm.width == 400) {
          clearInterval(interval);
          return vm.progressBarColor = 'blue';
        }
      }, 100);

    }
  }
});
