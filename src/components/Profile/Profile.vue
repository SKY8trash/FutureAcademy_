<script setup></script>

<template>
  <div class="bg">
    <div class="container">
      <div class="head">Настройки учетной записи</div>
      <div class="headSub">Упрявляйте данными учетной записи</div>
      <div class="info">
        <div class="infoProfile"><h3>Информация об учётной записи</h3></div>
        <div class="name">
          <div class="nameInfo">
            <label for="username">Почта</label>
            <div class="btnName">
              <input
                type="email"
                id="email"
                name="email"
                v-model="value"
                disabled
              /><br />
              <!-- Кнопка -->
              <button type="button" class="btn">
                <img src="../../../public/edit.png" alt="" />
              </button>
            </div>
          </div>
          <div class="nameInfo">
            <label>Телефон</label>
            <div class="btnName">
              <input
                type="number"
                id="number"
                name="number"
                v-model="value"
                disabled
              />

              <br />
              <!-- Кнопка -->
              <button type="button" class="btn">
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
              <input
                type="text"
                id="name"
                name="name"
                v-model="value"
                disabled
              />

              <br />
              <!-- Кнопка -->
              <button type="button" class="btn">
                <img src="../../../public/edit.png" alt="" />
              </button>
            </div>
          </div>
          <div class="nameInfo">
            <label>Фамилия</label>
            <div class="btnName">
              <input
                type="text"
                id="lastName"
                name="lastName"
                v-model="value"
                disabled
              />

              <br />
              <!-- Кнопка -->
              <button type="button" class="btn">
                <img src="../../../public/edit.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div class="course"><h3>Ваши курсы</h3></div>
        <div class="courseInfo">
          У вас нет курсов
          <a href="">Посмотреть курсы</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "Profile.scss";
</style>
