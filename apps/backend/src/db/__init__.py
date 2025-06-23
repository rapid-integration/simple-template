from sqlalchemy import create_engine

from src.settings import settings

ENGINE = create_engine(str(settings.postgres.uri))
