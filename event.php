<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="assets/style/styles.css">
  <link rel="stylesheet" href="assets/event/style/styleEvent.css">
  <script src="assets/event/node_modules/dragscroll/dragscroll.js"></script><!--  вынести потом в большой файл надо будет -->
  <script src="assets/event/js/accordion.js" defer></script>
</head>

<body>



  <div class="event_container_head">


    <div class="event_head">
      <div class="event_head_info">
        <div class="event_head_name">Название мероприятия</div>
        <div class="event_head_subname">Подпись мероприятия</div>
        <div class="event_head_text">
          <div class="event_head_text_block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio obcaecati, laborum in quis iure eius aliquam ut consectetur aut expedita cupiditate repellat maiores sunt aperiam quaerat praesentium officiis maxime nihil.</div>
          <div class="event_head_text_block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis odio vel quasi voluptate modi eveniet, impedit obcaecati id quis fugit, repudiandae nihil ex aut corrupti deleniti itaque, omnis quidem.</div>
          <div class="event_head_text_block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odio distinctio optio nisi eligendi vero exercitationem! Illum maiores, sunt unde cupiditate voluptate odit amet porro, nulla fuga molestias, in aperiam.</div>
        </div>
        <div class="event_head_subText">Запишись сейчас</div>
        <div class="event_head_subButton"><button><a href="#" class="open-popup">Записаться на интенсив</a></button></div>
        <?php require_once("popupWindow.html") ?>
      </div>
      <div class="event_head_image"><img src="assets/event/image/owl.svg" alt=""></div>
    </div>
  </div>



  <div class="event_info">
    <div class="event_info_owl">
      <div class="event_info_owl_text">Текст, призывающий записаться на мероприятие</div>
      <div class="event_info_owl_owl"><img src="assets/event/image/owl.svg" alt=""></div>
    </div>
    <div class="event_info_text">
      <div class="event_info_text_block">
        <div class="event_info_text_block_image"><img src="logo.png" alt=""></div>
        <div class="event_info_text_block_h">Че то крутое</div>
        <div class="event_info_text_block_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam nemo commodi incidunt quas, praesentium error quis facilis. Doloremque rerum, recusandae, laboriosam, eum totam enim accusamus doloribus quae sunt velit ipsum?</div>
      </div>
      <div class="event_info_text_block">
        <div class="event_info_text_block_image"><img src="logo.png" alt=""></div>
        <div class="event_info_text_block_h">Че то крутое</div>
        <div class="event_info_text_block_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum porro explicabo error esse cupiditate unde soluta alias minus, id libero consequuntur sint, excepturi molestias atque deleniti delectus quas nulla officiis.</div>
      </div>
      <div class="event_info_text_block">
        <div class="event_info_text_block_image"><img src="logo.png" alt=""></div>
        <div class="event_info_text_block_h">Че то крутое</div>
        <div class="event_info_text_block_text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ad culpa est reiciendis laudantium nobis pariatur vero iusto aliquam velit saepe sint, voluptates tenetur totam libero magnam! Excepturi, est laboriosam?</div>
      </div>
    </div>
  </div>
  </div>


  <div class="event_container">
    <div class="event_program">
      <div class="event_program_h">Программа мероприятия</div>
      <div class="event_program_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit, dicta animi blanditiis esse eum! Magni culpa accusamus dolore aperiam, dicta eveniet distinctio corporis perferendis, necessitatibus ipsam laborum sunt non!</div>
      <div class="event_program_block">
        <dt>
          <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" class="accordion-title accordionTitle js-accordionTrigger">День первый</a>
        </dt>
        <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
          <p class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim,
            neque
            sit
            amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac
            nisl.
            Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum,
            in
            auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui.
            Phasellus
            pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora
            torquent
            per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed
            dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet
            placerat
            arcu sem id sem.
          </p>
        </dd>
      </div>
      <div class="event_program_block">
        <dt>
          <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" class="accordion-title accordionTitle js-accordionTrigger">День второй</a>
        </dt>
        <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
          <p class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim,
            neque
            sit
            amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac
            nisl.
            Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum,
            in
            auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui.
            Phasellus
            pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora
            torquent
            per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed
            dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet
            placerat
            arcu sem id sem.
          </p>
        </dd>
      </div>
      <div class="event_program_block">
        <dt>
          <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" class="accordion-title accordionTitle js-accordionTrigger">День третий</a>
        </dt>
        <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
          <p class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim,
            neque
            sit
            amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac
            nisl.
            Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum,
            in
            auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui.
            Phasellus
            pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora
            torquent
            per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed
            dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet
            placerat
            arcu sem id sem.
          </p>
        </dd>
      </div>
    </div>
  </div>
  </div>


  <div class="event_event">
    <div class="event_event_h">Мероприятия проводят</div>
    <div class="event_event_info">
      <div class="event_event_block">
        <div class="event_event_block_image"><img src="logo.png" alt="1"></div>
        <div class="event_event_block_name">Имя Фамилия</div>
        <div class="event_event_block_uni">Выпускник такого то того то</div>
        <div class="event_event_block_uni">мастер на все руки</div>
      </div>
      <div class="event_event_block">
        <div class="event_event_block_image"><img src="ava.jpg" alt="2"></div>
        <div class="event_event_block_name">Имя Фамилия</div>
        <div class="event_event_block_uni">Выпускник такого то того то</div>
        <div class="event_event_block_uni">мастер на все руки</div>
      </div>
      <div class="event_event_block">
        <div class="event_event_block_image"><img src="" alt="3"></div>
        <div class="event_event_block_name">Имя Фамилия</div>
        <div class="event_event_block_uni">Выпускник такого то того то</div>
        <div class="event_event_block_uni">мастер на все руки</div>
      </div>
    </div>
  </div>
  <div class="event_photo">
    <div class="event_container">
      <div class="event_photo_h">Фотографии с прошлых мероприятий</div>
      <div class="event_photo_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, natus impedit esse corrupti, reprehenderit doloremque ipsum sit placeat suscipit deleniti odit nihil totam distinctio eveniet voluptatem aliquam cum, vero ratione.</div>
    </div>
    <div class="event_photo_slider">
      <div class="event_photo_slider_carousel">
        <div class="event_photo_slider_carousel--wrap">
          <div class="event_photo_slider_carousel--item">
            <figure><img src="assets/event/image/owl.svg" alt="image"></figure>
          </div>
          <div class="event_photo_slider_carousel--item">
            <figure><img src="assets/event/image/owl.svg" alt="image"></figure>
          </div>
          <div class="event_photo_slider_carousel--item">
            <figure><img src="assets/event/image/owl.svg" alt="image"></figure>
          </div>
          <div class="event_photo_slider_carousel--item">
            <figure><img src="assets/event/image/owl.svg" alt="image"></figure>
          </div>
          <div class="event_photo_slider_carousel--item">
            <figure><img src="assets/event/image/owl.svg" alt="image"></figure>
          </div>
          <div class="event_photo_slider_carousel--item">
            <figure><img src="assets/event/image/owl.svg" alt="image"></figure>
          </div>
          <div class="event_photo_slider_carousel--item">
            <figure><img src="assets/event/image/owl.svg" alt="image"></figure>
          </div>
        </div>
      </div>

    </div>
    <div class="event_photo_slider_carousel--progress">
      <div class="event_photo_slider_carousel--progress-bar"></div>
    </div>
    <script src="assets/event/js/button.js"></script>

  </div>
  </div>
</body>

</html>