

<script setup>
import Video from "../video/Video.vue"
import OwlShape from "../owlShape/OwlShape.vue"
import List from "../list/List.vue"

const teachers = ([
  {
    images: "../../../public/teachers_4.png",
    name: "Kirill",
    description:
      "Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.",
  },
  {
    images: "../../../public/teachers_3.png",
    name: "Kirill",
    description:
      "Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.",
  },
  {
    images: "../../../public/teachers_2.png",
    name: "Kirill",
    description:
      "Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.",
  },
  {
    images: "../../../public/teachers_1.png",
    name: "Kirill",
    description:
      "Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.",
  },
])
</script>

<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="developer">
        <div class="container">
          <div class="developer__wrapper">
            <div class="developer__description">
              <div class="developer__description_title">
                Веб-разработчик
                <p>
                  Программа для тех кто...Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Pellentesque quis tellus feugiat,
                  posuere magna et, scelerisque leo. In scelerisque pulvinar
                  sem, et gravida mi tincidunt nec.
                </p>
              </div>
              <div class="developer__description__text_wrapper">
                <div class="developer__description__text-card">
                  <hr />
                  <div class="developer__description__text-card_name">
                    Срок обучения: 5 лет
                  </div>
                </div>
                <div class="developer__description__text-card">
                  <hr />
                  <div class="developer__description__text-card_name">
                    Режим занятий:<br />
                    2 раза в неделю по 2 академических часа
                  </div>
                </div>
              </div>
              <div class="developer__description__number">
                <hr />
                <div class="developer__description__number_from">
                  от 4 350 ₽ в месяц
                </div>
              </div>
              <div class="developer__description_free">
                1 занятие бесплатное
              </div>
              <button class="developer__description_button">
                Записаться на пробное занятие
              </button>
            </div>
            <div class="developer__images">
              <img src="../../../public/emp.jpeg" alt="" />
            </div>

            <div class="developer__other">
              <div class="developer__other-1">
                <img src="../../../public/cross.png" alt="" />
              </div>
              <div class="developer__other-2">
                <img src="../../../public/cross.png" alt="" />
              </div>
              <div class="developer__other-3">
                <img src="../../../public/triangle.png" alt="" />
              </div>
              <div class="developer__other-4">
                <img src="../../../public/triangle.png" alt="" />
              </div>
              <div class="developer__other-5">
                <img src="../../../public/circle.png" alt="" />
              </div>
              <div class="developer__other-6">
                <img src="../../../public/curved_1.png" alt="" />
              </div>
              <div class="developer__other-7">
                <img src="../../../public/curved_6.png" alt="" />
              </div>
              <div class="developer__other-8">
                <img src=".../../../public/curved_5.1.png" alt="" />
              </div>
              <!-- <div class="developer__other-9">
                <img src="../../../public/curved_3.png" alt="" />
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="profession">
        <div class="container">
          <div class="profession__wrapper">
            <div class="profession__message">
              <div class="profession__message_description">
                <img src="../../../public/union_2.png" alt="" />
                <div>
                  <p>
                    Получите востребованную профессию и возможность открыть
                    бизнес в сфере информационных технологий!
                  </p>
                </div>
              </div>
            </div>
            <div class="profession__message_owl">
              <img src="../../../public/owl.png" alt="" />
            </div>

            <div class="profession__cards">
              <div class="vprofession__cards__card">
                <div class="vprofession__cards__card_images">
                  <img src="../../../public/v_1.png" alt="" />
                </div>
                <div class="profession__cards__card_title">Заголовок</div>
                <div class="profession__cards__card_description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                  condimentum, ligula eget
                </div>
              </div>
              <div class="vprofession__cards__card">
                <div class="vprofession__cards__card_images">
                  <img src="../../../public/v_3.png" alt="" />
                </div>
                <div class="profession__cards__card_title">Заголовок</div>
                <div class="profession__cards__card_description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                  condimentum, ligula eget
                </div>
              </div>
              <div class="profession__cards__card">
                <div class="profession__cards__card_images">
                  <img src="../../../public/v_2.png" alt="" />
                </div>
                <div class="profession__cards__card_title">Заголовок</div>
                <div class="profession__cards__card_description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                  condimentum, ligula eget
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Video />

      <div class="about">
        <div class="container">
          <div class="about__wrapper">
            <div class="about__title">
              Кто такой веб-разработчик
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque quis tellus feugiat, posuere magna et, scelerisque
                leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec.
                Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere
                dignissim vitae a diam. Praesent vulputate nulla sapien, nec
                auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac,
                convallis quis urna. Etiam id ultricies dolor, non efficitur
                tellus. Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
              </p>
            </div>
            <div class="about__learn">
              <div class="about__learn__title">Вы научитесь:</div>
              <div class="about__learn__cards">
                <div class="about__learn__cards__goals">
                  <div class="about__learn__cards__goals_images">
                    <img src="../../../public/a_3.png" alt="" />
                  </div>
                  <div class="about__learn__cards__goals_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div class="about__learn__cards__goals">
                  <div class="about__learn__cards__goals_images">
                    <img src="../../../public/a_3.png" alt="" />
                  </div>
                  <div class="about__learn__cards__goals_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div class="about__learn__cards__goals">
                  <div class="about__learn__cards__goals_images">
                    <img src="../../../public/a_3.png" alt="" />
                  </div>
                  <div class="about__learn__cards__goals_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div class="about__learn__cards__goals">
                  <div class="about__learn__cards__goals_images">
                    <img src="../../../public/a_3.png" alt="" />
                  </div>
                  <div class="about__learn__cards__goals_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div class="about__learn__cards__goals">
                  <div class="about__learn__cards__goals_images">
                    <img src="../../../public/a_3.png" alt="" />
                  </div>
                  <div class="about__learn__cards__goals_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div class="about__learn__cards__goals">
                  <div class="about__learn__cards__goals_images">
                    <img src="../../../public/a_3.png" alt="" />
                  </div>
                  <div class="about__learn__cards__goals_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="will">
        <div class="container">
          <div class="will__wrapper">
            <div class="will__title">Эта программа ‍подойдет тем, кто</div>
            <div class="will__cards">
              <div class="will__cards__whom">
                <hr />
                <div class="will__cards__whom_title">
                  Никогда не работал
                  <p>
                    и хочет получить востребованную профессию, трудоустроиться
                    или создать собственный бизнес с нуля
                  </p>
                </div>
              </div>
              <div class="will__cards__whom">
                <hr />
                <div class="will__cards__whom_title">
                  Хочет научиться новому
                  <p>
                    и попробовать себя в интересной и востребованной професии
                  </p>
                </div>
              </div>
              <div class="will__cards__whom">
                <hr />
                <div class="will__cards__whom_title">
                  Хочет сменить работу
                  <p>
                    и получить актуальную высокооплачиваемую специальность в IT
                  </p>
                </div>
              </div>
            </div>
            <button class="will_button">Записаться на курс</button>
          </div>
        </div>
      </div>
      <div class="academy">
        <div class="container">
          <div class="academy_title">Принципы обучения</div>
          <div class="academy__cards">
            <div class="academy__cards__services">
              <div class="academy__cards__services_images">
                <img src="../../../public/gears.png" alt="" />
              </div>
              <div class="academy__cards__services_discription">
                Передовой подход к образовательному процессу
              </div>
            </div>
            <div class="academy__cards__services">
              <div class="academy__cards__services_images">
                <img src="../../../public/book.png" alt="" />
              </div>
              <div class="academy__cards__services_discription">
                Непрерывное усовершенствование и пополнение базы курсов
              </div>
            </div>
            <div class="academy__cards__services">
              <div class="academy__cards__services_images">
                <img src=".../../../public/board.png" alt="" />
              </div>
              <div class="academy__cards__services_discription">
                Только практикующие преподаватели
              </div>
            </div>
            <div class="academy__cards__services">
              <div class="academy__cards__services_images">
                <img src="../../../public/human.png" alt="" />
              </div>
              <div class="academy__cards__services_discription">
                Сопровождение на всех этапах. От начала обучения до
                трудоустройства
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="earnings">
        <div class="container">
          <div class="earnings__wrapper">
            <div class="earnings__title">
              Сколько зарабатывает веб-разработчик
            </div>
            <div class="earnings__cards">
              <div class="earnings__cards__qualifications blue">
                <div class="earnings__cards__qualifications_title">
                  Junior
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque quis tellus feugiat, posuere magna et,
                    scelerisque leo.
                  </p>
                </div>
                <div class="earnings__cards__qualifications_number">
                  от 80 000 ₽ в месяц
                </div>
              </div>
              <div class="earnings__cards__qualifications green">
                <div class="earnings__cards__qualifications_title">
                  Middle
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque quis tellus feugiat, posuere magna et,
                    scelerisque leo.
                  </p>
                </div>
                <div class="earnings__cards__qualifications_number">
                  от 150 000 ₽ в месяц
                </div>
              </div>
              <div class="earnings__cards__qualifications orange">
                <div class="earnings__cards__qualifications_title">
                  Middle
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque quis tellus feugiat, posuere magna et,
                    scelerisque leo.
                  </p>
                </div>
                <div class="earnings__cards__qualifications_number">
                  от 200 000 ₽ в месяц
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-content">
        <div class="container">
          <div class="course-content__wrapper">
            <div class="course-content_title">
              Содержание курса
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque quis tellus feugiat, posuere magna et, scelerisque
                leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec.
                Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere
                dignissim vitae a diam. Praesent vulputate nulla sapien, nec
                auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac,
                convallis quis urna. Etiam id ultricies dolor, non efficitur
                tellus. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Pellentesque in augue porttitor, ornare nulla id,
                hendrerit nunc.
              </p>
            </div>
            <div class="course-content__information">
              <div class="course-content__information__term">
                <div class="course-content__information__term__desc">
                  <div
                    class="course-content__information__term__desc_education"
                  >
                    <hr />
                    <p>
                      Срок обучения:<br />
                      5 лет
                    </p>
                  </div>
                  <div
                    class="course-content__information__term__desc_education"
                  >
                    <hr />
                    <p>
                      Режим занятий:<br />
                      2 раза в неделю по 2 академических часа
                    </p>
                  </div>
                </div>
                <div class="course-content__information__term_number">
                  <hr />
                  <p>от 4 350 ₽ в месяц</p>
                </div>
                <button class="course-content__information__term_button">
                  Записаться на курс
                </button>
              </div>
              <div class="course-content__information_message">
                <div>1 занятие бесплатное</div>
                <div>
                  <img src="../../../public/union_1.png" alt="" />
                  <img src="../../../public/owl.png" alt="" />
                </div>
              </div>
            </div>
            <div class="course-content__other">
              <div class="course-content__other-1">
                <img src="../../../public/cross.png" alt="" />
              </div>
              <div class="course-content__other-2">
                <img src="../../../public/triangle.png" alt="" />
              </div>
              <div class="course-content__other-3">
                <img src="../../../public/circle.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="teachers">
        <div class="container">
          <div class="teachers__wrapper">
            <div class="teachers_title">Наши преподаватели</div>

            <div class="teachers__cards">
              <div
                class="teachers__cards__block"
                v-for="value in teachers"
                :key="value.id"
              >
                <div
                  class="teachers__cards__block_images"
                  id="images"
                  name="images"
                >
                  <img :src="value.images" alt="" />
                </div>
                <div class="teachers__cards__block_title" id="name" name="name">
                  {{ value.name }}
                </div>
                <div
                  class="teachers__cards__block_description"
                  id="description"
                  name="description"
                >
                  {{ value.description }}
                </div>
              </div>
            </div>

            <div class="teachers_dot">
              <img src="../../../public/b.png" alt="" />
            </div>
            <div class="teachers__other">
              <div class="teachers__other-1">
                <img src="../../../public/curved_2.1.png" alt="" />
              </div>
              <div class="teachers__other-2">
                <img src="../../../public/cross.png" alt="" />
              </div>
              <div class="teachers__other-3">
                <img src="../../../public/triangle.png" alt="" />
              </div>
              <div class="teachers__other-4">
                <img src="../../../public/circle.png" alt="" />
              </div>
              <div class="teachers__other-5">
                <img src="../../../public/curved_1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="employment-creation">
        <div class="container">
          <div class="employment-creation__wrapper">
            <div class="employment-creation_title">
              Трудоустройство или создание бизнеса
            </div>
            <div class="employment-creation__cards">
              <div class="employment-creation__cards__choice">
                <div class="employment-creation__cards__choice_title">
                  Трудоустройство
                  <p>
                    Полученный уровень образования позволит претендовать на
                    реальные вакансии и начать карьеру в сфере IT. Мы подберем
                    подходящие предложения, собрем портфолио и резюме,
                    подготовим к собеседованию, научимся выполнять тестовые
                    задания и поможем с трудоустройством.
                  </p>
                </div>
                <div class="employment-creation__cards__choice_number">
                  Планируемый доход:
                  <p>80 000—200 000 ₽ в месяц</p>
                </div>
              </div>
              <div class="employment-creation__cards__choice">
                <div class="employment-creation__cards__choice_title">
                  Создание бизнеса
                  <p>
                    Совместно с другими студентами, вы будете продвигать,
                    разрабатывать, тестировать,и реализовывать бизнес-идеи. А
                    также получите дополнительное обучение по запуску бизнеса от
                    экспертов приглашенных компаний.
                  </p>
                </div>
                <div class="employment-creation__cards__choice_number">
                  Планируемый доход:
                  <p>120 000—400 000 ₽ в месяц</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="summary">
        <div class="container">
          <div class="summary__wrapper">
            <div class="summary_title">Ваше будущее резюме</div>
            <div class="summary__card">
              <div class="summary__card__who">
                <div class="summary__card__who__images">
                  <div class="summary__card__who__images_img">
                    <img src="../../../public/a_1.png" alt="" />
                  </div>
                  <div class="summary__card__who__images_speciality">
                    Должность:
                    <p>Веб-разработчик</p>
                  </div>
                </div>
                <div class="summary__card__who_salary">
                  Зарплата от:
                  <p>90 000 ₽</p>
                </div>
              </div>
              <hr />
              <div class="summary__card__skills">
                <div class="summary__card__skills_title">
                  Профессиональные навыки:
                </div>
                <div class="summary__card__skills__card">
                  <div class="summary__card__skills__card__name">
                    <img src="../../../public/a_3.png" alt="" />
                    <div class="summary__card__skills__card__name_title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div class="summary__card__skills__card__name">
                    <img src="../../../public/a_3.png" alt="" />
                    <div class="summary__card__skills__card__name_title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div class="summary__card__skills__card__name">
                    <img src="../../../public/a_3.png" alt="" />
                    <div class="summary__card__skills__card__name_title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div class="summary__card__skills__card__name">
                    <img src="../../../public/a_3.png" alt="" />
                    <div class="summary__card__skills__card__name_title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div class="summary__card__skills__card__name">
                    <img src="../../../public/a_3.png" alt="" />
                    <div class="summary__card__skills__card__name_title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div class="summary__card__skills__card__name">
                    <img src="../../../public/a_3.png" alt="" />
                    <div class="summary__card__skills__card__name_title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="summary__card__diploma">
                <div class="summary__card__diploma_shadow"></div>
                <img src="../../../public/a_2.png" alt="" />
                <div class="summary__card__diploma_title">
                  Диплом ХОД Future Academy
                  <p>
                    Подтвердит, что вы прошли курс, и станет дополнительным
                    аргументом при устройстве на работу.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <List />
    </div>
  </main>
  <OwlShape />
</template>
<style lang="scss" scoped>
@import "Employment.scss";
</style>
  