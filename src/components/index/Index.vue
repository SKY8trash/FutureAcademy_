<script setup >
import OwlShape from "../owlShape/OwlShape.vue"
import ItemButton from "../itemButton/ItemButton.vue"
import Video from "../video/Video.vue"

class ItemBtm {
  itemBtn

  constructor(itemBtn) {
    this.itemBtn = itemBtn
  }
}
const item = [
  new ItemBtm("Робототехника"),
  new ItemBtm("Создание игр"),
  new ItemBtm("Web-разработка"),
  new ItemBtm("Мультимедиа"),
  new ItemBtm("Шахматы"),
  new ItemBtm("3D-моделирование и дизайн"),
  new ItemBtm("Английский язык"),
  new ItemBtm("Блогинг"),
  new ItemBtm("Soft skills"),
]
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="main__wrapper">
        <div class="platform">
          <div class="platform__title">
            Образовательная платформа ХОД Future Academy
          </div>
          <div class="platform__description">
            Актуальные знания для новичков и профессионалов
          </div>
          <div class="platform__dot">
            <img src="../../../public/net.png" alt="" />
            <img src="../../../public/net_2.png" alt="" />
            <div class="platform__dot_block"></div>
          </div>
          <div class="platform__images">
            <img src="../../../public/image_1.jpg" alt="" />
          </div>
          <div class="platform__other">
            <div class="platform__other_cross-1">
              <img src="../../../public/cross.png" alt="" />
            </div>
            <div class="platform__other_cross-2">
              <img src="../../../public/cross.png" alt="" />
            </div>
            <div class="platform__other_curve-1">
              <img src="../../../public/curved_2.png" alt="" />
            </div>
            <div class="platform__other_curve-2">
              <img src="../../../public/curved_3.png" alt="" />
            </div>
            <div class="platform__other_curve-3">
              <img src="../../../public/curved_4.png" alt="" />
            </div>
            <div class="platform__other_curve-4">
              <img src="../../../public/curved.png" alt="" />
            </div>
            <div class="platform__other_circle">
              <img src="../../../public/circle.png" alt="" />
            </div>
            <div class="platform__other_triangle">
              <img src="../../../public/triangle.png" alt="" />
            </div>
          </div>
        </div>
        <div class="courses">
          <div class="courses__wrapper">
            <div class="courses__message">
              <div class="courses__message_description">
                <img src="../../../public/message.png" alt="" />
                <div>
                  <p>Кем вы хотите стать?</p>
                  <br />
                  <p>Пора найти себя и выбрать подходящий курс :)</p>
                  <br />
                  Удачи!
                </div>
              </div>
              <div class="courses__message_owl">
                <img src="../../../public/owl.png" alt="" />
              </div>
            </div>
            <div class="courses__items">
              <div class="courses__items__people">
                <div class="courses__items__people_1">
                  <div class="courses__items__people__age">
                    <div class="courses__items__people__age_images">
                      <img src="../../../public/children.png" alt="" />
                    </div>
                    <div>
                      <div class="courses__items__people__age_title">Дети</div>
                      <div class="courses__items__people__age_years">
                        8 — 14 лет
                      </div>
                    </div>
                  </div>
                  <div class="courses__items__people__age">
                    <div class="courses__items__people__age_images">
                      <img src="../../../public/children_1.png" alt="" />
                    </div>
                    <div>
                      <div class="courses__items__people__age_title">
                        Подростки
                      </div>
                      <div class="courses__items__people__age_years">
                        14 — 18 лет
                      </div>
                    </div>
                  </div>
                  <div class="courses__items__people__age">
                    <div class="courses__items__people__age_images">
                      <img src="../../../public/family.png" alt="" />
                    </div>
                    <div>
                      <div class="courses__items__people__age_title">
                        Взрослые
                      </div>
                      <div class="courses__items__people__age_years">
                        18 — ∞
                      </div>
                    </div>
                  </div>
                </div>
                <div class="courses__items__people__age_band">
                  <div class="courses__items__people__age_band-shaded"></div>
                  <div></div>
                </div>
              </div>
              <div class="block">
                <ItemButton
                  v-for="(el, index) in item"
                  :key="index"
                  :itembtn="el"
                />
              </div>
            </div>
          </div>
        </div>
        <Video />
        <div class="relevance">
          <div class="relevance__title">
            Актуальные знания от признанных экспертов рынка для новичков и
            практикующих специалистов.
          </div>
          <div class="relevance__information">
            <div class="relevance__information__description">
              <div class="relevance__information__description_number">600</div>
              <div class="relevance__information__description_text">Курсов</div>
            </div>
            <div class="relevance__information__description">
              <div class="relevance__information__description_number">82</div>
              <div class="relevance__information__description_text">
                Ведущих преподавателей
              </div>
            </div>
            <div class="relevance__information__description">
              <div class="relevance__information__description_number">
                14 795
              </div>
              <div class="relevance__information__description_text">
                Выпускников
              </div>
            </div>
          </div>
        </div>
        <div class="information">
          <div class="information__recording">
            <div class="information__recording__number">
              25
              <p>ноября</p>
            </div>
            <div class="information__recording_title">
              День открытых дверей
              <p>
                Приглашаем всех желающих на бесплатную экскурсию в мир
                востребованных профессий и полезных навыков
              </p>
            </div>
            <button class="information__recording_button">Записаться</button>
          </div>
          <div class="information__cards">
            <div class="information__cards__program">
              <div class="information__cards__program_images">
                <img src="../../../public/monitor.png" alt="" />
              </div>
              <div class="information__cards__program_title">
                Программы обучения
              </div>
              <div class="information__cards__program_description">
                В списке наших курсов вы сможете найти профессию и занятие по
                душе, изучить новое и получить практические знания, которые
                помогут получить работу мечты.
              </div>
              <button class="information__cards__program_button">
                Подробнее
              </button>
            </div>
            <div class="information__cards-wrapper">
              <div class="information__cards__news">
                <div class="information__cards__news_images">
                  <img src="../../../public/newspaper.png" alt="" />
                </div>
                <div class="information__cards__news_title">
                  Новости Академии
                </div>
              </div>
              <div class="information__cards__it">
                <div class="information__cards__it_images">
                  <img src="../../../public/diagram.png    " alt="" />
                </div>
                <div class="information__cards__it_title">Мир IT</div>
              </div>
              <div class="information__cards__test">
                <div class="information__cards__test_images">
                  <img src="../../../public/logo.png" alt="" />
                </div>
                <div class="information__cards__test_title">
                  Попробуй!
                  <p>
                    Пройдите тест и узнайте свои способности в сфере
                    информационных технологий
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="academy">
          <div class="academy_title">
            Добро пожаловать в Академию будущего ХОД
          </div>
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
                <img src="../../../public/board.png" alt="" />
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
    </div>
  </main>

  <OwlShape />
</template>
<script>
export default {
  components: { ItemButton },
  data() {
    return {
      itembtn: [],
      itemBtn: "",
    }
  },
}
</script>
  
  <style lang="scss" scoped>
@import "Index.scss";
</style>
  