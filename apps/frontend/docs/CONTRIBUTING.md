# Руководство по разработке фронтенда

**Это руководство именно по разработке фронтенда, которое не затрагивает общие принципы, бэкенд или развёртывание.**

Подразумевается, что вы уже прочитали общее [руководство по разработке](../../../docs/CONTRIBUTING.md).

## Начало работы

0. Убедитесь, что у вас установлены [Node.js](https://nextjs.org) и [pnpm](https://pnpm.io) последних версий.

1. Перейдите в директорию [apps/frontend](../).

   ```sh
   cd apps/frontend
   ```

2. Установите зависимости:

   ```sh
   pnpm install
   ```

> [!NOTE]
> Вместе с этой командой также установятся pre-commit git хуки. Чтобы избежать `pre-commit` при `git commit` можно с помщью аргумента [--no-verify](https://git-scm.com/docs/githooks#_pre_commit).

## Управление сервисами и общие команды

### Запуск проекта в режиме разработки:

Команда ниже запустит только контейнеры `backend-dev`, `frontend-dev`, `postgres`, `nginx-dev` и `cloudpub-dev`:

```sh
docker compose --profile dev up --build
```

> [!TIP]
> Чтобы открыть приложение, перейдите по адресу http://127.0.0.1. Документация Swagger бэкенда доступна на http://127.0.0.1/api/docs.

### Очистка с удалением volumes

```sh
docker compose --profile dev down -v
```

## Форматирование

- Форматирование исходного кода:

  ```sh
  pnpm format
  ```

- Проверка форматирования исходного кода:

  ```sh
  pnpm format:check
  ```

- Форматирование и сортировка [`package.json`](../package.json):

  ```sh
  pnpm format:package
  ```

## Линтинг

- Проверка стиля кода:

  ```sh
  pnpm lint
  ```

- Проверка архитектуры на соответствие методологии [Feature-Sliced Design](./ARCHITECTURE.md):

  ```sh
  pnpm lint:fsd
  ```

- Проверка типизации:

  ```sh
  pnpm lint:tsc
  ```

## Качество кода

Проверка изменений на качество:

```sh
pnpm lint-staged
```

## Генерация типов API

Для генерации TypeScript-типов из OpenAPI спецификации бэкенда используется [OpenAPI TypeScript](https://openapi-ts.dev):

Чтобы сгенерировать типы API:

0. [Убедитесь](#запуск-проекта-в-режиме-разработки), что бэкенд запущен.

1. Выполните:

   ```sh
   pnpm openapi
   ```

   Типы будут сохранены в [`src/shared/api/types.ts`](../src/shared/api/types.ts)

> [!NOTE]
> Типы обязательно должны находится под контролем git чтобы работал CI.
