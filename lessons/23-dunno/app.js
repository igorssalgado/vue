new Vue({
    el: '#app',
    data: {
        name: 'Igor',
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output: function(){
            console.log('computed');
            return this.counter % 3 == 0 ? 'Primo!' : 'Nao é primo!';
        }
    },
    methods: {
        result(){
            console.log('method');
            return this.counter % 3 == 0 ? 'Primo!' : 'Nao é primo!';
        }
    },
});