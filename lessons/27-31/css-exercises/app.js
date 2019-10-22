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
    progressBarSize: '5px',
    valueEx4: 'maoe'
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
        this.classDiv = 'div2';
        this.valueEx4 = 'maoe ta true'
      } else {
        this.classDiv = !this.classDiv;
        this.valueEx4 = 'maoe ta falso'
      }
    },
    progressBarFunction: function () {
      let count = 5;
      console.log('clicou')
        setInterval(() => {
          count+=50;
          if(count>500){
            return;
          }else{
            this.progressBarSize = count + 'px';
            console.log(count)
          }

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
