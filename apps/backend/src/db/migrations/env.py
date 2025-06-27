import os

from alembic import context
from dotenv import load_dotenv
from sqlalchemy import create_engine

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", ".."))

dotenv_path = os.path.join(BASE_DIR, ".env")

load_dotenv(dotenv_path)

from src.db.models import Base  # noqa: E402
from src.settings import settings  # noqa: E402


def run_migrations_offline() -> None:
    context.configure(url=str(settings.postgres.uri), target_metadata=Base.metadata)

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    engine = create_engine(str(settings.postgres.uri))

    with engine.connect() as connection:
        context.configure(connection=connection, target_metadata=Base.metadata)

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
