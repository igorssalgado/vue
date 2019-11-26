<template>
  <div>
    <h3>New quote</h3>
    <button @click="counter++">Increase!</button>
    {{ counter }}
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            counter: 0
        }
    },
    destroyed(){
        console.log('Destroyed!');
    },
    deactivated(){
        console.log('Deactivated');
    },
    activated(){
        console.log('activated');
    }
};
</script>

<style scoped>

</style>