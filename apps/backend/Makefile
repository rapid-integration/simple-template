include ../../.env

init:
	@uv run --locked --group dev pre-commit install

dev:
	@uv run --locked fastapi dev src/template/app.py --host ${BACKEND_APP_HOST} --port ${BACKEND_APP_PORT}

run:
	@uv run --locked fastapi run src/template/app.py --host ${BACKEND_APP_HOST} --port ${BACKEND_APP_PORT}

style: lint check format

lint:
	@uv run --locked --group style mypy

check:
	@uv run --locked --group style ruff check --fix

format:
	@uv run --locked --group style ruff format

clean:	
	find . -type d -name __pycache__ -exec rm -rf {} +
	rm -rf .mypy_cache .ruff_cache
