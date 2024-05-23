<script setup>
import OwlInfo from "../OwlInfo/OwlInfo.vue"
import Video from "../video/Video.vue"
import ProgramText from "../ProgramText/ProgramText.vue"
import SalaryBlock from "../SalaryBlock/SalaryBlock.vue"
import TeacherCard from "../TeacherCard/TeacherCard.vue"
import WorkCard from "../WorkCard/WorkCard.vue"
import Portfolio from "../Portfolio/Portfolio.vue"

class Course {
  image
  cardHead
  cardText
  cardData

  constructor(image, cardHead, cardText, cardData) {
    this.image = image
    this.cardHead = cardHead
    this.cardText = cardText
    this.cardData = cardData
  }
}
const courses = [
  new Course(
    "../../../public/mobile.png",
    "Разработка мобильных приложений",
    "Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
    "24 мая",
  ),
]
</script>

<template>
  <div>
    <div class="course">
      <div class="courseHeader">
        <div class="courseHeaderSub">
          <div class="courseHeaderInfo">
            <div class="courseHead">
              <h1>{{ cardHead }}</h1>
            </div>
            <div class="courseSubHead">
              {{ cardText }}
            </div>
            <div class="courseSubInfo">
              <div class="courseTime">Срок обучения:<br />5лет</div>
              <div class="courseMode">
                Режим занятий:<br />2 раза в неделю по 2 академических часа
              </div>
            </div>
            <div class="coursePrice">от 4350₽ в месяц</div>
            <div class="courseJoin">
              1 бесплатное занятие
              <div class="courseButton">
                <Button>Записаться на курс</Button>
              </div>
            </div>
          </div>
          <div class="img"><img src="../../../public/2.png" alt="" /></div>
        </div>
      </div>

      <div class="container">
        <div class="courseImg"></div>
      </div>
      <div class="container">
        <OwlInfo />
        <div class="video"><Video /></div>
      </div>
    </div>
    <div class="container">
      <div class="courseInfo">
        <div class="courseInfoHead">Кто такой {{ cardHead }}</div>
        <div class="courseInfoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis
          facere distinctio libero recusandae ut temporibus! Numquam
          exercitationem iste, dolor et quod unde doloremque sint voluptatem
          voluptate perspiciatis. Qui, maiores?
        </div>
      </div>
      <div class="courseLearn">Вы научитесь:</div>
      <div class="courseLearnAccept">
        <div class="courseLearnInfo">
          <div class="courseAccept">
            <img src="../../../public/accept.png" alt="" />
          </div>
          <div class="courseAcceptText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            reprehenderit consequuntur neque,
          </div>
        </div>
        <div class="courseLearnInfo">
          <div class="courseAccept">
            <img src="../../../public/accept.png" alt="" />
          </div>
          <div class="courseAcceptText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            reprehenderit consequuntur neque,
          </div>
        </div>
        <div class="courseLearnInfo">
          <div class="courseAccept">
            <img src="../../../public/accept.png" alt="" />
          </div>
          <div class="courseAcceptText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            reprehenderit consequuntur neque,
          </div>
        </div>
      </div>
    </div>
    <ProgramText />
    <div class="container">
      <div class="container">
        <div class="coursePrHead">Принципы обучения</div>
        <div class="coursePr">
          <div class="coursePrBlock">
            <div class="coursePrImg">
              <img src="../../../public/gears.png" width="84px" />
            </div>
            <div class="coursePrText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              corrupti ad aliquam, consectetur aspernatur dolorem numquam
              provident explicabo? Inventore fugiat dolore placeat possimus sunt
              totam, accusamus eius sequi reprehenderit quaerat!
            </div>
          </div>
          <div class="coursePrBlock">
            <div class="coursePrImg">
              <img src="../../../public/book.png" width="84px" />
            </div>
            <div class="coursePrText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aliquam corrupti ipsam ducimus excepturi commodi nostrum
              voluptates, magnam magni earum nemo voluptas expedita possimus
              iusto et unde laborum! Dignissimos, deleniti!
            </div>
          </div>
          <div class="coursePrBlock">
            <div class="coursePrImg">
              <img src="../../../public/teacherIcon.png" width="104px" />
            </div>
            <div class="coursePrText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              soluta ducimus dolore magni itaque aspernatur excepturi fugiat,
              est delectus. Nostrum quo cupiditate molestiae alias totam odit
              cumque voluptatum facere explicabo.
            </div>
          </div>
          <div class="coursePrBlock">
            <div class="coursePrImg">
              <img src="../../../public/human.png" width="60px" />
            </div>
            <div class="coursePrText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore porro, aliquam, omnis soluta doloribus facilis ad
              repudiandae assumenda ullam, neque tenetur laudantium libero sunt.
              Quaerat dolorem maxime voluptates eveniet laborum!
            </div>
          </div>
        </div>

        <div class="salaryHead">Сколько зарабатывает</div>
        <div class="salary">
          <SalaryBlock />
        </div>
      </div>
      <div class="courseS">
        <div class="courseSHead">Содержание курса</div>
        <div class="courseSText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          itaque voluptatem quaerat eligendi, quasi consequatur, magni
          asperiores laudantium quisquam nisi optio nostrum libero accusamus
          amet possimus culpa harum perspiciatis numquam.
        </div>
        <div class="courseSSubInfo">
          <div class="courseSTime">Срок обучения:<br />5лет</div>
          <div class="courseSMode">
            Режим занятий:<br />2 раза в неделю по 2 академических часа
          </div>
        </div>
        <div class="coursePrise">от 4350₽ в месяц</div>
        <div class="courseSButton"><button>Записаться на курс</button></div>
      </div>
    </div>
    <div class="TeacherCard">
      <TeacherCard />
    </div>
    <div class="WorkCard">
      <WorkCard />
    </div>
    <div class="Portfolio">
      <Portfolio />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
      discount: false,
    },
  },
}
</script>
<style>
@import "Course.scss";
</style>
