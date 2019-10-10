new Vue({
    el: '#app',
    data: {
        sum: 0,
        x: 0,
        y: 0,
        count: 0,
        print: ''
    },
    methods: {
        increase: function(count){
            this.sum += Number(count);
        },
        printCounter: function(){
            console.log('adding: ' + this.count + ' total: ' + this.sum)
            return print;
        }
        // updateCoordinates: function(event){
        //     this.x = event.clientX;
        //     this.y = event.clientY;
        // }
    }
});