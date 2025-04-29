```sh
cp .env.example .env
```

```sh
docker compose --profile dev up --build
```

```sh
docker compose --profile dev down -v
```

```sh
docker compose --profile test up --build --abort-on-container-exit
```

```sh
docker compose --profile test down -v
```

```sh
docker compose --profile test-e2e up --build --abort-on-container-exit
```

```sh
docker compose --profile test-e2e down -v
```

```sh
docker compose --profile test-unit up --build --abort-on-container-exit
```

```sh
docker compose --profile test-unit down -v
```
