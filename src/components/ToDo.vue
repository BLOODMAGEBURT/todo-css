<template>
    <div class="todo">
      <h2>welcome todo {{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      msg: 'hello xuBo'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  * {
    /*background-color: rgba(0, 0, 0, 0.1);*/
  }
</style>
