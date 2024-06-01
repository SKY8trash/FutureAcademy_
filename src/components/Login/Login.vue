<template>
  <main class="main">
    <div class="container">
      <div class="register__form">
        <div class="register__nav">
          <a href="/Login">Вход</a>
          <a href="/Register">Регистрация</a>
        </div>
        <div class="register__input">
          <div class="register__input__nav">
            <input
              type="mail"
              class="input"
              name="mail"
              placeholder="Почта"
              id="mail"
            /><br />
            <input
              type="text"
              class="input"
              name="number"
              placeholder="Номер телефона"
              id="number"
            /><br />
            <input
              type="password"
              class="input"
              name="password"
              placeholder="Пароль"
              id="pswd"
            /><br />
          </div>
        </div>
        <div class="register__help">Войти с помощью соцсетей:</div>
        <div class="register__social">
          <img class="imgsocial" src="../../../public/vk.png" alt="" />
          <img class="imgsocial" src="../../../public/inst.png" alt="" />
          <img class="imgsocial" src="../../../public/face.png" alt="" />
          <img class="imgsocial" src="../../../public/youtube.png" alt="" />
          <img class="imgsocial" src="../../../public/tg.png" alt="" />
        </div>
        <div class="register__btn">
          <input
            type="submit"
            class="btn"
            name="submit"
            value="Отправить"
            id="sub"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "Login.scss";
</style>
