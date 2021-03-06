
### Preparation
- Basics
    1. [*Git*](https://git-scm.com/downloads)
    2. [*Node.js*](https://nodejs.org/en/download/)
    3. [*Google Chrome*](https://www.google.com/chrome/)
- Third-Party
    - *vue-cli* : ```sudo npm install --global @vue/cli```
    - *vue-devtools*: [Vue.js Devtools (Chrome Extension)](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

### Create ur first project
- Follow this 
    1. ```vue create todo --default``` 
    2. ```cd todo && npm run serve```
    3. ```npm install boostrap@4.0.0```
- Issues
    - For *vue-cli*
        - You might need ```sudo``` to run the cmds above :P
    - For ```npm install ..```
        - You could *ignore the warnings* while installing ```boostrap@4.0.0```.
    - For *Bootstrap*
        - I'll just use the plain one, not any of the frameworks down below.
    - For checking **Local Storage**
        - Right click :: ```Inspect```,
        - then ```Application``` -> ```Storage``` -> ```Local Storage```

----------

### Data binding
- One way: *binding a JS var to the DOM*
- Two way: *binding a JS var to the DOM & also being bound from the DOM back to JS*

----------

### Choices 
- *CSS Framework*
    - [**Muse-UI**](https://muse-ui.org/#/en-US/) 
    - [Vuetify.js](https://vuetifyjs.com/en/getting-started/quick-start)
    - [BootstrapVue](https://bootstrap-vue.js.org/docs)

### References
- [Exploring Vue.js: Reactive Two-Way Data Binding](https://medium.com/js-dojo/exploring-vue-js-reactive-two-way-data-binding-da533d0c4554)