<template>
    <div class="todo">
      <p>welcome todo</p>
      <div class="todo-item">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="defaultUnchecked" :checked="checked">
          <label class="custom-control-label" for="defaultUnchecked"/>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      checked: true,
      input: ''
    }
  },
  methods: {
    delItem () {
      console.log('del_item')
    }
  }
}
</script>

<style scoped>
  .todo {
    max-width: 800px;
    margin: 0 auto;
  }
  .todo-item {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  #defaultUnchecked{
    width: 60px;
    height: 30px;
  }
</style>
