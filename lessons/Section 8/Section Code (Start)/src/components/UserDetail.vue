<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }} - {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetN()">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'String',
    },
    resetN: Function,
    userAge: Number
  },
  methods: {
    switchName () {
      return this.name.split('').reverse().join('');
    },
    resetName () {
      this.name = 'Igor';
      this.$emit('nameWasReseted', this.name)
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
