new Vue({
    el: '#exercise',
    data: {
        value: 0,
        result: 'not there yet',
        x: false
    },
    watch: {
        result: function () {
            let vm = this;
            if (this.x == false) {
                console.log(x);
                setTimeout(function () {
                    vm.value = 0;
                    vm.x = true;
                }, 5000)
            }
        }
    }
});