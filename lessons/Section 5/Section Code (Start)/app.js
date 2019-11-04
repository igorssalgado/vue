let vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$refs.heading.innerText = "maoe"

setTimeout(() => {
  vm1.title = 'Changed by timer'
}, 2000);


let vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second VueJS Instance',
  },
  methods:{
    onChange: function(){
      vm1.title= 'Changed'
    }
  }
});

