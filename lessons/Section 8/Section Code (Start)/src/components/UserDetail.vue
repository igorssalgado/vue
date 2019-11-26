<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name: {{ myName }} > {{ switchName() }}</p>
    <p>Age: {{ userAge }}</p>
    <button @click="resetName()">Reset Name</button>
    <button @click="resetFn()">Reset Name again</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    myName: {
      type: String
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "Igor";
      this.$emit("nameWasReset", this.myName);
    }
  },
  created() {
    eventBus.$on('userAgeWasEdited', (data) => {
        this.userAge = data;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
