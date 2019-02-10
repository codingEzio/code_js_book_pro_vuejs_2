<!--
  This is the <Component> (higher-level) of Vue.js 
-->

<template>
  <div id="app">
    <h4 class="bg-primary text-white text-center p-2">
      <!-- Text interpolation binding -->
      {{ name }}'s TODO List
    </h4>

    <div class="container-fluid p-4">
      <div class="row">
        <div class="col font-weight-bold">Task</div>
        <div class="col-2 font-weight-bold">Done</div>
      </div>

      <div class="row" v-for="t in filteredTasks" v-bind:key="t.action">
        <div class="col">{{t.action}}</div>
        <div class="col-2 text-center">
          <input type="checkbox" v-model="t.done" class="form-check-input">
        </div>
      </div>

      <div class="row bg-secondary py-2 mt-2 text-white">
        <div class="col text-center">
          <!-- Toggling whether it shows the 'completed tasks' or not -->
          <input type="checkbox" v-model="hideCompleted" class="form-check-input">
          <label class="form-check-label font-weight-bold">Hide completed tasks</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      name: "Yorkie",
      tasks: [
        { action: "Watch Talk-show", done: false },
        { action: "Learn Vue.js", done: true },
        { action: "Rest a while", done: false },
        { action: "Learn German", done: true }
      ],
      hideCompleted: true
    };
  },
  computed: {
    // The data will be poured into here
    //  to computing stuff before being used in 'template'
    filteredTasks() {
      // ?  true   ->  tasks that 'to be done'
      // :  false  ->  all the tasks
      return this.hideCompleted ? this.tasks.filter(t => !t.done) : this.tasks;
    }
  }
};
</script>
