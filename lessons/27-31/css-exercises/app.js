new Vue({
  el: '#exercise',
  data: {
    highlight: false,
    classSwitch: 'shrink',
    class1: 'class1',
    class2: 'class2',
    class3: 'class3',
    classOpt1: 'class1',
    classOpt2: 'class2',
    classDiv: 'div1',
    backgroundColor: 'red',
    progressBarSize: '5px'
  },
  methods: {
    startEffect: function () {
      this.classSwitch = 'highlight';
      setInterval(() => {
        this.classSwitch = 'shrink';
      }, 5000);
    },
    activateClass3: function () {
      if (event.target.value === 'true' || event.target.value === 't') {
        this.class3 = 'class3';
      } else {
        this.class3 = !this.class3;
      }
    },
    progressBarFunction: function () {
      let count = 5;
      console.log('clicou')
        setInterval(() => {
          this.progressBarSize = count + 'px';
          count+=50;
          console.log(count)
        }, 1000);
    }
  },
  computed: {
    myStyle: function () {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  }
});
