<template>
  <div>
    <slot name="title"><h1 style="color: red">RED</h1></slot>
    <slot name="content">red</slot>
  </div>
</template>

<script>
</script>

<style scoped>
div {
  border: 1px solid red;
  background-color: lightcoral;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>