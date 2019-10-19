new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function(){
                alert('Button Clicked');
            },
            valueToShow: function(){
                this.value = this.value + event.target.value;
            }
        }
    });