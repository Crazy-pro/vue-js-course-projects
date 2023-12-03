function getRandomValue(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    mayUseHeal() {
      return this.currentRound % 5 !== 0;
    },
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
  },
  methods: {
    startGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.incrementRound();
      const damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.addLogMessage('player', 'attack', damage);
      this.attackPlayer();
    },
    attackPlayer() {
      this.incrementRound();
      const damage = getRandomValue(8, 15);
      this.addLogMessage('monster', 'attack', damage);
      this.playerHealth -= damage;
    },
    specialAttackMonster() {
      this.incrementRound();
      const damage = getRandomValue(10, 25);
      this.addLogMessage('monster', 'attack', damage);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
    healPlayer() {
      this.incrementRound();
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('monster', 'heal', healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    incrementRound() {
      this.currentRound++;
    },
  },
});

app.mount('#game');
