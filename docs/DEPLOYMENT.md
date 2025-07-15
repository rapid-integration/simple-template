# Руководство по развёртыванию

**Это руководство по развёртыванию, которое не затрагивает бэкенд, фронтенд или общую разработку.**

Если вас интересуют другие компоненты проекта, то изучите следующую документацию:

- [Руководство по общей разработке](./CONTRIBUTING.md).
- [Руководство по разработке бэкенда](../apps/backend/docs/CONTRIBUTING.md).
- [Руководство по разработке фронтенда](../apps/frontend/docs/CONTRIBUTING.md).

## Развёртывание

1. Склонируйте этот репозиторий:

   ```sh
   git clone git@github.com:rapid-integration/simple-template.git
   cd simple-template
   ```

2. Скопируйте пример конфигурации окружения:

   ```sh
   cp .env.example .env
   ```

3. Заполните и настройте ваш `.env`.

   Вот несколько полезных ссылок, которые вам могут пригодиться в этом процессе:

   - **Telegram [@BotFather](https://t.me/BotFather)**: используется для получения `ALERTMANAGER_TELEGRAM_BOT_TOKEN`.
   - **Telegram [@getmyid_bot](https://t.me/getmyid_bot)**: используется для получения `ALERTMANAGER_TELEGRAM_CHAT_ID`.

4. Запустите приложение:

   ```sh
   docker compose --profile prod up --build -d
   ```

   После запуска вы можете остановить приложение следующей командой:

   ```sh
   docker compose --profile prod down -v
   ```

## Необходимые секреты для CI/CD

- `SSH_HOST`
- `SSH_USER`
- `SSH_PRIVATE_KEY`
- `IMAGE_NAME` – имя образа, например `simple-template`
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`
