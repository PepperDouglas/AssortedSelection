<template>
  <div class="center-content">
    <h1>Tic tac toe!</h1>
    <board id="board" name="Salt" :state="state"/>
    <div id="timeTravel">
      <button id="previous"></button>
      <button id="next"></button>
    </div>
    <div class="winner" v-show="visible">{{ theWinner }}</div>
  </div>
</template>

<script>
import {
  initialState, move, calculateWinner, jumpTo,
}
  from './components/engine';
import Board from './components/Board.vue';

export default {
  components: {
    Board,
  },
  data() {
    return {
      state: initialState(),
      visible: false,
      theWinner: '',
    };
  },
  mounted() {
    console.log(this.state);
    const board = document.querySelector('#board');
    const timeTravel = document.querySelector('#timeTravel');
    const prevBtn = document.querySelector('#previous');
    const nextBtn = document.querySelector('#next');

    prevBtn.innerHTML = 'Prev';
    nextBtn.innerHTML = 'Next';

    timeTravel.addEventListener('click', (e) => {
      if (e.target.id === 'previous') {
        this.state = jumpTo(this.state.stepNumber - 1, this.state);
        console.log(this.state);
      }
      if (e.target.id === 'next') {
        this.state = jumpTo(this.state.stepNumber + 1, this.state);
        console.log(this.state);
      }
    });

    board.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        this.state = move(e.target.id, this.state);
        console.log(this.state);
        if (calculateWinner(this.state.history[this.state.stepNumber].squares) !== null) {
          this.visible = true;
          this.theWinner = `The winner is ${calculateWinner(
            this.state.history[this.state.stepNumber].squares,
          )}!!`;
        }
        if (this.state.history.length === 10
        && calculateWinner(this.state.history[this.state.stepNumber].squares) === null) {
          this.visible = true;
          this.theWinner = 'It\'s a tie!';
        }
      }
    });
  },

};
</script>

<style>
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.winner {
  height: 150px;
  position: absolute;
  top: 85px;
  color: white;
  text-align: center;
  width: 100%;
  background-color: #23232385;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  animation-duration: 2s;
  animation-name: slidein;
  animation-direction: alternate;
}

@keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }
  to {
    margin-left:0%;
    width:100%;
  }
}
</style>
