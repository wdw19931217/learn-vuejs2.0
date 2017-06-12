<template>
<div id="todos">
<ul class="list-group">
	<li class="list-group-item"
		v-bind:class="{ 'completed' : todo.completed}"
		v-for="(todo, index) in todos">
		<router-link :to="{ name: 'todo', params: { id: todo.id }}">{{ todo.title }}</router-link>
		<button class="btn btn-xs pull-right"
			v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
			v-on:click="toggleCompletion(todo)">{{ todo.completed ? 'undo' : 'completed' }}
		</button>
		<button class="btn btn-warning btn-xs pull-right" v-on:click="deleteTodo(index, todo)">Delete</button>
	</li>
	</ul>
	<todo-form></todo-form>
	</div>
</template>
<style>
	.completed {
			color: #5cb85c;
			text-decoration: line-through;
		}
</style>
<script>
	import TodoForm from './TodoForm'
	export default{
		name: 'todos',
		computed: {
		  todos () {
		      return this.$store.state.todos
		  }
		},
		methods: {
			deleteTodo(index, todo) {
				this.axios.delete('http://laravel-package.dev/api/todo/'+ todo.id +'/delete').then( response => {
						console.log(response.data)
						this.todos.splice(index,1)
					} )
		},
			toggleCompletion(todo) {
				this.axios.patch('http://laravel-package.dev/api/todo/'+ todo.id +'/completed').then( response => {
					console.log(response.data)
					todo.completed = ! todo.completed
				} )
			}
		},
		components: {
			TodoForm
		}
	}
</script>