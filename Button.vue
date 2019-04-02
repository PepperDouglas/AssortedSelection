<template>
  <button
    :id="id"
    type="submit"
    class="square"
  >
    {{ value }}
  </button>
</template>

<script>
export default({
  name: 'TicTacButton',
  props: {
    id: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: null,
    },
  },
});
</script>

<style>
  .square {
    height: 40px;
    width: 40px;
    background-color: aliceblue;
  }
  .square:focus {
    outline: none;
  }
</style>
