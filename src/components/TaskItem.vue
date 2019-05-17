<template>
  <div class="task-item">
    <button @click="toggle(item.id)">完成</button>
    {{item.title}}--{{ item.id }}
    <button @click="remove(item.id)">删除</button>
    <button @click="setCurrent(item)">更新</button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['item']
}
</script>

<style scoped>

</style>
