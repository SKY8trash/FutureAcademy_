<script setup>
import OwlInfo from "../OwlInfo/OwlInfo.vue"
import Button from "../button/Button.vue"
import Video from "../video/Video.vue"
</script>

<template>
  <div>
    <div class="container">
      <div class="course">
        <div class="CourseHead"><h1>Веб-разработчик</h1></div>
        <div class="CourseSubHead">
          Программа для тех кто Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Tempora culpa recusandae molestias exercitationem
          facilis nesciunt doloremque, porro illo eius at eligendi earum laborum
          quo minima quisquam? Dolor minima reiciendis consequatur.
        </div>
        <div class="CourseTime">Срок обучения:5лет</div>
        <div class="CourseMode">
          Режим занятий:2 раза в неделю по 2 академических часа
        </div>
        <div class="CoursePrise">от 4350₽ в месяц</div>
        <div class="CourseJoin">
          1 бесплатное занятие
          <Button />
        </div>
        <div class="CourseImg"></div>
      </div>
      <OwlInfo />
      <Video />
    </div>
  </div>
</template>

<style>
@import "Course.scss";
</style>
