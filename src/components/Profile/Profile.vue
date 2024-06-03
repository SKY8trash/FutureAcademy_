<script setup>
import { ref } from "vue"
// import { courses } from "../fakeData"
class Course {
  id
  image
  cardHead
  cardText
  cardData

  constructor(image, cardHead, cardText, cardData) {
    this.id = id
    this.image = image
    this.cardHead = cardHead
    this.cardText = cardText
    this.cardData = cardData
  }
}
const courses = []

const arr = ref([
  {
    email: "sas@asa",
    number: 12345,
    name: "Danil",
    lastName: "legenda",
  },
])
function update(content, name) {
  switch (name) {
    case "email":
      arr[email] = content
      break
    case "number":
      arr[number] = content
      break
    case "name":
      arr[name] = content
      break
    case "lastName":
      arr[name] = content
      break
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("emailButton").addEventListener("click", function () {
    update(document.getElementById("email").value, "email")
  })
  document
    .getElementById("numberButton")
    .addEventListener("click", function () {
      update(document.getElementById("number").value, "number")
    })
  document.getElementById("nameButton").addEventListener("click", function () {
    update(document.getElementById("name").value, "name")
  })
  document
    .getElementById("lastNameButton")
    .addEventListener("click", function () {
      update(document.getElementById("lastName").value, "lastName")
    })
})
</script>

<template>
  <main class="main">
    <div class="bg">
      <div class="profile">
        <div class="head">Настройки учетной записи</div>
        <div class="headSub">Упрявляйте данными учетной записи</div>
        <div class="info">
          <div class="infoProfile"><h3>Информация об учётной записи</h3></div>
          <div class="name">
            <div class="nameInfo">
              <label for="username">Почта</label>
              <div class="btnName">
                <div v-for="value in arr" :key="value.id">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    :value="value.email"
                  /><br />
                </div>
                <!-- Кнопка -->
                <button type="button" class="btn" id="emailButton">
                  <img src="../../../public/edit.png" alt="" />
                </button>
              </div>
            </div>
            <div class="nameInfo">
              <label>Телефон</label>
              <div class="btnName">
                <div v-for="value in arr" :key="value.id">
                  <input
                    type="number"
                    id="number"
                    name="number"
                    :value="value.number"
                  />
                </div>

                <br />
                <!-- Кнопка -->
                <button type="button" class="btn" id="numberButton">
                  <img src="../../../public/edit.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="messageLanguage">
            <!-- <Dropdown
          v-model="selectedItem"
          :options="items"
          optionLabel="label"
          optionValue="value"
          :virtualScrollerOptions="{ itemSize: 38 }"
          placeholder="Select Item"
          class="w-full md:w-14rem"
        /> -->
            <select id="dropdown">
              <option value="1">Русский</option>
              <option value="2">Английский</option>
              <option value="3">Японский</option>
            </select>
            <div class="messageLanguageText">
              Выберите предпочитаемый язык для электронных писем
            </div>
          </div>

          <div class="infoProfile"><h3>Личные данные</h3></div>
          <div class="name">
            <div class="nameInfo">
              <label>Имя</label>
              <div class="btnName">
                <div v-for="value in arr" :key="value.id">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    :value="value.name"
                  />
                  <br />
                </div>
                <!-- Кнопка -->
                <button type="button" class="btn" id="nameButton">
                  <img src="../../../public/edit.png" alt="" />
                </button>
              </div>
            </div>
            <div class="nameInfo">
              <label>Фамилия</label>
              <div class="btnName">
                <div v-for="value in arr" :key="value.id">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    :value="value.lastName"
                  />

                  <br />
                </div>
                <!-- Кнопка -->
                <button type="button" class="btn" id="lastNameButton">
                  <img src="../../../public/edit.png" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div class="course"><h3>Ваши курсы</h3></div>
          <CourseImport
            class="courses"
            v-for="(el, index) in courses"
            :key="index"
            :course="el"
          />
          <div class="courseInfo" v-if="courses.length == 0">
            У вас нет курсов
            <a href="/AllCourses">Посмотреть курсы</a>
          </div>
        </div>
      </div>
    </div>
  </main>
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
    }
  },
}
</script>

<style lang="scss" scoped>
@import "Profile.scss";
</style>
