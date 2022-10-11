<template>
  <b-container>
    <TodoModal @submit="submitTodo" />
    <b-card-group deck>
      <todo-card v-for="todo in todos" :key="todo.id" :text="todo.text" :id="todo.id" @deleteTodo="deleteTodo" />
    </b-card-group>
  </b-container>
</template>

<script>
import axios from "axios"
import TodoCard from "./TodoCard.vue"
import TodoModal from "./TodoModal.vue"

export default {
  name: "HelloWorld",
  components: {
    TodoCard,
    TodoModal,
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    getTodos() {
      axios.get("http://localhost:3001/users").then((res) => {
      this.todos = res.data
    })
    },
    submitTodo(payload) {
      console.log(payload)
      axios.post("http://localhost:3001/users", {
        todo: {
          text: payload,
        },
      }).then((res) => {
        console.log(res)
        this.getTodos()
      })
    },
    deleteTodo(payload) {
      console.log(payload)
      axios.delete(`http://localhost:3001/users/${payload}`).then((res) => {
        console.log(res)
        this.getTodos()
      })
    }
  },
  mounted() {
    axios.get("http://localhost:3001/users").then((res) => {
      this.todos = res.data
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
