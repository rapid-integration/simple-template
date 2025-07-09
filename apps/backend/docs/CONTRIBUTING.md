# Руководство по разработке бэкенда

## Создание миграций и взаимодействие с alembic

0. Убедитесь, что вы находитесь в директории `apps/backend` и виртуальное окружение Python,
   которое располагается в директории `apps/backend/.venv` ([имя директории с окружением важно](#почему-виртуальное-окружение-python-должно-располагаться-именно-в-appsbackendvenv-а-не-где-то-ещё)), активно.

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

## FAQ

### Почему виртуальное окружение Python должно располагаться именно в `apps/backend/.venv`, а не где-то ещё?

Когда вы устанавливаете зависимости [dev](../requirements/dev.txt), то помимо скаченных библиотек создаётся
бинарник ruff, который используется в качестве `executable` в хуках `alembic` для соблюдения код-стайла:
`%(here)s/.venv/bin/ruff` (подробнее смотрите в файле [`pyproject.toml`](../pyproject.toml)).
