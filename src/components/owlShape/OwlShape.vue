
<template>
  <div class="application">
    <div class="application__wrapper">
      <div class="application_owl">
        <img src="../../../public/owl.png" alt="" />
      </div>
      <div class="application__message">
        <div class="application__message_images">
          <img src="../../../public/Union.png" alt="" />
        </div>
        <div class="application__message_description">
          Помочь с выбором?

          <p>
            Оставьте заявку и наши специалисты свяжутся с вами, ответят на все
            вопросы и подберут подходящий вариант обучения
          </p>
        </div>
      </div>
      <div class="application__form">
        <form action="">
          <input type="text" placeholder="Ваше имя" />
          <div>
            <input type="text" placeholder="Ваш телефон" />
            <input type="text" placeholder="Ваш e-mail" />
          </div>
          <div class="conf">
            <p>
              Нажимая на кнопку, я соглашаюсь на обработку персональных данных и
              с правилами пользования Платформой
            </p>
            <input
              class="application__form_button"
              type="submit"
              value="Отправить"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="application_shadow"></div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "OwlShape.scss";
</style>
