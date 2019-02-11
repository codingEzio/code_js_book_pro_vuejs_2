<template>
  <div>
    <!-- 
      Lemme break down the classes (surface only, not internals)
          bg-primary    blue background 
          text-white    white text, apparently
          text-center   horizontally centers its content
          p-2           add 'padding' around the element's content

      More details about 'bg-primary'
          syntax        ELEMENT_TYPE-[STYLE_CONTEXT_TYPE]
          params  
            elem_type   bg|text-primary (bg: background)
            cont_type   for specific use-cases
                        >> primary, secondary, muted
                        >> success, info, warning, 
                        >> danger,
                        >> dark, white

      More details about 'p-2'
          syntax        SPACING_TYPE[EDGE]-SPACE_AMOUNT
          params  
            type        p: padding, m: margin 
            edge        t: top, b: botton, l: left, r: right
            amount      0: no spacing, 1~5: incremental spacing
          examples  
            p-0, p-2    applies to all edges if no 'EDGE' specified 
            pl-2, mr-5  
    -->
    <h4 class="bg-primary text-white text-center p-2">Yorkie's TODO List</h4>

    <!-- 
      The classes (surface only, not internals)
          table           basic styling for tables 
          table-stripped  adds zebra-stripes (white-grey-white-grey-...) 
          table-bordered  borders on all sides
          table-sm        reduce spacing -> more compact 
    -->
    <table class="table table-striped table-bordered table-sm">
      <thead>
        <tr>
          <th>Task</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in tasks" v-bind:key="t.action">
          <td>{{t.action}}</td>
          <td>{{t.done}}</td>
        </tr>
      </tbody>
    </table>

    <!-- 
      The classes (surface only, not internals)
          form-group      grouping those 'text', 'tooltip' as one `div`
          form-control    basic styling (it also got `textarea` and else)
    -->
    <div class="form-group m-2">
      <label>New Item:</label>
      <input v-model="newItemText" class="form-control">
    </div>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="addNewTodo">Add</button>
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
      ],
      newItemText: ""
    };
  },
  methods: {
    addNewTodo() {
      this.tasks.push({
        action: this.newItemText,
        done: false
      });
      this.newItemText = "";
    }
  }
};
</script>
