<template>
  <div class="home">
    <newGame/>
    <div class="d-flex justify-content-around align-items-center">
      <div>
        <displayScore>
          <div class="player">
            <p>PLAYER 1</p>
          </div>

          <div class="score">
            <p>{{ totalScore.player1 }}</p>
          </div>
        </displayScore>
      </div>

      <div>
        <dice v-bind:diceScore="diceScore"/>
      </div>

      <div>
        <displayScore>
          <div class="player">
            <p>PLAYER 2</p>
          </div>

          <div class="score">
            <p>{{ totalScore.player2 }}</p>
          </div>
        </displayScore>
      </div>
    </div>

    <div class="d-flex justify-content-around align-items-center m-5">
      <div>
        <current-score>
          <div class="player">
            <p>PLAYER 1</p>
          </div>

          <div class="score">
            <p>{{ this.holdScore.player1 }}</p>
          </div>
        </current-score>
      </div>

      <div>
        <div class="roll-dice">
          <RollDice v-on:rollDice="rollDice"/>
        </div>

        <div class="hold-score">
          <hold-score>
            <div>
              <button class="border-0" v-on:click="holdScoreF()">
                HOLD SCORE
              </button>
            </div>
          </hold-score>
        </div>
      </div>

      <div>
        <current-score>
          <div class="player">
            <p>PLAYER 2</p>
          </div>

          <div class="score">
            <p>{{ this.holdScore.player2 }}</p>
          </div>
        </current-score>
      </div>
    </div>
  </div>
</template>

<script>

import newGame from "./NewGame";
import displayScore from "./DisplayScore";
import dice from "./Dice";
import currentScore from "./CurrentScore";
import RollDice from "./RollDice";
import holdScore from "./HoldScore";

export default {
  name: "Home",
  data: function () {
    return {
      holdScore: {
        player1: 0,
        player2: 0,
        flag: 1
      },
      totalScore: {
        player1: 0,
        player2: 0,
      },
      diceScore: {
        dice1: 0,
        dice2: 0
      }
    }
  },
  methods: {
    rollDice(diceScore) {
      this.diceScore = diceScore;
      let sum = diceScore.dice1 + diceScore.dice2;

      if (diceScore.dice1 === 1 || diceScore.dice1 === 2) {
        if (this.holdScore.flag === 1) {
          this.$set(this.totalScore, 'player1', 0);
          this.holdScore.flag = 2;
        } else {
          this.$set(this.totalScore, 'player2', 0);
          this.holdScore.flag = 1;
        }
        // this.diceScore.dice1 = 0;
        // this.diceScore.dice2 = 0;
      }

      if (this.holdScore.flag === 1) {
        this.$set(this.holdScore, 'player1', sum);
      } else {
        this.$set(this.holdScore, 'player2', sum);
      }

      console.log(diceScore.dice1, diceScore.dice2);
    },
    holdScoreF() {
      if (this.diceScore.dice1 + this.diceScore.dice2 === 0) {
        alert("please click button roll dice")
      }

      if (this.holdScore.flag === 1) {
        this.$set(this.totalScore, 'player1', this.totalScore.player1 + this.holdScore.player1);
        this.holdScore.flag = 2;
      } else {
        this.$set(this.totalScore, 'player2', this.totalScore.player2 + this.holdScore.player2);
        this.holdScore.flag = 1;
      }
    }
  },
  computed: {},
  components: {
    newGame,
    displayScore,
    dice,
    currentScore,
    RollDice,
    holdScore
  }
}
</script>

<style>
.home {
  display: inline-block;
  width: 1000px;
  text-align: center;
  color: #42b983;
  background-color: white;
}


.roll-dice {
  margin-bottom: 30px;
}
</style>
