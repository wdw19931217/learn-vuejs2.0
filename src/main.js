// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import VueRouter from 'vue-router'
import Todos from './components/Todos'
import Todo from './components/Todo'


Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
	{ path: '/', component: Todos },
	{ path: '/todo/:id', component: Todo, name: 'todo'}
]

const router = new VueRouter({
	routes // short for routes: routes
})

const store = new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        get_todos_list (state, todos) {
            state.todos = todos
        }
    },
    actions: {
        getTodos(store) {
            Vue.axios.get('http://laravel-package.dev/api/todos').then(response => {
                store.commit('get_todos_list',response.data)
            })
        }
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
    store,
  template: '<App/>',
  components: { App },
  router
})
