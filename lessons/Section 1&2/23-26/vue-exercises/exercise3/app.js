new Vue({
    el: '#exercise',
    data: {
        value: 0,
        result: 'not there yet',

    },
    watch: {
        result: function () {
            let vm = this;
            if (vm.value === 0) { // if this.value is already cleared and did not meet the condition to be clear wont be cleared at all.
                return;
            } else {
                setTimeout(function () {
                    vm.value = 0;
                }, 2000)
            }
        }
    }
});