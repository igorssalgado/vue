new Vue({
    el: '#app',
    data: {
        you: '',
        show: false,
        turn: 0,
        yourTurn: false,
        monsterTurn: false,
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
            console.log('oi')
            this.show = !this.show; // exibe a vida, a barra de vida e os botoes para o jogo.
            this.monsterHealth = 100;
            this.yourHealth = 100;
            this.yourHealthBar = 100 + '%';
            this.monsterHealthBar = 100 + '%';
            this.yourDeadColor = '';
            this.monsterDeadColor = '';
            this.monsterTurn = true;
            this.turn += 1;
        },
        attack: function () {
            this.turn += 1;

            // monster health
            let yourAttack = this.yourStrength;
            this.monsterHealth = this.monsterHealth - yourAttack;

            //monster health bar
            let monsterHealthBarNumber = this.monsterHealthBar.replace('%', '');
            this.monsterHealthBar = (Number(monsterHealthBarNumber) - yourAttack) + '%';
        },
        specialAttack: function () {
            // monster health
            let yourAttack = this.yourStrength + Math.floor(Math.random() * this.yourStrength);
            this.monsterHealth = this.monsterHealth - yourAttack;

            //monster health bar
            let healthBarNumber = this.monsterHealth;
            this.monsterHealthBar = (healthBarNumber - yourAttack) + '%';
        },
        heal: function () {
            this.yourHealth += 1;
            this.yourHealthBar = (Number(this.yourHealthBar) + 1) + '%';
        },
        monsterAttack: function () {
            let vm = this;
            console.log('Monster attack')
            setTimeout(function () {
                //your health
                let monsterAttack = vm.monsterStrength + Math.floor(Math.random() * 2);
                vm.yourHealth = vm.yourHealth - monsterAttack;
                
                //your health bar
                let yourHealthBarNumber = vm.yourHealth;
                vm.yourHealthBar = (yourHealthBarNumber - monsterAttack) + '%';
            }, 1000);
        }
    },
    computed: {

    },
    watch: {
        turn: function (value) {
            let vm = this;
            vm.monsterTurn = !vm.monsterTurn;
            vm.yourTurn = !vm.yourTurn;
            vm.monsterAttack();
        },
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
