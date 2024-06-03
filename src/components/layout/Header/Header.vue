<script setup></script>
<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <a href="/" class="header__logo">
          <div class="header__logo_img">
            <i class="ic_cross"></i>
            <i class="ic_triangle"></i>
            <i class="ic_circle"></i>
          </div>
          <div class="header__logo_text">FUTURE ACADEMY</div>
        </a>
        <nav class="header__menu">
          <ul>
            <li>
              <a href="/allCourses">
                <div class="header__menu_img"><i class="ic_block"></i></div>
                <div class="header__menu_title">Все курсы</div>
              </a>
            </li>
            <!-- <li><a href="">Мероприятия</a></li> -->
            <!-- <li><a href="">Базы знаний </a></li> -->
            <!-- <li><a href="">Карьера</a></li> -->
            <li class="header__menu_title-city">
              <a href="">
                <div class="header__menu_img">
                  <i class="ic_location"></i>
                </div>
                <div class="header__menu_title">Нижний Новгород</div>
              </a>
            </li>
            <li><a href="">8 800 950-33-98 </a></li>
            <li>
              <a href="/Profile">
                <div class="header__menu_img"><i class="ic_user"></i></div>
                <div class="header__menu_title">Войти</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../../assets/icomoon/style.css";
@import "header.scss";
</style>
