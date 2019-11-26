<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <label>Quote</label>
        <textarea class="form-control" row="3" v-model="quote" @keydown.enter="createNew"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew(enter) {
      console.log(this.quote)
      if (this.quote !== "") {
        this.$emit("quoteAdded", this.quote);
        this.quote = "...";
      }
    }
  }
};
</script>
// QUANDO APERTA ENTER DUAS VEZES O ESPACO EM BRANCO NAO TA EM BRANCO
<style scoped>
</style>