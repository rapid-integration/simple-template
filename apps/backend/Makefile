start:
	@uv run --locked --module src

lint:
	@uv run --locked --group style mypy

check:
	@uv run --locked --group style ruff check --fix

format:
	@uv run --locked --group style ruff format

clean:	
	find . -type d -name __pycache__ -exec rm -rf {} +
	rm -rf .mypy_cache .ruff_cache
