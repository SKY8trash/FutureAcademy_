<template>
  <router-link :to="`/course/${course.id}`" id="course">
    <div class="card">
      <div class="cardH">{{ course.name_programm }}</div>
      <div class="cardHeader">
        <div><img src="../../../public/ +{{course.avatar}}" alt="" /></div>
        <div class="cardHead">{{ course.name_application }}</div>
      </div>
      <div class="cardText">
        {{ course.description }}
      </div>
      <div class="cardData">{{ course.time }}</div>
    </div>
  </router-link>
</template>
<script setup>
const { course } = defineProps({
  course: {
    type: Object,
    required: true,
  },
})
</script>
<style>
@import "Course_card.scss";
</style>
