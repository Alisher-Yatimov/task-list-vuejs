import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [],
        headLine: 'Task List',
        mode: 'view'
    },
    mutations: {
        addNewTask(state, payload){
            state.tasks.push(payload);
        },
        transition(state, payload){
            state.mode = payload;
        },
        addDateTask(state, payload){
            state.tasks.date = payload;
        }
    }
});