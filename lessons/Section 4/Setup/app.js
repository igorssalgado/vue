new Vue({
    el: '#app',
    data: {
        show: false,
        turn: 0,
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
            this.show = !this.show; // exibe a vida, a barra de vida e os botoes para o jogo.
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
            
            //your health
            let monsterAttack = this.monsterStrength + Math.floor(Math.random() * 2);
            this.yourHealth = this.yourHealth - monsterAttack;

            //your health bar
            let yourHealthBarNumber = this.yourHealth;
            this.yourHealthBar = (yourHealthBarNumber - monsterAttack) + '%';
        },
        specialAttack: function () {
            // monster health
            let yourAttack = this.yourStrength + Math.floor(Math.random() * this.yourStrength);
            this.monsterHealth = this.monsterHealth - yourAttack;

            //monster health bar
            let healthBarNumber = this.monsterHealth;
            this.monsterHealthBar = (healthBarNumber - yourAttack) + '%';
        },
        heal: function(){
            this.yourHealth += 1;
            this.yourHealthBar = (Number(this.yourHealthBar) + 1) + '%';
        }
    },
    watch: {
        yourHealth: function (value) {
            this.yourHealthBar = (Number(this.yourHealth) + 1) + '%';
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
                // quando morre 'monsterHealth = 0' 
                // esconde a vida, a barra de vida e os botoes para o jogo e volta o botao pra começar.

                console.log('you won');
            }
        }
    }
});
