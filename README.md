<h1 align="center">
  Simple template
</h1>

<p align="center">
  Быстрый старт твоего веб-приложения на FastAPI и React.
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


**Документация по разработке**: [docs/CONTRIBUTING.md](/docs/CONTRIBUTING.md)

## Функционал

- **Аутентификация по JTW**: аутентификация и авторизация происходит посредством JWT.
- **Профиль пользователя**: базовая модель пользователя с пользовательскими полями `username` и `password`, необходимый большинству приложений.
- **Асинхронный драйвер PostgreSQL**: бэкенд использует асинхронный движок (`asyncpg`) и SQLAlchemy 2.0 для работы с базой данных.
- **Мониторинг**: сбор метрик через Prometheus, визуализация с помощью Grafana и алертинг с помощью AlertManager.
- **Выстроенные CI/CD**: все этапы для удобства вынесены в отдельные файлы, [CI](/.github/workflows/ci.yml) отрабатывает при изменении в любой ветке, [CD](/.github/workflows/cd.yml) — только на пуш/мердж в main.
- **Покрытие тестами 90%**: написаны unit- и e2e-тесты для бэкенда.
- **Подробная документация**: описана [общая](/docs) документация, а также для [бэкенда](/apps/backend/docs) и [фронтенда](/apps/frontend/docs) по отдельности.

## Развертывание

**Прод-версии**: [docs/DEPLOYMENT.md](/docs/DEPLOYMENT.md)
