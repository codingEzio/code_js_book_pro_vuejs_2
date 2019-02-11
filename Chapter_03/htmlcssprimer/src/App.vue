<template>
  <div>
    <h4 class="bg-primary text-white text-center p-2">Yorkie's TODO List</h4>
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col font-weight-bold">Task</div>
        <div class="col-2 font-weight-bold">Done</div>
      </div>
      <div class="row" v-for="t in tasks" v-bind:key="t.action">
        <div class="col">{{t.action}}</div>
        <div class="col-2">{{t.done}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tasks: [
        { action: "Buy stuff", done: false },
        { action: "Help people", done: false },
        { action: "Take a shower", done: false },
        { action: "Learn German", done: true }
      ]
    };
  }
};
</script>
