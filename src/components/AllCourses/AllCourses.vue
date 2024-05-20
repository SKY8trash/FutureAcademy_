<script setup>
import Course_card from "../Course_card/Course_card.vue"
</script>

<template>
  <ol>
    <li><Course_card /> <Course_card style="padding-left: 20px" /></li>
    <li><Course_card /> <Course_card style="padding-left: 20px" /></li>
  </ol>
</template>

<style>
AllCourses {
  padding: 10px;
}
li {
  display: flex;
  justify-content: center;
}
</style>
