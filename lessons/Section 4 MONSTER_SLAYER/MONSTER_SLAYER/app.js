new Vue({
    el: '#app',
    data: {
        you: '',
        gameIsRunning: false,
        loser: false,
        restart: false,
        yourHealth: 0,
        monsterHealth: 0,
        yourStrength: 50,
        monsterStrength: 2,
        yourColor: '',
        monsterColor: '',
        showHoldButton: false,
        turns: [],
        healButtonDisabled: true,
        specialAttackButtonDisabled: true,
        timesAttack: 0,
        disabledTimes: 10
    },
    methods: {
        newGame: function () {
            let vm = this;
            vm.isPlayer = 'newgame'
            vm.turns = []
            vm.loser = false;
            vm.restart = false;
            vm.gameIsRunning = true; // exibe a vida, a barra de vida e os botoes para o jogo.
            vm.monsterHealth = 100;
            vm.yourHealth = 100;
            vm.yourColor = '';
            vm.monsterColor = '';
            vm.you = vm.you.toUpperCase();
            vm.specialAttackButtonDisabled = true;
            if (vm.you == '') {
                vm.you = 'Player Unknow'
            }
        },
        attack: function () {
            let vm = this;
            // monster health
            let yourAttack = vm.calculateDamage(5, 10);
            vm.monsterHealth = vm.monsterHealth - yourAttack;

            this.turns.unshift({
                isPlayer: true,
                text: vm.you + ' hits monster for ' + yourAttack
            });
            // console.log('your attack >>> ' + yourAttack)
            vm.monsterAttack(yourAttack + 5)
            vm.timesAttack += 1;
            if(vm.timesAttack > vm.disabledTimes){
                vm.specialAttackButtonDisabled = false;
                vm.timesAttack = 0;
                vm.disabledTimes +=3 
            }
        },
        specialAttack: function () {
            let vm = this;
            // monster health
            let yourAttack = vm.calculateDamage(10, 20);
            vm.monsterHealth = vm.monsterHealth - yourAttack;

            // console.log('your attack >>> ' + yourAttack)
            // vm.monsterAttack(yourAttack)
            this.turns.unshift({
                isPlayer: true,
                text: vm.you + ' hits monster HARD for ' + yourAttack
            });

            vm.specialAttackButtonDisabled = true;
        },
        heal: function () {
            let vm = this;
            let heal = 8;
            if (vm.yourHealth == 100) {
                heal = 0;
                this.turns.unshift({
                    isPlayer: true,
                    text: vm.you + ' health is FULL'
                });
            }

            if (vm.yourHealth < 100) {
                if (vm.yourHealth >= 90) {
                    let previousHealth = vm.yourHealth
                    vm.yourHealth = 100
                    heal = previousHealth - 100
                } else {
                    vm.yourHealth += heal;
                }
                setTimeout(() => {
                    vm.monsterAttack()
                }, 1000);
                this.turns.unshift({
                    isPlayer: true,
                    text: vm.you + ' healed for ' + Math.abs(heal)
                });
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
            let monsterAttack = !attack ? vm.calculateDamage(1, 10) : vm.calculateDamage(1, attack);
            vm.yourHealth = Math.floor(vm.yourHealth - monsterAttack);

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits ' + vm.you + ' for ' + monsterAttack
            });

            //  console.log('monster attack >>> ' + monsterAttack)
        },
        calculateDamage: function (min, max) {
            let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            return damage;
        }
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
            }

            if (vm.yourHealth < 100) {
                vm.healButtonDisabled = false;
            } else if (vm.yourHealth == 100) {
                vm.healButtonDisabled = true;
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
            }
        }
    }
});
