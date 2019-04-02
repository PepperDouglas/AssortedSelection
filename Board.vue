<template>
  <div>
    <div class="row">
      <Button id="0" :value="state.history[state.stepNumber].squares[0]"/>
      <Button id="1" :value="state.history[state.stepNumber].squares[1]"/>
      <Button id="2" :value="state.history[state.stepNumber].squares[2]"/>
    </div>
    <div class="row">
      <Button id="3" :value="state.history[state.stepNumber].squares[3]"/>
      <Button id="4" :value="state.history[state.stepNumber].squares[4]"/>
      <Button id="5" :value="state.history[state.stepNumber].squares[5]"/>
    </div>
    <div class="row">
      <Button id="6" :value="state.history[state.stepNumber].squares[6]"/>
      <Button id="7" :value="state.history[state.stepNumber].squares[7]"/>
      <Button id="8" :value="state.history[state.stepNumber].squares[8]"/>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
  props: {
    state: {
      default: null,
    },
  },
};
</script>

<style>
 .row {
  height: 50px;
  width: 140px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
 }
</style>
