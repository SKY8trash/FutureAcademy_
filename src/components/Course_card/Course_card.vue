<template>
  <a href="/course" @click="Toggle(Event), (lead = data)">
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
  </a>
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
<style>
@import "Course_card.scss";
</style>
