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
    <div class="container-fluid p-4">
      <!-- The 1st row for header -->
      <div class="row">
        <div class="col font-weight-bold">Task</div>
        <div class="col-2 font-weight-bold">Done</div>
      </div>
      <!-- The rest of them for the data -->
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
