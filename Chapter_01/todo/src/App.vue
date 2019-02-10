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
      <div class="row" v-if="filteredTasks.length == 0">
        <!-- Display a '.. Hooray' message if there's no TODO items -->
        <div class="col text-center">
          <b>Nothing to do. Hooray!</b>
        </div>
      </div>

      <template v-else>
        <!-- Display the TODOs as long as the list is not null -->
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
      </template>

      <div class="row py-2">
        <div class="col">
          <!-- Inputting data -->
          <input v-model="newItemText" class="form-control">
        </div>
        <div class="col-2">
          <!-- Submit inputted data -->
          <button class="btn btn-primary" v-on:click="addNewTodo">Add</button>
        </div>
      </div>

      <div class="row bg-secondary py-2 mt-2 text-white">
        <div class="col text-center">
          <!-- Toggling whether it shows the 'completed tasks' or not -->
          <input type="checkbox" v-model="hideCompleted" class="form-check-input">
          <label class="form-check-label font-weight-bold">Hide completed tasks</label>
        </div>

        <div class="col text-center">
          <button class="btn btn-sm btn-warning" v-on:click="deleteCompleted">Delete Completed</button>
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
      // Now we don't need the placeholder TODO items,
      //  since we've got 'Local Storage' for storing users' data.
      //  Do remember to clear the browser's cache (before ur testing).
      tasks: [],
      hideCompleted: true,
      newItemText: ""
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
  },
  methods: {
    addNewTodo() {
      this.tasks.push({
        action: this.newItemText, // Bind by `v-model="newItemText"`
        done: false
      });

      this.storeData();
      this.newItemText = ""; // Re-init the `input` element once u've submitted
    },
    storeData() {
      // Serializing the data before you saving it
      //  since the 'local storage' is only able to store string values
      localStorage.setItem("todos", JSON.stringify(this.tasks));
    },
    deleteCompleted() {
      this.tasks = this.tasks.filter(t => !t.done);
      this.storeData();
    }
  },

  created() {
    // This method is called when Vue.js creates the element,
    //  aka. you could load the cache before it's presented to the user.
    let data = localStorage.getItem("todos");
    if (data != null) {
      this.tasks = JSON.parse(data);
    }
  }
};
</script>
