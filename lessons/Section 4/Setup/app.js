new Vue({
    el: '#app',
    data: {
        you: '',
        gameIsRunning: false,
        loser: false,
        loser2: true,
        restart: false,
        yourHealth: 0,
        monsterHealth: 0,
        yourStrength: 50,
        monsterStrength: 2,
        yourColor: '',
        monsterColor: '',
        showHoldButton: false
    },
    methods: {
        newGame: function () {
            let vm = this;

            vm.restart = false;
            vm.gameIsRunning = true; // exibe a vida, a barra de vida e os botoes para o jogo.
            vm.monsterHealth = 100;
            vm.yourHealth = 100;
            vm.yourColor = '';
            vm.monsterColor = '';
        },
        attack: function () {
            let vm = this;
            // monster health
            let yourAttack = vm.calculateDamage(5, 10);
            vm.monsterHealth = vm.monsterHealth - yourAttack;

            // console.log('your attack >>> ' + yourAttack)
            vm.monsterAttack(yourAttack)
        },
        specialAttack: function () {
            let vm = this;
            // monster health
            let yourAttack = vm.calculateDamage(10, 20);
            vm.monsterHealth = vm.monsterHealth - yourAttack;

            // console.log('your attack >>> ' + yourAttack)
            vm.monsterAttack(yourAttack)
        },
        heal: function () {
            let vm = this;
            let heal = 10;
            if (vm.yourHealth < 100) {
                if (vm.yourHealth >= 90) {
                    vm.yourHealth = 100
                } else {
                    vm.yourHealth += 10;
                }
                setTimeout(() => {
                    vm.monsterAttack()
                }, 1000);
            }
        },
        giveUp: function () {
            let vm = this;
            vm.gameIsRunning = false;
            vm.loser = true;
        },
        monsterAttack: function (attack) {
            let vm = this;
           //  console.log('Monster attack')
            //your health
            let monsterAttack = !attack ? vm.calculateDamage(5, 10) : attack;
            vm.yourHealth = Math.floor(vm.yourHealth - monsterAttack);

           //  console.log('monster attack >>> ' + monsterAttack)
        },
        calculateDamage: function (min, max) {
            let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            console.log('damage: ' + damage)
            return damage;
        }
    },
    computed: {

    },
    watch: {
        yourHealth: function (value) {
            let vm = this;
            if (vm.yourHealth <= 0) {
                vm.yourHealth = 'YOU ARE DEAD';
                vm.yourColor = 'red'

                vm.gameIsRunning = !vm.gameIsRunning;
                // quando morre 'yourHealth = 0' 
                // esconde a vida, a barra de vida e os botoes para o jogo e volta o botao pra começar.
                vm.restart = true;
                alert('you died');
            }
        },
        monsterHealth: function (value) {
            let vm = this;
            if (vm.monsterHealth <= 0) {
                vm.monsterHealth = 'DEAD';
                vm.monsterColor = 'red'

                vm.gameIsRunning = !vm.gameIsRunning;
                // quando morre 'monsterHealth = 0' 
                // esconde a vida, a barra de vida e os botoes para o jogo e volta o botao pra começar.
                vm.restart = true;
                alert('you won');
            }
        }
    }
});
