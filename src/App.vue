<template>
  <div id="app">
    <TaskListHeader />  
    <component :is="componentName"></component>
  </div>
</template>

<script>
import TaskListHeader from './components/TaskListHeader'
import TaskCard from './components/TaskCard'
import AddTaskForm from './components/AddTaskForm'

export default {
  name: 'app',
  components: {
    TaskListHeader,
    TaskCard,
    AddTaskForm
  },
  computed:{
    componentName(){
      return this.$store.state.mode == 'view' ? 'TaskCard' : 'AddTaskForm';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
