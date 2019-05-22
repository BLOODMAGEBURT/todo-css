<template>
  <div class="task-item">
    <div @click="toggle(todoItem.id)" :class="[ todoItem.completed ? 'completed' : 'toggle-complete' ]"></div>
    {{todoItem.title}}--{{ todoItem.id }}
    <button @click="remove(todoItem.id)">删除</button>
    <button @click="setCurrent(todoItem)">更新</button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['todoItem'],
  methods: {
    remove (id) {
      this.$emit('remove', id)
    },
    toggle (id) {
      this.$emit('toggle', id)
    },
    setCurrent (item) {
      this.$emit('setCurrent', item)
    }
  }
}
</script>

<style scoped>
  .toggle-complete, .completed {
    width: 30px;
    height: 30px;
    border: 1px solid;
    border-radius: 50%;
    display: inline-block;
  }
  .toggle-complete {
    border-color: #46a9e4;
    background: #1ac7ff;
  }
  .toggle-complete:hover {
    background: #3e9bd2;
    border-color: #3587b7;
  }
  .completed {
    border-color: #bbb;
    background: #ccc;
  }
  .completed:hover {
    background: #ddd;
  }
</style>
