# Руководство по развёртыванию

```sh
cp .env.example .env
```

```sh
docker compose --profile prod up --build
```

```sh
docker compose --profile prod down -v
```

# Необходимые секреты для CI/CD
* SSH_HOST
* SSH_USER
* SSH_PRIVATE_KEY
* DOCKER_USERNAME
* DOCKER_PASSWORD
* IMAGE_NAME – имя образа, например `simple-template`
