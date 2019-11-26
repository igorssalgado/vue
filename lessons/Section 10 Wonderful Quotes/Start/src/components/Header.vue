<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      {{!quoteCount ? quoteCount = 0 : quoteCount }} / {{maxQuotes}}
      <div class="progress">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{width: (quoteCount/maxQuotes) * 100 + '%'}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quoteCount", "maxQuotes"],
  meothods: {
    noQuotes(){
      return 'No quotes!'
    },
    progress(){
      return quoteCount + ' / ' + maxQuotes
    }
  }
};
</script>
