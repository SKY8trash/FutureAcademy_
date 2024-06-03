<script setup>
import axios from "axios"
import { ref } from "vue"
import Course_card from "../Course_card/Course_card.vue"

const courses = ref(
  (await axios.get(`http://26.232.67.81:3308/api/application`)).data,
)
</script>

<template>
  <div class="container">
    <div class="coursesCards">
      <Course_card
        class="courses"
        v-for="(el, index) in courses"
        :key="index"
        :course="el"
      />
    </div>
  </div>
</template>

<style>
.courses {
  margin: 0 5px;
}
.coursesCards {
  gap: 20;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
