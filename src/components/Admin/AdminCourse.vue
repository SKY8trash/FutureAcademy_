<script setup>
// const teachers = [
//   {
//     id: 1,
//     name: "Дизайн",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet repellat, optio accusantium dolorum dicta velit ab enim possimus est a nobis mollitia reiciendis numquam, sint eligendi harum doloremque alias nostrum.",
//     price: 200,
//     created: "12.12.1212",
//     updated: "12.12.1212",
//   },
//   {
//     id: 2,
//     name: "Дизайн",
//     description:
//       "Lorem ipsum dolor sit, aan mollitia reiciendis numquam, sint eligendi harum doloremque alias nostrum.",
//     price: 2100,
//     created: "12.12.1212",
//     updated: "12.12.1212",
//   },
// ]
import AdminNavbar from "../Admin/AdminNavbar.vue"
import axios from "axios"
import { ref } from "vue"
const teachers = ref(
  (await axios.get(`http://26.232.67.81:3308/api/application`)).data
)
</script>

<template>
  <main class="main">
    <div class="admin">
      <div class="container">
        <h2>КУРСЫ</h2>
        <AdminNavbar />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>НАЗВАНИЕ КУРСА</th>
              <th>ОПИСАНИЕ КУРСА</th>
              <th>ВРЕМЯ КУРСА</th>
              <th>ПРОГРАММА</th>
              <!-- <th>ДАТА ОБНОВЛЕНИЯ ПРОФИЛЯ</th> -->
            </tr>
          </thead>

          <tbody>
            <tr v-for="value in teachers" :key="value.id">
              <td>{{ value.id }}</td>
              <td>{{ value.name_application }}</td>
              <td>{{ value.description }}</td>
              <td>{{ value.time }}</td>
              <td>{{ value.name_programm }}</td>
              <!-- <td>{{ value.updated }}</td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "Admin.scss";
</style>
