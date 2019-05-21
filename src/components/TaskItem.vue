<template>
  <div class="task-item">
    <button @click="toggle(todoItem.id)">完成</button>
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

</style>
