<template>
  <div >
    <slot name="title"><h1 style="color: blue">BLUE</h1></slot>
    <slot name="content">blue</slot>
  </div>
</template>

<script>
</script>

<style scoped>
div {
  border: 1px solid blue;
  background-color: lightblue;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}

</style>