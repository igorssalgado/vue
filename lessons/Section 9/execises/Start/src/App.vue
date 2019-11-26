<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
        <hr />

        <component :is="selectedComponent">
        </component>
        <hr />

        <!-- <app-blue>
          <h1 slot="title" style="color: blue">IT IS BLUE</h1>
          <p slot="content">WOW IT IS BLUE INDEED</p>
        </app-blue>
        <app-green>
          <h1 slot="title" style="color: green">IT IS GREEN</h1>
          <p slot="content">WOW IT IS GREEN INDEED</p>
        </app-green>
        <app-red>
          <h1 slot="title" style="color: red">IT IS RED</h1>
          <p slot="content">WOW IT IS RED INDEED</p>
        </app-red> -->
        
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function() {
    return {
      selectedComponent: "appBlue"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
