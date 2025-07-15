<h1 align="center">
  Simple template
</h1>

<p align="center">
  Быстрый старт твоего веб-приложения на FastApi и React.
</p>

<p align="center">
  <a href="https://github.com/rapid-integration/simple-template/actions/workflows/ci.yml" target="_blank">
    <img src="https://github.com/rapid-integration/simple-template/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI Pipeline"/>
  </a>
  <a href="https://github.com/rapid-integration/simple-template/actions/workflows/cd.yml" target="_blank">
    <img src="https://github.com/rapid-integration/simple-template/actions/workflows/cd.yml/badge.svg?branch=main" alt="CD Pipeline"/>
  </a>
  <a href="https://www.conventionalcommits.org" target="_blank">
    <img src="https://img.shields.io/badge/conventional-FE5196?label=commits" alt="Conventional Commits"/>
  </a>
</p>


**Документация**: [docs/CONTRIBUTING.md](https://github.com/rapid-integration/simple-template/blob/main/docs/CONTRIBUTING.md)

## Функционал

- **Аутентификация по JTW**: аутентификация и авторизация происходит посредством JWT.
- **Профиль пользователя**: базовый профиль пользователя, необходимый большинству приложений.
- **Асинхронный драйвер PostgreSQL**: бэкенд использует асинхронный движок (`asyncpg`) и SQLAlchemy 2.0 для работы с базой данных.
- **Мониторинг**: сбор метрик через Prometheus, визуализация с помощью Grafana и алертинг с помощью AlertManager.
- **Выстроенные CI/CD**: все этапы для удобства вынесены в отдельные файлы, [CI](https://github.com/rapid-integration/simple-template/blob/main/.github/workflows/ci.yml) отрабатывает при изменении в любой ветке, [CD](https://github.com/rapid-integration/simple-template/blob/main/.github/workflows/cd.yml) — только на пуш/мердж в main.
- **Покрытие тестами**: написаны unit- и e2e-тесты для бэкенда.
- **Подробная документация**: описана [общая](https://github.com/rapid-integration/simple-template/tree/main/docs) документация, а также для [бэкенда](https://github.com/rapid-integration/simple-template/tree/main/apps/backend/docs) и [фронтенда](https://github.com/rapid-integration/simple-template/tree/main/apps/frontend/docs) по отдельности.

## Развертывание

**Прод-версии**: [docs/DEPLOYMENT.md](https://github.com/rapid-integration/simple-template/blob/main/docs/DEPLOYMENT.md)

**Локально бэкенда**: [apps/backend/docs/CONTRIBUTING.md](https://github.com/rapid-integration/simple-template/blob/main/apps/backend/docs/CONTRIBUTING.md)

**Локально фронтенда**: [apps/frontend/docs/CONTRIBUTING.md](https://github.com/rapid-integration/simple-template/blob/main/apps/frontend/docs/CONTRIBUTING.md)
