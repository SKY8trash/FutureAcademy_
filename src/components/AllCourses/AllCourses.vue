<script setup>
import Course_card_plug from "../Course_card/Course_card_plug.vue"
</script>

<template>
  <ol>
    <li>
      <Course_card_plug /> <Course_card_plug style="padding-left: 20px" />
    </li>
    <li>
      <Course_card_plug /> <Course_card_plug style="padding-left: 20px" />
    </li>
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
