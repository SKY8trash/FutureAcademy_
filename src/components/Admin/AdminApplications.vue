<script setup>
import AdminNavbar from "../Admin/AdminNavbar.vue"
const teachers = [
  {
    id: 1,
    name: "Кирилл",
    phone: "+82383838",
    email: "lirillkoskov@gmail,con",
    created: "12.12.1212",
    updated: "12.12.1212",
  },
  {
    id: 2,
    name: "Кирилл",
    phone: "+82383838",
    email: "lirillkoskov@gmail,con",
    created: "12.12.1212",
    updated: "12.12.1212",
  },
]
</script>

<template>
  <main class="main">
    <div class="admin">
      <div class="container">
        <h2>ЗАЯВКИ</h2>

        <AdminNavbar />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ИМЯ</th>
              <th>НОМЕР</th>
              <th>EMAIL</th>
              <th>ДАТА СОЗДАНИЯ ПРОФИЛЯ</th>
              <th>ДАТА ОБНОВЛЕНИЯ ПРОФИЛЯ</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="value in teachers" :key="value.id">
              <td>{{ value.id }}</td>
              <td>{{ value.name }}</td>
              <td>{{ value.phone }}</td>
              <td>{{ value.email }}$</td>
              <td>{{ value.created }}</td>
              <td>{{ value.updated }}</td>
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
