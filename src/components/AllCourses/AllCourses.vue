<script setup>
import { courses } from "../fakeData"
console.log(courses)
</script>

<template>
  <div class="container">
    <div class="coursesCards">
      <CourseImport
        class="courses"
        v-for="(el, index) in courses"
        :key="index"
        :course="el"
      />
    </div>
  </div>
</template>
<script>
import CourseImport from "../Course_card/Course_card.vue"

export default {
  components: { CourseImport },
  data() {
    return {
      courses: [],
      image: "",
      cardHead: "",
      cardText: "",
      cardData: "",
      discount: false,
    }
  },
}
</script>
<style scoped>
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
