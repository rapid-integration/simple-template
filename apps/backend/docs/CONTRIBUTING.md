# Руководство по разработке бэкенда

## Создание миграций и взаимодействие с alembic

0. Убедитесь, что вы находитесь в директории `apps/backend` и ваше виртуальное окружение активно.

```sh
cd apps/backend
source .venv/bin/activate
```

1. Запустите контейнер с базой данных в фоновом режиме:

```sh
docker compose up postgres -d --remove-orphans
```

2. Обновите базу данных до последей версии:

```sh
BACKEND_POSTGRES_HOST="localhost" alembic upgrade head
```

3. Сделайте миграцию или выполните иные необходимые команды:

```sh
BACKEND_POSTGRES_HOST="localhost" alembic revision --autogenerate -m "message"
```

> [!NOTE]
> Переопределение переменной `BACKEND_POSTGRES_HOST` важно, чтобы иметь возможность
> использовать команды `alembic` вне docker.

> [!TIP]
> Если вы часто работаете с `alembic`, то вы можете временно поменять переменную
> `BACKEND_POSTGRES_HOST` в [`.env`](../../../.env) с `"postgres"` на `"localhost"`,
> чтобы каждый раз не добавлять `BACKEND_POSTGRES_HOST="localhost"` перед командами.

4. Остановите и очистите контейнер с базой данных после всех действий:

```sh
docker compose down postgres -v --remove-orphans
```
