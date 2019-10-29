new Vue({
    el: '#app',
    data: {
        show: false,
        yourHealth: 0,
        monsterHealth: 0,
        yourHealthBar: 0,
        monsterHealthBar: 0,
        yourStrength: 3,
        monsterStrength: 2,
        yourDeadColor: '',
        monsterDeadColor: ''
    },
    methods: {
        newGame: function () {
            this.show = !this.show; // quando clica start exibe a vida, a barra de vida e os botoes para o jogo.
            this.monsterHealth = 100;
            this.yourHealth = 100;
            this.yourHealthBar = 100 + '%';
            this.monsterHealthBar = 100 + '%';
            this.yourDeadColor = '';
            this.monsterDeadColor = '';
        },
        attack: function () {
            // monster health
            let yourAttack = this.yourStrength;
            this.monsterHealth = this.monsterHealth - yourAttack;

            //monster health bar
            let monsterHealthBarNumber = this.monsterHealthBar.replace('%', '');
            this.monsterHealthBar = (Number(monsterHealthBarNumber) - yourAttack) + '%';
            // console.log(yourAttack);

            //your health
            let monsterAttack = this.monsterStrength + Math.floor(Math.random() * 2);
            this.yourHealth = this.yourHealth - monsterAttack;
            console.log(monsterAttack)

            //your health bar
            let yourHealthBarNumber = this.yourHealthBar.replace('%', '');
            this.yourHealthBar = (Number(yourHealthBarNumber) - monsterAttack) + '%';
        },
        specialAttack: function () {
            // monster health
            let yourAttack = this.yourStrength + Math.floor(Math.random() * this.yourStrength);
            this.monsterHealth = this.monsterHealth - yourAttack;

            //monster health bar
            let healthBarNumber = this.monsterHealthBar.replace('%', '');
            this.monsterHealthBar = (Number(healthBarNumber) - yourAttack) + '%';
            // console.log(yourAttack);
        }
    },
    watch: {
        yourHealth: function (value) {
            if (this.yourHealth <= 0) {
                this.yourHealth = 'YOU ARE DEAD';
                this.yourHealthBar = 0;
                this.yourDeadColor = 'red'
                
                this.show = !this.show; 
                // quando morre 'yourHealth = 0' 
                // esconde a vida, a barra de vida e os botoes para o jogo e volta o botao pra começar.
                
                console.log('you died');
            }
        },
        monsterHealth: function (value) {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 'DEAD';
                this.monsterHealthBar = 0;
                this.monsterDeadColor = 'red'
                this.show = !this.show;
                console.log('you won');
            }
        }
    }
});



// if(this.yourHealth == 0){
//     console.log('you died')
// } 
// if(this.monsterHealth <= 0){
//     console.log('you won')
// } 
