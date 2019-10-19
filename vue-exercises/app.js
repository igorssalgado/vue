new Vue({
    el: '#exercise',
    data: {
        your_name: "Ígor Salgado",
        age: "27",
        ageTimesThree: "0",
        random: "0",
        imgURL: "https://img.cinemablend.com/filter:scale/quill/e/b/c/0/e/6/ebc0e6a10a484b7226d2586564acd568f6a9abb0.jpg?mw=600"
    },
    methods: {
        ageByThree: function(age){
            this.ageTimesThree = this.age * 3;
        },
        randomFloat: function(){
            this.random = Math.random();
        }
    },
    created: function (){ // it runs when page loads!
        this.randomFloat();
        this.ageByThree();
    }
});