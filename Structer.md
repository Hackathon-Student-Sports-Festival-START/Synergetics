/project-root
│
├── /config
│   ├── database.js         # Конфигурация подключения к PostgreSQL
│   ├── app.js              # Общая конфигурация приложения
│
├── /controllers
│   ├── athleteController.js    # Контроллер для управления данными спортсменов
│   ├── teamController.js       # Контроллер для управления командами
│   ├── medalsController.js     # Контроллер для отображения медального зачета
│   ├── scheduleController.js   # Контроллер для расписания игр
│   ├── competitionController.js# Контроллер для сетки соревнований
│   ├── mediaController.js      # Контроллер для фотографий и видео
│   ├── applicationController.js# Контроллер для подачи заявок
│
├── /models
│   ├── athlete.js          # Модель данных для спортсменов
│   ├── team.js             # Модель данных для команд
│   ├── medal.js            # Модель данных для медального зачета
│   ├── schedule.js         # Модель данных для расписания игр
│   ├── competition.js      # Модель данных для соревнований
│   ├── media.js            # Модель данных для фотографий и видео
│   ├── orders.js           # Модель данных для заявок
│
├── /routes
│   ├── athleteRoutes.js            # Маршруты для управления спортсменами
│   ├── teamRoutes.js               # Маршруты для управления командами
│   ├── medalsRoutes.js             # Маршруты для медального зачета
│   ├── scheduleRoutes.js           # Маршруты для расписания игр
│   ├── competitionRoutes.js        # Маршруты для соревнований
│   ├── mediaRoutes.js              # Маршруты для медиафайлов
│   ├── applicationRoutes.js        # Маршруты для заявок
│
├── /views                       # Шаблоны для рендеринга
│   ├── athleteProfile.ejs       # Личный кабинет спортсмена
│   ├── participantProfile.ejs   # Личный кабинет участника
│   ├── teamManagement.ejs       # Управление командами
│   ├── medalsTable.ejs          # Таблица медального зачета
│   ├── schedule.ejs             # Расписание игр
│   ├── competitionGrid.ejs      # Сетка соревнований
│   ├── mediaGallery.ejs         # Галерея фотографий и видео
│   ├── applicationForm.ejs      # Форма подачи заявки
│   ├── applicationStatus.ejs    # Статус рассмотрения заявки
│
├── /public                      # Статические файлы
│   ├── /css
│   │   ├── style.css            # Основные стили
│   ├── /js
│   │   ├── scripts.js           # Основные скрипты
│   ├── /images
│   │   ├── logo.png             # Логотип и другие изображения
│
├── /services
│   ├── athleteService.js        # Логика обработки данных спортсменов
│   ├── teamService.js           # Логика обработки данных команд
│   ├── medalService.js          # Логика обработки медального зачета
│   ├── scheduleService.js       # Логика обработки расписания игр
│   ├── competitionService.js    # Логика обработки данных соревнований
│   ├── mediaService.js          # Логика обработки медиафайлов
│   ├── applicationService.js    # Логика обработки заявок
│
├── .gitignore                   # Файлы и папки, исключенные из контроля версий
├── package.json                 # Зависимости и скрипты проекта
├── server.js                    # Основной файл сервера