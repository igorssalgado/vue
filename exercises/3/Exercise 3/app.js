new Vue({
    el: '#exercise',
    data: {
        value: 0,
        seconds: 2,
        timerInProgress: 0
    },
    computed: {
        result: function () {
            if (this.value > 5) {
                this.timerInProgress = 1;
                console.log(this.timerInProgress);
                return 'done';
            }
        }
    },
    watch: {
        result: function () {
            let vm = this;
            if (vm.timerInProgress == 1) {
                setTimeout(function () {
                    vm.value = 0;
                    vm.seconds = 2;
                    vm.timerInProgress = 0;
                    document.getElementById("sec").value = 2;
                    console.log(vm.seconds);
                }, vm.seconds * 1000)
            }
        }
    },
    methods: {
        timer: function () {
            this.seconds = document.getElementById("sec").value;
        }
    }
});