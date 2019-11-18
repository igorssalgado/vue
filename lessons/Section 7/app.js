let cmp = {
  data: function () {
    return {
      status: 'Critical'
    }
  },
  template: "<p>Server Status: {{ status }} (<button @click='buttonChange'>Change</button>)</p>",
  methods: {
    buttonChange: function(){
      this.status = ' Normal';
    }
  },
};

let cmp2 = {
  data: function () {
    return {
      status: 'maoe'
    }
  },
  template: "<p>Server Status: {{ status }} (<button @click='buttonChange'>Change</button>)</p>",
  methods: {
    buttonChange: function(){
      this.status = ' Normal';
    }
  },
};
2

new Vue({
  el: '#app',
  components:{
    'my-cmp': cmp
  }
});

new Vue({
  el: '#app2',
  components:{
    'my-cmp': cmp2
  }
});