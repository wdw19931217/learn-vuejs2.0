<template>
	<form v-on:submit.prevent="addTodo(newTodo)">
							<div class="form-group">
								<input type="text" name="" v-model="newTodo.title" class="form-control" placeholder="Add a new todo">
							</div>
							<div class="form-group">
								<button class="btn btn-success" type="submit">Add Todo</button>
							</div>
	</form>
</template>

<script>
	export default{
		props: ['todos'],
		data(){
			return {
				newTodo:{id:20,title:'',completed:false}
			}
		},
		methods: {
			addTodo(newTodo) {
				this.axios.post('http://laravel-package.dev/api/todo/create',{title: this.newTodo.title}).then(response => {
					console.log(response.data)
					this.todos.push(newTodo)
				})
				this.newTodo = {id:20,title:'',completed:false}
			}
		}
	}
</script>