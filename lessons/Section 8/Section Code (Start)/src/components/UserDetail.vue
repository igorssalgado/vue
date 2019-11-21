<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }} - {{ switchName() }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'String'
    }
  },
  methods: {
    switchName () {
      return this.name.split('').reverse().join('');
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
