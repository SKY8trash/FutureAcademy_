<script setup>
// import { useRoute } from "vue-router"

// const route = useRoute()
import { courses } from "../fakeData"
</script>

<template>
  <router-link :to="`/course/${course.id}`" id="course">
    <div class="card">
      <div class="cardH">Программа</div>
      <div class="cardHeader">
        <div><img :src="course.image" alt="" /></div>
        <div class="cardHead">{{ course.cardHead }}</div>
      </div>
      <div class="cardText">
        {{ course.cardText }}
      </div>
      <div class="cardData">{{ course.cardData }}</div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
      discount: false,
    },
  },
}
</script>
<style scoped>
@import "Course_card.scss";
</style>
