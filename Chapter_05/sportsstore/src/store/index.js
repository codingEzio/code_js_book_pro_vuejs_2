// The package 'Vuex` is used to 
//  create a data store that is used to share data throughtout the app.

// We could use other package to manage data
//  but since this one is dev_ed by the core Vue.js team, well.. you know.

import Vue from "vue";
import Vuex from "vuex";

// The 'vuex' is dist as a Vue.js plugin.
//  & the plugin must be enabled using the syntax down below.
Vue.use(Vuex);

const testData = [];

for (let i = 1; i <= 10; i++) {
    testData.push({
        id: i,
        name: `Product #${i}`,
        category: `Category ${i%3}`,
        description: `This is Product #${i}`,
        price: i * 50
    })
}

// A data store is created by `new Vuex.Store`
export default new Vuex.Store({
    strict: true,
    state: {
        products: testData
    }
})