# Сайт для онлайн школы тренировок "SkyFitnessPro"

### Проект выполнен в рамках курса Онлайн-университета SkyPro **"Командная разработка"**

### Команда из 6 человек:

- Басова Александра,[github](https://github.com/Sasha11666)
- Гусев Виталий,[github](https://github.com/LativeSoog)
- Иванова Екатерина,[github](https://github.com/Kathrin0202)
- Калинина Наталья,[github](https://github.com/natalikalinina1)
- Комоза Максим,[github](https://github.com/Komoza)
- Чуприн Павел,[github](https://github.com/PavelChuprin)

## Примечания по локальному запуску проекта для разработки

Для клонирования репозитория выполните команду:

```bash
git clone https://github.com/LativeSoog/skyfitness.git
```

Перед запуском проекта необходимо установить зависимости:

```bash
npm install
```

Запуск проекта:

```bash
npm run start
```

Проект будет запущен по адресу: http://localhost:3000

## Backend и защита данных

В качестве бэкенда и для хранения данных используется платформа Firebase. Запросы к базе реализованы через API который использует функции "fetch".
Ключ приложения (REACT_APP_API_KEY) находится в .env (файл может быть добавлен в.gitignore в целях безопасности)
Используется защищенный режим – база данных закрыта от неавторизованных пользователей по определенным правилам.

## Стэк библиотек проекта

- React
- React Scripts
- React Router Dom
- React Redux
- Web Vitals
- Styled Components

## Назначение папок и файлов проекта

**/public** - статические файлы, доступные для всех пользователей  
**/components** - компоненты общие для всего проекта
**/hooks** - хуки неоднократно используемые по всему проекту  
**/page** - страницы приложения  
**/store** - файлы, относящиеся к управлению состоянием приложения
**/style** - глобальные стили приложения
**/api** - функционал посвященный операциям с API (бэкэндом)  
**/App** - главный компонент приложения, который объединяет все другие компоненты
**/firebase** - файлы, связанные с настройкой и взаимодействием с Firebase  
**/routes** - файлы, относящиеся к маршрутизации в приложении

## Структура приложения

1. Главная страница:

- логотип "SkyFitnessPro" приложения и краткое описание онлайн школы, при клике на логотип осуществляется переход на "Главную страницу"
- список карточек с названиями всех курсов, имеющихся в базе данных
- кнопка "Войти", при клике на которую пользователь попадает на страницу авторизации

2. Страница курса:

- описание курса
- кнопка "Записаться на тренировку", при клике на которую пользователь добавляет выбранный курс тренировок в свой профиль
- в левом верхнем углу отображается логотип "SkyFitnessPro", при клике на который осуществляется переход на "Главную страницу"
- в правом верхнем углу отображается имя пользователя(email), при клике на которое осуществляется переход на страницу "Мой профиль"

3. Страница авторизации:

- на данной странице пользователь имеет возможность зарегистрироваться или войти в свой аккаунт

4. Страница "Мой профиль":

- логотип приложения и информация о пользователе
- кнопки для смены логина и пароля
- кнопка выхода из аккаунта
- список курсов пользователя с кнопкой "Перейти", при клике на которую открывается модальное окно со всеми тренировками данного курса
- в правом верхнем углу отображается имя (email) пользователя
- в левом верхнем углу отображается логотип "SkyFitnessPro", при клике на который осуществляется переход на "Главную страницу"

5. Страница тренировки:

- логотип приложения и название курса
- видео тренировки с названием и кратким описанием, при клике на которые открывается модальное окно со всеми тренировками данного курса
- список упражнений из базы данных
- таблица с прогрессом пользователя
- кнопка "Заполнить свой прогресс" для заполнения прогресса по тренировке
- в правом верхнем углу отображается имя пользователя(email), при клике на которое осуществляется переход на страницу "Мой профиль"
- в левом верхнем углу отображается логотип "SkyFitnessPro", при клике на который осуществляется переход на "Главную страницу"

### Функционал приложения

- [x] Главная страница:
  - [x] при клике на кнопку "Войти" пользователь попадает на страницу Авторизации, если он еще не авторизован
  - [x] если пользователь авторизован, то при клике на кнопку "Войти" он сразу попадает на страницу профиля
  - [x] список карточек выводится в соответствии с названиями всех курсов, имеющихся в базе данных
  - [x] пока данные прогружаются, пользователь видит скелетоны карточек
  - [x] при ошибке запроса на странице выводится соответствующая надпись
  - [x] по клику на выбранный курс пользователь попадает на страницу, где может ознакомиться с его описанием
  - [x] при нажатии на кнопку "Наверх" страница прокручивается в начало списка доступных курсов
- [x] Страницы авторизации и регистрации:
  - [x] настроена валидация полей логина и пароля
  - [x] при возникновении ошибки выводится соответствующее сообщение
- [x] Страница профиля пользователя:
  - [x] при клике на кнопки "Редактировать логин", "Редактировать пароль" появляется модальное окно с возможностью редактировать и сохранять введенные данные. Поскольку требования политики безопасности Firebase требуют, чтобы была свежая регистрация пользователя, то пользователю, возможно, придется авторизоваться снова, чтобы сменить e-mail или пароль
  - [x] в правом верхнем углу отображается имя пользователя, при клике на которое появляется меню с возможностью остаться на странице профиля, а также выйти из приложения
  - [x] при клике на кнопку "Перейти" у карточки курса появляется модальное окно с возможностью выбора тренировки
  - [x] при клике на тренировку пользователь попадает на страницу соответствующей тренировки
  - [x] есть кнопка "Посмотреть все курсы"
  - [x] при выборе тренировки, отправляет на страницу training-video с выбранными тренировками
- [x] Страница тренировки:
  - [x] пока данные по тренировке прогружаются, пользователь видит скелетоны страницы
  - [x] в правом верхнем углу отображается имя пользователя, при клике на которое появляется меню с возможностью перейти на страницу профиля, а также выйти из приложения
  - [x] если открыт курс, которого еще нет у пользователя, появляется кнопка "Записаться на тренировку"
  - [x] если открыт курс на который пользователь уже записан, появлятеся кнопка перейти в профиль
  - [x] при клике на название курса появляется модальное окно с возможностью выбрать тренировку
  - [x] возможность просматривать видео тренировки (play, stop, pause, регулировка громкости)
  - [x] при клике на кнопку "Заполнить свой прогресс" появляется модальное окно с возможностью ввести данные и сохранить их, при этом уже имеющиеся до этого данные о количестве выполненных повторений отображаются сразу при открытии окна
  - [x] после сохранения данных появляется модальное окно с надписью "Ваш прогресс засчитан".
  - [x] в таблице прогресса выводится прогресс в процентах (автоматически рассчитывается после ввода данных пользователем),прогресс отображается и считается из базы данных
- [x] при попытке авторизованного пользователя зайти на страницу тренировки, которой нет в списке его курсов, пользователю показывается сообщение с кнопкой "Записаться на тренировку".
- [x] реализована адаптивная верстка
- [x] Настроен localStorage
- [x] если пользователь попал на страницу, но не записан на курс (например перешел по прямой ссылке), то у него будет отсутствовать блок прогресса и кнопка записать свой прогресс

### CI/CD

Демонстрация проекта развернута на Netlify
Ссылка на проект:

```bash
 https://jolly-gaufre-b49c01.netlify.app/

```
