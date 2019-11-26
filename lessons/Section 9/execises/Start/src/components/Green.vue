<template>
  <div>
    <slot name="title"><h1 style="color: green">GREEN</h1></slot>
    <slot name="content">green</slot>
  </div>
</template>

<script>
</script>

<style scoped>
div {
  border: 1px solid green;
  background-color: lightgreen;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>