<template>
  <b-card class="shadow my-1">
    <b-card-text>
      <b-row>
        <b-col cols="10">
          {{ text }}
        </b-col>
        <b-col>
          <b-btn id="delete-btn" @click="deleteTodo">Delete</b-btn>
        </b-col>
      </b-row>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ["text", "id"],
  methods: {
    deleteTodo() {
      this.$emit("deleteTodo", this.id)
    },
  },
}
</script>

<style scoped>
.card-text {
  color: #203E5D;
}
#delete-btn {
    background-color: #BC5445 !important;
}
</style>
