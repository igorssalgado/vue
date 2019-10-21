new Vue({
    el: '#app',
    data: {
        name: 'Igor',
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output: function () {
            // console.log('computed');
            return this.secondCounter % 3 == 0 ? 'Primo!' : 'Nao é primo!';
        }
    },
    watch: {
        counter: function (value) {
            var vm = this;
            console.log('maoe');
            setTimeout(function(){
                vm.counter = 0;
                console.log('maoe2');
            }, 2000)
        }
    },
    methods: {
        result () {
            // console.log('method');
            return this.counter % 3 == 0 ? 'Primo!' : 'Nao é primo!';
        }
    },
});