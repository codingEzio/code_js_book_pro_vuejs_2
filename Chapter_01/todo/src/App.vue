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

      <div class="row" v-for="t in tasks" v-bind:key="t.action">
        <div class="col">{{t.action}}</div>
        <div class="col-2">
          <input type="checkbox" v-model="t.done" class="form-check-input">
          {{t.done}}
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
      ]
    };
  }
};
</script>
