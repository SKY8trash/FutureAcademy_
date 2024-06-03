-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 03 2024 г., 09:19
-- Версия сервера: 5.7.39
-- Версия PHP: 7.2.34

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
-- Структура таблицы `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `name_programm` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `name_application` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `applications`
--

INSERT INTO `applications` (`id`, `name_programm`, `avatar`, `name_application`, `description`, `time`, `createdAt`, `updatedAt`, `deletedAt`, `price`) VALUES
(1, 'Программа', 'phone.svg', '«Разработка мобильных приложений»', 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются \r\nна смартфонах, умных часах и планшетах. ', '24 месяца', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '2000'),
(2, 'Программа', 'phone.svg', '«Python-разработчик»', 'Станьте Python-разработчиком — освойте асинхронное программирование и уже через 3 месяца обучения станьте успешным кандидатом при поиске работы', '9 месяца', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '100'),
(3, 'Программа', 'phone.svg', '«Аналитик данных»', 'Станьте аналитиком данных с нуля, прокачайтесь в продуктовой или маркетинговой аналитике и помогайте бизнесу принимать выгодные решения.', '14 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '70'),
(4, 'Программа', 'phone.svg', '«Тестировщик-автоматизатор на Python »', 'Станьте тестировщиком-автоматизатором на Python — обеспечивайте качество ПО в крупной IT-компании, стартапе или на фрилансе.', '9 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '5000'),
(5, 'Программа', 'phone.svg', '«Графический дизайнер с нуля до PRO»', 'Погрузитесь в самое широкое направление в дизайне ипроложите путь к вершине индустрии.', '17 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '9000'),
(6, 'Программа', 'phone.svg', '«Data Scientist»', 'Освойте самую востребованную профессию 2023 года. Начните свой путь в Data Science уже сейчас.', '24 месяца', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '15000'),
(7, 'Программа', 'phone.svg', '«Fullstack-разработчик на Python»', 'Станьте fullstack-разработчиком на Python — программируйте на Python и Javascript, работайте в штате или создавайте свои веб-проекты.', '14 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '20000'),
(8, 'Программа', 'phone.svg', '«Белый» хакер', 'Станьте пентестером — анализируйте защищенность систем безопасности, выявляйте уязвимые места и устраняйте их.', '13 месяца', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '6500'),
(9, 'Программа', 'phone.svg', '«UX/UI-дизайнер с нуля до PRO»', 'Пройдите полное погружения в дизайн интерфейсов и станьте уверенным специалистом с опытом и портфолио.', '16 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '4500'),
(10, 'Программа', 'phone.svg', '«Интернет-маркетолог»', 'Станьте интернет-маркетологом. Научитесь делать стратегию, запускать таргетированную и контекстную рекламу, писать продающие тексты, продвигаться в соцсетях и оптимизировать сайты.', '12 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '767'),
(11, 'Программа', 'phone.svg', '«Геймдизайнер»', 'Научитесь создавать игры, от которых будут в восторге тысячи геймеров и превратите хобби в работу с хорошим доходом.', '12 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '500'),
(12, 'Программа', 'phone.svg', '«Java-разработчик»', 'Станьте Java-разработчиком — освойте Java, Spring и основы DevOps и пишите десктопные и веб-приложения на топовом языке программирования.', '14 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '4444'),
(13, 'Программа', 'phone.svg', '«Веб-дизайнер»', 'Научитесь создавать уникальные и удобные для пользователей сайты с эффектным дизайном.', '6 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '2342'),
(14, 'Программа', 'phone.svg', '«1С-программист»', 'Хотите всегда иметь актуальную работу? Пройдите обучение программированию в 1С. Научитесь создавать и внедрять решения для бизнеса на платформе 1С.', '10 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '3333'),
(15, 'Программа', 'phone.svg', '«Информационная безопасность»', 'Научитесь предвосхищать киберататки и обеспечивать безопасность IT-систем, став ценным специалистом широкого профиля в области информационной безопасности.', '24 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '6565'),
(16, 'Программа', 'phone.svg', '«Fullstack-разработчик на PHP и JavaScript»', 'Освойте навыки, чтобы работать как в штате компании, так и на фрилансе: создавайте и поддерживайте веб-сайты, сервисы и приложения. Выбирайте заказчиков и проекты, управляйте рабочим графиком и доходом.', '20 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '8888'),
(17, 'Программа', 'phone.svg', '«Android-разработчик»', 'Станьте мобильным разработчиком в штате или на фрилансе — или запускайте с нуля собственные приложения и игры под Android.', '16 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '777'),
(18, 'Программа', 'phone.svg', '«iOS-разработчик c нуля»', 'Станьте разработчиком под iOS с нуля — научитесь создавать мобильные приложения, которые смогут выйти в топ App Store. Изучите Swift, UX/UI-дизайн, интерфейсы и архитектуру.', '15 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '222'),
(19, 'Программа', 'phone.svg', '«Веб-разработчик с нуля»', 'Пока не знаете, что выбрать — фронтенд или бэкенд? На курсе вы познакомитесь с основами веб-разработки и попробуете себя в обеих областях, чтобы выбрать специализацию по душе.', '12 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '21'),
(20, 'Программа', 'phone.svg', '«C++ разработчик»', 'Станьте разработчиком на C++ и пишите надежный код, который легко поддерживать. Сразу после курса сможете занять позицию junior C++ developer.', '11 месяцев', '2024-06-02 10:31:27', '2024-06-02 10:31:27', NULL, '12');

-- --------------------------------------------------------

--
-- Структура таблицы `auth`
--

CREATE TABLE `auth` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `auths`
--

CREATE TABLE `auths` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `register`
--

CREATE TABLE `register` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `registers`
--

CREATE TABLE `registers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `login` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `login`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Admin@Admin', '', '2024-06-01 18:40:43', '2024-06-01 18:41:06', NULL),
(2, 'weqe@132', '213123', '2024-06-02 11:01:17', '2024-06-02 11:01:17', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `auths`
--
ALTER TABLE `auths`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `registers`
--
ALTER TABLE `registers`
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `auth`
--
ALTER TABLE `auth`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `auths`
--
ALTER TABLE `auths`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `register`
--
ALTER TABLE `register`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `registers`
--
ALTER TABLE `registers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
