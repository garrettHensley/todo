<template>
  <div>
    <div class="text-center mb-3">
      <b-button id="show-btn" @click="showModal">Add Todo Item</b-button>
    </div>
    <b-modal ref="modal-1" hide-footer>
      <p>Please enter a todo</p>
      <b-form-input label="Todo Text" v-model="todoText"></b-form-input>
      <b-row class="justify-content-between mt-3">
        <b-col cols="4" class="text-center">
            <b-button @click="submitTodo"> Add </b-button>
        </b-col>
        <b-col cols="4" class="text-center"
          ><b-button
            @click="hideModal"
            class="cancel-btn"
          >
            Cancel
          </b-button></b-col
        >
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
    }
  },
  methods: {
    // this.$refs['modal-1']
    hideModal() {
      this.$refs["modal-1"].hide()
    },
    showModal() {
      this.$refs["modal-1"].show()
    },
    submitTodo() {
      if (this.todoText) {
        this.$emit("submit", this.todoText)
        this.todoText = ""
        this.$refs["modal-1"].hide()
      }
    },
  },
}
</script>
