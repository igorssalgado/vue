new Vue({
    el: '#app',
    data: {
        sum: 0,
        x: 0,
        y: 0,
        count: 0,
        sumTemp: 0
    },
    methods: {
        increase: function (count) {
            this.sumTemp = this.sum;
            this.sum += Number(count);
        },
        consoleCounter: function () {
            console.log('adding: ' + this.count + ' total: ' + this.sum);
            this.count = 0; //clear count and input field
        },
        checkCounter: function (count) {
            if (isNaN(this.sum)) {
                console.log('Count NaN keeping total:' + this.sumTemp);
                this.sum = this.sumTemp;
            }
        }
        // updateCoordinates: function(event){
        //     this.x = event.clientX;
        //     this.y = event.clientY;
        // }
    }
});