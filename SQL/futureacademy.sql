-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 01 2024 г., 13:10
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `futureacademy`
--

-- --------------------------------------------------------

--
-- Структура таблицы `application`
--

CREATE TABLE `application` (
  `id` int NOT NULL,
  `name_programm` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `name_application` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `application`
--

INSERT INTO `application` (`id`, `name_programm`, `avatar`, `name_application`, `description`, `time`) VALUES
(1, 'Программа', 'phone.svg', '«Разработка мобильных приложений»', 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются \r\nна смартфонах, умных часах и планшетах. ', '24 месяца'),
(2, 'Программа', 'phone.svg', '«Python-разработчик»', 'Станьте Python-разработчиком — освойте асинхронное программирование и уже через 3 месяца обучения станьте успешным кандидатом при поиске работы', '9 месяца'),
(3, 'Программа', 'phone.svg', '«Аналитик данных»', 'Станьте аналитиком данных с нуля, прокачайтесь в продуктовой или маркетинговой аналитике и помогайте бизнесу принимать выгодные решения.', '14 месяцев'),
(4, 'Программа', 'phone.svg', '«Тестировщик-автоматизатор на Python »', 'Станьте тестировщиком-автоматизатором на Python — обеспечивайте качество ПО в крупной IT-компании, стартапе или на фрилансе.', '9 месяцев'),
(5, 'Программа', 'phone.svg', '«Графический дизайнер с нуля до PRO»', 'Погрузитесь в самое широкое направление в дизайне ипроложите путь к вершине индустрии.', '17 месяцев'),
(6, 'Программа', 'phone.svg', '«Data Scientist»', 'Освойте самую востребованную профессию 2023 года. Начните свой путь в Data Science уже сейчас.', '24 месяца'),
(7, 'Программа', 'phone.svg', '«Fullstack-разработчик на Python»', 'Станьте fullstack-разработчиком на Python — программируйте на Python и Javascript, работайте в штате или создавайте свои веб-проекты.', '14 месяцев'),
(8, 'Программа', 'phone.svg', '«Белый» хакер', 'Станьте пентестером — анализируйте защищенность систем безопасности, выявляйте уязвимые места и устраняйте их.', '13 месяца'),
(9, 'Программа', 'phone.svg', '«UX/UI-дизайнер с нуля до PRO»', 'Пройдите полное погружения в дизайн интерфейсов и станьте уверенным специалистом с опытом и портфолио.', '16 месяцев'),
(10, 'Программа', 'phone.svg', '«Интернет-маркетолог»', 'Станьте интернет-маркетологом. Научитесь делать стратегию, запускать таргетированную и контекстную рекламу, писать продающие тексты, продвигаться в соцсетях и оптимизировать сайты.', '12 месяцев'),
(11, 'Программа', 'phone.svg', '«Геймдизайнер»', 'Научитесь создавать игры, от которых будут в восторге тысячи геймеров и превратите хобби в работу с хорошим доходом.', '12 месяцев'),
(12, 'Программа', 'phone.svg', '«Java-разработчик»', 'Станьте Java-разработчиком — освойте Java, Spring и основы DevOps и пишите десктопные и веб-приложения на топовом языке программирования.', '14 месяцев'),
(13, 'Программа', 'phone.svg', '«Веб-дизайнер»', 'Научитесь создавать уникальные и удобные для пользователей сайты с эффектным дизайном.', '6 месяцев'),
(14, 'Программа', 'phone.svg', '«1С-программист»', 'Хотите всегда иметь актуальную работу? Пройдите обучение программированию в 1С. Научитесь создавать и внедрять решения для бизнеса на платформе 1С.', '10 месяцев'),
(15, 'Программа', 'phone.svg', '«Информационная безопасность»', 'Научитесь предвосхищать киберататки и обеспечивать безопасность IT-систем, став ценным специалистом широкого профиля в области информационной безопасности.', '24 месяцев'),
(16, 'Программа', 'phone.svg', '«Fullstack-разработчик на PHP и JavaScript»', 'Освойте навыки, чтобы работать как в штате компании, так и на фрилансе: создавайте и поддерживайте веб-сайты, сервисы и приложения. Выбирайте заказчиков и проекты, управляйте рабочим графиком и доходом.', '20 месяцев'),
(17, 'Программа', 'phone.svg', '«Android-разработчик»', 'Станьте мобильным разработчиком в штате или на фрилансе — или запускайте с нуля собственные приложения и игры под Android.', '16 месяцев'),
(18, 'Программа', 'phone.svg', '«iOS-разработчик c нуля»', 'Станьте разработчиком под iOS с нуля — научитесь создавать мобильные приложения, которые смогут выйти в топ App Store. Изучите Swift, UX/UI-дизайн, интерфейсы и архитектуру.', '15 месяцев'),
(19, 'Программа', 'phone.svg', '«Веб-разработчик с нуля»', 'Пока не знаете, что выбрать — фронтенд или бэкенд? На курсе вы познакомитесь с основами веб-разработки и попробуете себя в обеих областях, чтобы выбрать специализацию по душе.', '12 месяцев'),
(20, 'Программа', 'phone.svg', '«C++ разработчик»', 'Станьте разработчиком на C++ и пишите надежный код, который легко поддерживать. Сразу после курса сможете занять позицию junior C++ developer.', '11 месяцев');

-- --------------------------------------------------------

--
-- Структура таблицы `comment`
--

CREATE TABLE `comment` (
  `id` int NOT NULL,
  `avatar` int NOT NULL,
  `user_id` int NOT NULL,
  `application_id` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `rating` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `role`
--

CREATE TABLE `role` (
  `id` int NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `role`
--

INSERT INTO `role` (`id`, `role`) VALUES
(1, 'Пользователь'),
(2, 'Модератор'),
(3, 'Админ');

-- --------------------------------------------------------

--
-- Структура таблицы `teachers`
--

CREATE TABLE `teachers` (
  `id` int NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `FIO` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `role`) VALUES
(1, 'Admin', 'Admin@Admin', 'Admin', 'AdminWSR', 3);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `avatar` (`avatar`),
  ADD KEY `application_id` (`application_id`);

--
-- Индексы таблицы `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `application`
--
ALTER TABLE `application`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `role`
--
ALTER TABLE `role`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`avatar`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`application_id`) REFERENCES `application` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
