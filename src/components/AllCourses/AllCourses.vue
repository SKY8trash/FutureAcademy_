<script setup>
class Course {
  image
  cardHead
  cardText
  cardData

  constructor(image, cardHead, cardText, cardData) {
    this.image = image
    this.cardHead = cardHead
    this.cardText = cardText
    this.cardData = cardData
  }
}
const courses = [
  new Course(
    "../../../public/mobile.png",
    "Разработка мобильных приложений",
    "Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
    "24 мая",
  ),
  new Course("../../../public/mobile.png", "хыхы", "hahahahaha", "сегодня"),
  new Course("../../../public/mobile.png", "хыхы", "hahahahaha", "сегодня"),
  new Course(
    "../../../public/mobile.png",
    "хыхы",
    "hahahahaha",
    "сегодня",
    true,
  ),
  new Course("../../../public/mobile.png", "хыхы", "hahahahaha", "сегодня"),
  new Course("../../../public/mobile.png", "хыхы", "hahahahaha", "сегодня"),
  new Course(
    "../../../public/mobile.png",
    "хыхы",
    "hahahahaha",
    "сегодня",
    true,
  ),
]
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
